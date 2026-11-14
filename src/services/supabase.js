import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://zlewcvkplyeqjpcqijkh.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPA_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
