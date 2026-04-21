-- ════════════════════════════════════════════════
-- Full-Stack Prep Dashboard — Supabase Schema
-- Run this in Supabase → SQL Editor → New Query
-- ════════════════════════════════════════════════

-- 1. Topic progress (which topics are marked done)
create table if not exists progress (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  topic_id    text not null,
  done        boolean not null default false,
  updated_at  timestamptz default now(),
  unique(user_id, topic_id)
);

-- 2. Notes
create table if not exists notes (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  topic_title text not null,
  content     text not null,
  created_at  timestamptz default now()
);

-- 3. Pomodoro sessions
create table if not exists sessions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  topic_title text not null,
  minutes     int not null default 45,
  created_at  timestamptz default now()
);

-- 4. Study days (for heatmap + streak)
create table if not exists study_days (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  study_date  date not null,
  count       int not null default 1,
  unique(user_id, study_date)
);

-- ════════════════════════════════════════════════
-- Row Level Security — users only see their own data
-- ════════════════════════════════════════════════

alter table progress   enable row level security;
alter table notes      enable row level security;
alter table sessions   enable row level security;
alter table study_days enable row level security;

-- Progress policies
create policy "Users can read own progress"   on progress   for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on progress   for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on progress   for update using (auth.uid() = user_id);
create policy "Users can delete own progress" on progress   for delete using (auth.uid() = user_id);

-- Notes policies
create policy "Users can read own notes"      on notes      for select using (auth.uid() = user_id);
create policy "Users can insert own notes"    on notes      for insert with check (auth.uid() = user_id);
create policy "Users can delete own notes"    on notes      for delete using (auth.uid() = user_id);

-- Sessions policies
create policy "Users can read own sessions"   on sessions   for select using (auth.uid() = user_id);
create policy "Users can insert own sessions" on sessions   for insert with check (auth.uid() = user_id);

-- Study days policies
create policy "Users can read own study days"   on study_days for select using (auth.uid() = user_id);
create policy "Users can insert own study days" on study_days for insert with check (auth.uid() = user_id);
create policy "Users can update own study days" on study_days for update using (auth.uid() = user_id);

-- ════════════════════════════════════════════════
-- Indexes for performance
-- ════════════════════════════════════════════════
create index if not exists idx_progress_user   on progress(user_id);
create index if not exists idx_notes_user      on notes(user_id);
create index if not exists idx_sessions_user   on sessions(user_id);
create index if not exists idx_study_days_user on study_days(user_id);
