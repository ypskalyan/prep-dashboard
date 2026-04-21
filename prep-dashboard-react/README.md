# 🚀 Full-Stack Prep Dashboard

Personal full-stack engineering prep tracker — roadmap, progress, notes & Pomodoro timer. Powered by Supabase.

## Stack
- **Frontend**: React 18 + Vite + Tailwind CSS + React Router v6
- **Backend**: Supabase (Postgres + Auth + RLS)
- **Hosting**: GitHub Pages (auto-deploy via GitHub Actions)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add Supabase credentials
Open `src/lib/supabase.js` and replace:
```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
```

### 3. Run locally
```bash
npm run dev
```

### 4. Deploy
Push to `main` branch — GitHub Actions builds and deploys automatically.

Make sure GitHub Pages is set to use **GitHub Actions** as the source:
Repo → Settings → Pages → Source → **GitHub Actions**

## Features
- Google OAuth login
- 6 phases, 38 topics with progress tracking
- Pomodoro timer with session logging
- Study heatmap + streak tracking
- Curated resources for each phase
- Notes per topic, cloud-synced
- Analytics dashboard
