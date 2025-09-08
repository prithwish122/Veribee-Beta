// app/api/detect-spam/route.js

// This endpoint checks whether the user's response is spam using Google Gemini API
import { NextResponse } from 'next/server';

// NOTE: No official "gemini-2.0-flash" exists yet.
// Using the latest available flash model.
const GEMINI_MODEL_NAME = "gemini-2.0-flash"; 
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL_NAME}:generateContent`;

export async function POST(request) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables.');
    return NextResponse.json({ message: 'Server configuration error: API key missing.' }, { status: 500 });
  }

  const { questionJson, userResponseJson } = await request.json();

  if (!questionJson || !userResponseJson) {
    return NextResponse.json({ message: 'Missing questionJson or userResponseJson in request body.' }, { status: 400 });
  }

  // --- MAJOR ENHANCEMENTS TO SYSTEM INSTRUCTIONS ---
  const systemInstructions = `
You are a highly sophisticated form data analyst. Your primary task is to identify 'spammy' or 'low-quality' responses by detecting subtle patterns with a high degree of confidence.

Your output MUST be a JSON object with the following structure:
{
  "is_spam": boolean,
  "confidence_score": number,
  "reason": string
}

Follow these steps to determine the output:
1.  **Analyze the response** against the following criteria, paying close attention to nuanced patterns:

    **A. Content-Based Checks (High Confidence Spam):**
    *   **Irrelevance or Nonsense:** The answer is illogical, gibberish, or completely unrelated to the question.
    *   **Promotional Content:** Includes unsolicited links, advertisements, email addresses, etc.
    *   **Offensive Content:** Contains hate speech, profanity, etc.
    *   **Inconsistent Data Type:** The answer provided does not match the expected data type of the question.

    **B. Pattern-Based Checks (High Confidence Spam):**
    *   **Straight-Lining:** Consistently selecting answers in a non-random, predictable line. This is a critical indicator. Examples:
        *   **First Option:** Choosing the first available option for all/most questions.
        *   **Last Option:** Choosing the last available option for all/most questions.
        *   **Middle Option:** Choosing the exact middle option (e.g., 'Neutral') for all/most questions.
    *   **Alternating Patterns:** Obvious, simple alternating selections (e.g., A, B, A, B...) that are highly unlikely to be genuine.
    
    **C. Behavioral Checks (Medium to High Confidence Spam):**
    *   **Extreme Responding:** Consistently selecting ONLY the most extreme options on scales (e.g., only choosing 'Strongly agree' and 'Strongly disagree', ignoring all middle options). This suggests the user is not considering the nuance of each question.
    *   **Contradictory Answers:** Providing answers that are logically inconsistent. Example: Strongly agreeing that phone use *interferes* with studies (Q4) while also saying they primarily use it for *work/study* (Q10). This requires careful semantic analysis.

2.  **Assign a Confidence Score:** Based on your analysis, assign a numerical 'confidence_score' from 0.0 to 1.0. Strong patterns from section B should result in a very high score (0.95+). Behavioral checks from section C might result in a slightly lower but still high score (0.8-0.9).

3.  **Apply the Threshold:**
    *   If your 'confidence_score' is 0.8 or higher, set 'is_spam' to true.
    *   Otherwise, set 'is_spam' to false.

4.  **Provide a Reason:** The 'reason' string must clearly explain the specific pattern or issue detected (e.g., "Detected Extreme Responding pattern," "Detected Straight-Lining with the last option," "Found contradictory answers between Q4 and Q10.").

Do not include any other text or markdown outside of the final JSON object.
`;

  const userPrompt = `
Here is the form question definition JSON:
\`\`\`json
${JSON.stringify(questionJson, null, 2)}
\`\`\`

Here is a user's response JSON:
\`\`\`json
${JSON.stringify(userResponseJson, null, 2)}
\`\`\`

Based on the question definitions and the provided response, perform your analysis and provide the JSON output.
`;

  const fullPrompt = `${systemInstructions}\n${userPrompt}`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: fullPrompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.1,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', response.status, errorData);
      return NextResponse.json({ message: 'Error from Gemini API', details: errorData }, { status: response.status });
    }

    const geminiData = await response.json();
    console.log('Full Gemini API Response:', JSON.stringify(geminiData, null, 2));

    let geminiOutputText = null;

    if (geminiData.candidates && geminiData.candidates.length > 0) {
      geminiOutputText = geminiData.candidates[0].content?.parts?.[0]?.text;
    } else if (geminiData.promptFeedback?.safetyRatings) {
      const safetyFeedback = geminiData.promptFeedback.safetyRatings;
      console.warn('Gemini blocked content due to safety filters:', safetyFeedback);
      return NextResponse.json(
        { 
          is_spam: true, 
          confidence_score: 1.0,
          reason: 'Response content was blocked by Gemini safety filters.', 
          safetyDetails: safetyFeedback 
        }, 
        { status: 200 }
      );
    } else {
      console.warn('Gemini returned an empty candidates array and no explicit safety feedback.', geminiData);
      return NextResponse.json({ message: 'Gemini did not generate a response.', rawOutput: geminiData }, { status: 500 });
    }

    if (geminiOutputText) {
      try {
        const cleanedJsonString = geminiOutputText.replace(/```json\n?|```/g, '').trim();
        const result = JSON.parse(cleanedJsonString);
        return NextResponse.json(result, { status: 200 });
      } catch (e) {
        console.error('Failed to parse Gemini output as JSON:', e);
        return NextResponse.json({ message: 'Gemini output was not valid JSON', rawOutput: geminiOutputText }, { status: 500 });
      }
    } else {
      console.warn('Gemini generated an empty text part.', geminiData.candidates[0]?.finishReason);
      return NextResponse.json({ message: 'Gemini generated an empty text response.', rawOutput: geminiData }, { status: 500 });
    }

  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}