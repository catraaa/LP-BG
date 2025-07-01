import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ifentmtaicypqtldqlds.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZW50bXRhaWN5cHF0bGRxbGRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExOTY0NjcsImV4cCI6MjA2Njc3MjQ2N30.MXfUF5rKmxt6e-5ByDeyuKcfTYIszXnAloHD2YRVgjo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
