import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vuliqehkvzzuxjpxepce.supabase.co';
const supabaseKey = 'YeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1bGlxZWhrdnp6dXhqcHhlcGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODM1NDgsImV4cCI6MjA3Nzk1OTU0OH0._HWmrl6Rtr18vac7Vl-RQ8Iq4eiYWnS4bU8Ggej9PSM';  // ← Make sure this is correct

export const supabase = createClient(supabaseUrl, supabaseKey);
