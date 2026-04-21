import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://oehkfmfaeseqkuzbdmmb.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laGtmbWZhZXNlcWt1emJkbW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjUzNzcsImV4cCI6MjA5MjM0MTM3N30.OcC07mM4kkk0XgF6ijF2ErwMGDsBXhBbyaQsXTzQqNY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
