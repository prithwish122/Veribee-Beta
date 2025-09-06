// components/Survey.tsx
'use client';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

type Props = {
  json: Record<string, any>;          // ← your form definition
  onComplete?: (data: any) => void;   // optional parent callback
};

export default function SurveyComponent({ json, onComplete }: Props) {
  const survey = new Model(json);

  survey.onComplete.add((sender) => {
    onComplete?.(sender.data);        // fire callback
  });

  return <Survey model={survey} />;
}