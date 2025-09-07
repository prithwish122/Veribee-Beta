// components/Survey.tsx
'use client';

import React from 'react';
import { toast } from '@/hooks/use-toast';
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
    // State for spam error
    const [spamError, setSpamError] = React.useState<string | null>(null);

    survey.onComplete.add(async (sender) => {
        setSpamError(null);
        let toastId: string | undefined = undefined;
        // 1. Fetch the form JSON by formId
        let formJson = json;
        if (!json.pages && json.formId) {
            try {
                toastId = toast({ title: 'Fetching form details...', description: 'Preparing for spam check', duration: 2000 });
                const res = await fetch(`/api/get-specific-form?formId=${json.formId}`);
                const data = await res.json();
                if (data && data.json) {
                    formJson = data.json;
                }
            } catch (e) {
                // fallback: use current json
            }
        }
        // 2. Call /api/detect-spam
        try {
            toastId = toast({ title: 'Checking for spam...', description: 'Analyzing your response', duration: 3000 });
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
                toast({ title: 'Spam Detected', description: spamResult.reason || 'Your response was detected as spam.', variant: 'destructive', duration: 6000 });
                setSpamError(spamResult.reason || "Your response was detected as spam.");
                console.warn("Spam detected:", spamResult.reason);
                return; // Do not save
            }
        } catch (err) {
            toast({ title: 'Spam Check Failed', description: 'Could not verify spam status. Please try again.', variant: 'destructive', duration: 6000 });
            console.error("Spam check failed", err);
            return;
        }
        // 3. Save response to /api/save-response with formId and address
        try {
            toastId = toast({ title: 'Saving your response...', description: 'Please wait', duration: 3000 });
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
                toast({ title: 'Response Saved!', description: 'Thank you for participating.', duration: 4000 });
            } else {
                toast({ title: 'Save Failed', description: result.error || 'Could not save your response.', variant: 'destructive', duration: 6000 });
                return;
            }
        } catch (err) {
            toast({ title: 'Save Failed', description: 'Could not save your response.', variant: 'destructive', duration: 6000 });
            console.error("Failed to save response:", err);
            return;
        }
        onComplete?.(sender.data); // fire callback
    });

    // Make the survey fill its container and remove edge spaces
    return (
        <div style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
            {spamError && (
                <div style={{ color: 'red', marginBottom: 12 }}>{spamError}</div>
            )}
            <Survey model={survey} style={{ width: "100%", height: "100%", margin: 0, padding: 0 }} />
        </div>
    );
}