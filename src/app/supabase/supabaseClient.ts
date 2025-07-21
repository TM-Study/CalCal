import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabaseの接続情報
 */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Supabaseに接続するクライアントインスタンス
 */
export const createClient = () =>
  createBrowserClient(
    SUPABASE_URL!,
    SUPABASE_ANON_KEY!,
  );
