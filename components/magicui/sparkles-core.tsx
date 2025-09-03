import React from "react";

export const SparklesCore = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" stroke="currentColor" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41" />
    <path d="M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
