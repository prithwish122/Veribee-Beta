"use client";

import React, { useEffect, useState } from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.i18n";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { customThemeVariablesDark } from "./theme_json";
import SurveyCreatorTheme from "survey-creator-core/themes";
import { registerCreatorTheme, editorLocalization } from "survey-creator-core";

registerCreatorTheme(SurveyCreatorTheme);

// Step 1: Define a theme object
const customTheme = {
    themeName: "customTheme",
    cssVariables: { ...customThemeVariablesDark },
};

// Get en locale strings
const enLocale = editorLocalization.getLocale("en");

function addCustomTheme(theme: any, userFriendlyThemeName: any) {
    enLocale.creatortheme.names[theme.themeName] = userFriendlyThemeName;
    registerCreatorTheme(theme);
}

addCustomTheme(customTheme, "Custom Theme");

function SurveyCreatorRenderComponent() {
    const [title, setTitle] = useState("");
    const [isHover, setIsHover] = useState(false);

    // Memoize the creator instance so it's only created once
    const creator = React.useMemo(() => {
        const c = new SurveyCreator({ showTranslationTab: true });
        c.applyCreatorTheme(customTheme);
        c.saveSurveyFunc = (saveNo: number, callback: any) => {
            console.log("Survey JSON:", c.JSON);
            alert("Form ready to publish!");
            callback(saveNo, true);
        };
        return c;
    }, []);

    // (Removed duplicate useState and useEffect)

    // ✅ Custom Publish function to mock API
    const handlePublish = async () => {
        if (!creator.JSON.title || !creator) {
            setTitle(creator.JSON.title);
            alert("Please enter a title and build the form first!");
            return;
        }

        try {
            // 1. Fetch the last form's unique id
            const lastRes = await fetch("/api/save-survey?last=1");
            let newFormId = 1;
            if (lastRes.ok) {
                const lastData = await lastRes.json();
                if (lastData && lastData.lastForm && typeof lastData.lastForm.formId === "number") {
                    newFormId = lastData.lastForm.formId + 1;
                }
            }

            // 2. Publish with new id and other details
            const body = JSON.stringify({
                formId: newFormId,
                title: creator.JSON.title,
                status: "Active",
                description: creator.JSON.description || "",
                amount: "245 responses",
                time: "2m ago",
                json: creator.JSON
            });
            console.log("Publishing survey with body:", body);
            const res = await fetch("/api/save-survey", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            });

            const data = await res.json();
            alert(data.message || "Survey saved!");
        } catch (err) {
            console.error(err);
            alert("Failed to save survey.");
        }
    };

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Top bar with title + publish */}
            <div style={{ padding: "10px", background: "#111827", color: "#fff", display: "flex", justifyContent: "flex-end" }}>
                {/* <input
                    type="text"
                    placeholder="Enter survey title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "300px", padding: "5px" }}
                /> */}
                <button
                    onClick={handlePublish}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    style={{
                        marginLeft: "10px",
                        padding: "6px 12px",
                        background: isHover ? "#1741a6" : "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "0.9em",
                        cursor: "pointer",
                        height: "38px",
                        fontSize: "14px",
                        width: "100px",
                        transition: "background 0.2s"
                    }}
                >
                    Publish
                </button>
            </div>

            {/* Survey Creator */}
            <div style={{ flex: 1 }}>
                <SurveyCreatorComponent creator={creator} />
            </div>
        </div>

    );
}

export default SurveyCreatorRenderComponent;
