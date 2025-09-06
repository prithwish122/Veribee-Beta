// components/Survey.tsx
'use client';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.i18n";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";

type Props = {
    json: Record<string, any>;          // ← your form definition
    onComplete?: (data: any) => void;   // optional parent callback
};

export default function SurveyComponent({ json, onComplete }: Props) {
    const survey = new Model(json);

    survey.onComplete.add((sender) => {
        onComplete?.(sender.data);        // fire callback
    });

    // Make the survey fill its container and remove edge spaces
    return (
        <div style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
            <Survey model={survey} style={{ width: "100%", height: "100%", margin: 0, padding: 0 }} />
        </div>
    );
}