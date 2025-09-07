// components/Survey.tsx
'use client';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useAppKitAccount } from "@reown/appkit/react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.i18n";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";

type Props = {
    json: Record<string, any>;          // ← your form definition
    onComplete?: (data: any) => void;   // optional parent callback
};

export default function SurveyComponent({ json, onComplete }: Props) {
    const { address } = useAppKitAccount();
    const survey = new Model(json);

    survey.onComplete.add(async (sender) => {
        console.log("Survey results: ", sender.data);
        console.log("User address: ", address);
        console.log("Form ID: ", json.formId);
        // Save response to /api/save-response with formId and address
        try {
            const res = await fetch("/api/save-response", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formId: json.formId,
                    address,
                    response: sender.data
                })
            });
            const result = await res.json();
            console.log("Saved response:", result);
        } catch (err) {
            console.error("Failed to save response:", err);
        }
        onComplete?.(sender.data); // fire callback
    });

    // Make the survey fill its container and remove edge spaces
    return (
        <div style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
            <Survey model={survey} style={{ width: "100%", height: "100%", margin: 0, padding: 0 }} />
        </div>
    );
}