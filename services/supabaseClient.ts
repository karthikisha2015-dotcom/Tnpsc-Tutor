import { createClient } from '@supabase/supabase-js';

// NOTE: In a real production app, these should be in a .env file.
// For this demo environment, please replace these with your actual Supabase credentials.
// You can get these from your Supabase Dashboard -> Project Settings -> API.

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
