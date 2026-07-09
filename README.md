# Veribee Beta

Veribee is an AI-powered Web3 survey and research platform built to collect high-quality, authentic feedback at scale.  
It combines OCID-based identity, AI response validation, and incentive-ready workflows so teams can run surveys faster and trust the outcomes.

## What Veribee is built for

- Launching secure, customizable surveys
- Filtering spam and low-quality responses with AI
- Analyzing response data into actionable insights
- Running incentive-based research for communities and products

## Core Features

- **Survey creation and participation** flows in a modern Next.js app
- **AI quality checks** via Gemini-backed API routes
- **Survey analytics** and dashboard views for form owners
- **Web3-ready integration** with OCID and wallet connectivity
- **MongoDB-backed storage** for forms, responses, and profile data

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling/UI:** Tailwind CSS, Radix UI, custom components
- **Data:** MongoDB
- **AI:** Google Gemini APIs
- **Web3:** Wagmi, Reown AppKit, OpenCampus OCID

## Getting Started

### 1) Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm
- MongoDB instance

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id
```

### 4) Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and Run

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run lint` — run Next.js lint command

## Main App Areas

- `/` — landing page and project overview
- `/dashboard` — survey management, analytics, participation flows
- `/redirect` — OCID login callback route
- `/app/api/*` — API routes for forms, responses, spam detection, and chart analysis

## API/Service Requirements

- Gemini-backed routes require `GEMINI_API_KEY`
- Database routes require `MONGODB_URI`
- Wallet connect setup expects `NEXT_PUBLIC_PROJECT_ID`

## Notes

- If linting prompts for ESLint setup, initialize ESLint config first and rerun `npm run lint`.
- Ensure your OCID redirect URI matches the local callback path (`/redirect`) during development.
