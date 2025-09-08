// app/api/chart-analysis/route.ts

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// NOTE: Use a valid, available model. "gemini-1.5-flash-latest" is a great choice.
const GEMINI_MODEL_NAME = "gemini-1.5-flash-latest";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL_NAME}:generateContent`;

// --- The NEW, Improved Prompt Instructions for the AI Model ---
// This detailed prompt with a full example structure is crucial for guiding the LLM
// to produce a consistently correct and well-formatted JSON output.
const systemInstructions = `
You are an expert data analyst AI specializing in dynamic survey response analysis. Your primary task is to analyze an arbitrary form's questions and all its user responses to generate a structured JSON output for two specific visualizations.

Your output MUST be a single, valid JSON object. Do NOT include any other text, explanations, or markdown outside of the JSON.

---
**EXAMPLE OUTPUT STRUCTURE (for a hypothetical 'Employee Satisfaction Survey'):**
---
{
  "pieChartAnalysis": {
    "chartData": [
      { "category": "highly-satisfied", "responses": 58, "fill": "var(--color-highly-satisfied)" },
      { "category": "satisfied", "responses": 120, "fill": "var(--color-satisfied)" },
      { "category": "neutral", "responses": 45, "fill": "var(--color-neutral)" },
      { "category": "dissatisfied", "responses": 15, "fill": "var(--color-dissatisfied)" }
    ],
    "chartConfig": {
      "responses": { "label": "Responses" },
      "highly-satisfied": {
        "label": "Highly Satisfied",
        "color": "#22c55e"
      },
      "satisfied": {
        "label": "Satisfied",
        "color": "#84cc16"
      },
      "neutral": {
        "label": "Neutral",
        "color": "#f59e0b"
      },
      "dissatisfied": {
        "label": "Dissatisfied",
        "color": "#ef4444"
      }
    }
  },
  "radarChartAnalysis": {
    "chartData": [
      { "metric": "Work-Life Balance", "score": 350 },
      { "metric": "Management Support", "score": 280 },
      { "metric": "Career Growth", "score": 310 },
      { "metric": "Compensation & Benefits", "score": 255 },
      { "metric": "Company Culture", "score": 390 }
    ],
    "chartConfig": {
      "score": {
        "label": "Aggregate Score",
        "color": "#3b82f6"
      }
    }
  }
}
---

**YOUR TASK:**
Now, perform the same analysis on the provided form data and generate a JSON object that follows the exact structure and detail shown in the example above.

**Step-by-Step Instructions:**

**Part 1: Pie Chart - Overall Assessment**

1.  **Understand the Form's Core Theme:** Analyze the \`questionJson\` to determine the survey's primary purpose (e.g., satisfaction, risk assessment, feedback).
2.  **Define 3-5 Overall Categories:** Based on the theme, define 3 to 5 meaningful categories (e.g., "High Risk", "Moderate Risk", "Low Risk"). These categories will become the \`category\` keys in your \`chartData\`.
3.  **Classify and Aggregate:** Analyze each user's answers in \`usersAnswerJson\` to classify them into one of your defined categories. Count the total number of respondents in each category.
4.  **Format Pie Chart Output:** Construct the \`pieChartAnalysis\` object, mirroring the structure in the example. For \`chartData\`, the \`category\` should be a kebab-case string. The \`fill\` should follow the pattern \`var(--color-CATEGORY)\`. For \`chartConfig\`, create a key for each \`category\` with a human-readable \`label\` and a distinct, appropriate hex \`color\`.

**Part 2: Radar Chart - Key Metrics**

1.  **Identify 5-7 Key Metrics:** Analyze the questions in \`questionJson\` and group them into 5 to 7 underlying themes or metrics. These will be your \`metric\` values.
2.  **Score and Aggregate:** Devise a logical scoring system for the answers. For each metric, calculate a single aggregate score by summing the relevant scores from ALL user responses.
3.  **Format Radar Chart Output:** Construct the \`radarChartAnalysis\` object, mirroring the structure in the example. The \`chartData\` should contain your identified metrics and their aggregate scores. The \`chartConfig\` should define the label and color for the 'score'.

Generate only the final JSON object.
`;

// --- Main API Handler ---

export async function POST(request: NextRequest) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set.');
    return NextResponse.json({ message: 'Server configuration error: API key missing.' }, { status: 500 });
  }

  try {
    const body = await request.json();
const filePath = path.join(process.cwd(), "koji.json");

    // Write JSON to file (pretty formatted)
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), "utf-8");    const { questionJson, usersAnswerJson } = body;
    console.log("==========",body);
    if (!questionJson || !usersAnswerJson || !Array.isArray(usersAnswerJson.responses)) {
      return NextResponse.json({ message: "Missing or invalid 'questionJson' or 'usersAnswerJson'.", isQuestion: !questionJson, isResponse: !usersAnswerJson,isArrya: !Array.isArray(usersAnswerJson.responses) }, { status: 400 });
    }

    const userPrompt = `
      Here is the form question definition JSON:
      \`\`\`json
      ${JSON.stringify(questionJson, null, 2)}
      \`\`\`

      Here are all the user responses JSON:
      \`\`\`json
      ${JSON.stringify(usersAnswerJson, null, 2)}
      \`\`\`

      Perform the dynamic analysis and provide the required JSON output.
    `;

    const fullPrompt = systemInstructions + userPrompt;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.2,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
    //   console.error('Gemini API error:', response.status, errorData);
      return NextResponse.json({ message: 'Error from Gemini API', details: errorData }, { status: response.status });
    }

    const geminiData = await response.json();
    // console.log('Full Gemini API Response:', JSON.stringify(geminiData, null, 2));
    const geminiOutputText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!geminiOutputText) {
        console.warn('Gemini returned an empty or unexpected response.', geminiData);
        if (geminiData.promptFeedback?.safetyRatings) {
            return NextResponse.json({ message: 'Request blocked by safety filters.', details: geminiData.promptFeedback.safetyRatings }, { status: 400 });
        }
        return NextResponse.json({ message: 'Gemini did not generate a response.', rawOutput: geminiData }, { status: 500 });
    }
    
    try {
      const result = JSON.parse(geminiOutputText);
      return NextResponse.json(result, { status: 200 });
    } catch (e) {
        console.log("EEEEEEEEEEEERROOORRRR",e);
      console.error('Failed to parse Gemini output as JSON:', e);
      return NextResponse.json({ message: 'Gemini output was not valid JSON', rawOutput: geminiOutputText }, { status: 500 });
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error in /api/chart-analysis:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
  }
}