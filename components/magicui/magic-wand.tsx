import React from "react";

export const MagicWand = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M8 9h2" />
    <path d="M20 9h2" />
    <path d="M17.8 6.2l1.4-1.4" />
    <path d="M6.2 17.8l-1.4 1.4" />
    <path d="M3 3l18 18" />
    <path d="M9 15l-6 6" />
    <path d="M16 8l6-6" />
  </svg>
);
