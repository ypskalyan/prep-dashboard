# 🚀 Full-Stack Prep Dashboard — Setup Guide

## What's included
- `index.html` — the full dashboard (single file, zero build step)
- `schema.sql` — Supabase database schema
- `README.md` — this guide

---

## ⚡ 10-minute setup

### Step 1 — Create a Supabase project (free)
1. Go to [supabase.com](https://supabase.com) → **Start for free**
2. Sign up and click **New project**
3. Give it a name (e.g. `prep-dashboard`), set a DB password, pick a region close to you
4. Wait ~2 minutes for it to provision

### Step 2 — Run the SQL schema
1. In your Supabase project → **SQL Editor** → **New query**
2. Paste the entire contents of `schema.sql`
3. Click **Run** — you should see "Success. No rows returned"

### Step 3 — Enable Google OAuth
1. In Supabase → **Authentication** → **Providers** → **Google**
2. Toggle **Enable**
3. You need a Google OAuth client. Go to [console.cloud.google.com](https://console.cloud.google.com):
   - Create a project (or use existing)
   - APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID
   - Application type: **Web application**
   - Authorized redirect URIs: paste your Supabase callback URL
     (shown in the Supabase Google provider page, looks like `https://xxxx.supabase.co/auth/v1/callback`)
4. Copy the **Client ID** and **Client Secret** back into Supabase → Save

### Step 4 — Get your API keys
1. Supabase project → **Settings** → **API**
2. Copy:
   - **Project URL** (e.g. `https://abcdefgh.supabase.co`)
   - **anon / public key** (the long `eyJ...` string)

### Step 5 — Add keys to index.html
Open `index.html` and find lines ~85-86:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Replace with your actual values:

```javascript
const SUPABASE_URL = 'https://abcdefgh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIs...';
```

### Step 6 — Deploy to GitHub Pages
1. Create a new GitHub repo (e.g. `prep-dashboard`)
2. Push `index.html`, `schema.sql`, `README.md`
3. Repo → **Settings** → **Pages** → Source: `main` branch, `/ (root)`
4. Your dashboard is live at `https://your-username.github.io/prep-dashboard`

### Step 7 — Add your site URL to Supabase
1. Supabase → **Authentication** → **URL Configuration**
2. **Site URL**: `https://your-username.github.io/prep-dashboard`
3. **Redirect URLs**: add the same URL
4. Also add `http://localhost:3000` if you want to test locally

---

## 🧪 Testing locally
Just open `index.html` in a browser. No server needed.
For Google OAuth to work locally, add `http://localhost` to your Supabase redirect URLs
and open via `file://` or a local server (`python3 -m http.server`).

---

## 📱 Features
| Feature | Description |
|---------|-------------|
| Google OAuth | One-click login, no passwords |
| Cloud sync | Progress, notes, sessions saved to Postgres |
| Roadmap | 6 phases, 38 topics, mark done, inline notes |
| Pomodoro | 45-min timer, auto-logs sessions |
| Resources | 30+ curated YouTube/docs/courses with links |
| Progress | GitHub-style heatmap, phase bars, sessions |
| Analytics | 28-day calendar, time by day, tag breakdown |
| Notes | Per-topic notes, searchable, cloud-persisted |

---

## 🔒 Security
- Row Level Security (RLS) is enabled on all tables
- Users can only read/write their own data
- The `anon` key is safe to expose in frontend code — RLS enforces security at the DB level
- Never commit your `service_role` key to GitHub

---

## 🛠 Troubleshooting
**"Invalid API key"** → Double-check you pasted the `anon` key (not service_role)  
**Google login not working** → Check redirect URLs in both Google Console and Supabase  
**Data not saving** → Open browser console, check for RLS errors → re-run `schema.sql`  
**Blank page** → Check browser console for JS errors, ensure Supabase URL has no trailing slash
