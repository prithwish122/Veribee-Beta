// app/api/detect-spam/route.js

import { NextResponse } from 'next/server';

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

  // --- KEY CHANGES IN SYSTEM INSTRUCTIONS ---
  const systemInstructions = `
You are an expert form data analyst. Your primary task is to identify 'spammy' or 'low-quality' responses with a high degree of confidence.

Your output MUST be a JSON object with the following structure:
{
  "is_spam": boolean,
  "confidence_score": number,
  "reason": string
}

Follow these steps to determine the output:
1.  **Analyze the response** against the following criteria for being 'spammy' or 'low-quality':
    *   **Irrelevance or Nonsense:** The answer is illogical, gibberish, or completely unrelated to the question.
    *   **Promotional Content:** Includes unsolicited links, advertisements, email addresses, or other promotional material.
    *   **Offensive Content:** Contains hate speech, profanity, or other inappropriate language.
    *   **Low Effort / Automated Pattern:** Consistently provides the same answer, has contradictory answers, provides inappropriate short answers to open-ended questions.
    *   **Inconsistent Data Type:** The answer provided does not match the expected data type or format of the question.

2.  **Assign a Confidence Score:** Based on your analysis, assign a numerical 'confidence_score' from 0.0 to 1.0 representing your certainty that the response is spammy. A score of 1.0 means you are absolutely certain it is spammy. A score of 0.0 means you are absolutely certain it is not.

3.  **Apply the Threshold:**
    *   If your 'confidence_score' is 0.8 or higher, set 'is_spam' to true.
    *   Otherwise, set 'is_spam' to false.

4.  **Provide a Reason:** The 'reason' string should always explain your analysis and justify the confidence score, regardless of the final 'is_spam' value.

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
        // Added a regex to clean potential markdown fences around the JSON
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