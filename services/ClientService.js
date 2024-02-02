const { createClient } = require('@supabase/supabase-js');

try {
    const supabase = createClient(
        process.env.PUBLIC_SUPABASE_URL,
        process.env.PUBLIC_SUPABASE_ANON_KEY
    );
    module.exports = supabase;
} catch (error) {
    console.error('Supabase client initialization failed:', error);
};
