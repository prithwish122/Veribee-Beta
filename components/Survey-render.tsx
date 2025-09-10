// components/Survey.tsx
'use client';

import React from 'react';
import { toast } from 'sonner';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useAppKitAccount } from "@reown/appkit/react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.i18n";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";

type Props = {
  json: Record<string, any>;          // form definition
  onComplete?: (data: any) => void;   // optional parent callback
};

// Inline spinner for toast
const Spinner = () => (
  <svg
    className="animate-spin mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="18"
    height="18"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8z"
    ></path>
  </svg>
);

export default function SurveyWrapper({ json, onComplete }: Props) {
  const { address } = useAppKitAccount();
  const [spamError, setSpamError] = React.useState<string | null>(null);

  const survey = React.useMemo(() => new Model(json), [json]);

  React.useEffect(() => {
    const handleComplete = async (sender: any) => {
      setSpamError(null);

      // 1. Fetch the form JSON by formId
      let formJson = json;
      if (!json.pages && json.formId) {
        try {
          toast('Fetching form details...', {
            description: 'Preparing for spam check',
            duration: 2000
          });
          const res = await fetch(`/api/get-specific-form?formId=${json.formId}`);
          const data = await res.json();
          if (data && data.json) {
            formJson = data.json;
          }
        } catch {
          // fallback: use current json
        }
      }

      // 2. Call /api/detect-spam
      try {
        toast(
          <div style={{ display: "flex", alignItems: "center" }}>
            <Spinner /> Checking for spam...
          </div>,
          { description: "Analyzing your response", duration: 3000 }
        );

        const spamRes = await fetch("/api/detect-spam", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            questionJson: formJson,
            userResponseJson: { response: sender.data }
          })
        });
        const spamResult = await spamRes.json();

        if (spamResult.is_spam) {
          toast('Spam Detected', {
            // description: spamResult.reason || 'Your response was detected as spam.',
            description: '🚨🚨 Your response was detected as spam.',
            duration: 6000
          });
        //   setSpamError("Your response was detected as spam.");
        //   console.warn("Spam detected:", spamResult.reason);
          return; // Do not save
        }
      } catch (err) {
        toast('Spam Check Failed', {
          description: 'Could not verify spam status. Please try again.',
          duration: 6000
        });
        console.error("Spam check failed", err);
        return;
      }

      // 3. Save response
      try {
        toast(
          <div style={{ display: "flex", alignItems: "center" }}>
            <Spinner /> Saving your response...
          </div>,
          { description: "Please wait", duration: 3000 }
        );

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

        if (result.success) {
          toast('Response Saved!', {
            description: 'Thank you for participating.',
            duration: 4000
          });
        } else {
          toast('Save Failed', {
            description: result.error || 'Could not save your response.',
            duration: 6000
          });
          return;
        }
      } catch (err) {
        toast('Save Failed', {
          description: 'Could not save your response.',
          duration: 6000
        });
        console.error("Failed to save response:", err);
        return;
      }

      onComplete?.(sender.data); // fire callback
    };

    // Attach once
    survey.onComplete.add(handleComplete);

    // Cleanup to prevent duplicate handlers
    return () => {
      survey.onComplete.remove(handleComplete);
    };
  }, [survey, json, address, onComplete]);

  return (
    <div style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
      {spamError && (
        <div style={{ color: 'red', marginBottom: 12 }}>{spamError}</div>
      )}
      <Survey
        model={survey}
        style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
      />
    </div>
  );
}
