import { User } from '@supabase/supabase-js';
import { createClient } from './supabase/server';

/**
 * サインアップ処理
 * 
 * <see href="https://supabase.com/docs/reference/javascript/auth-signup">Supabase - Create a new user</see>
 * 
 * @param email メールアドレス
 * @param password パスワード
 * @returns ユーザ情報
 */
export const signUp = async (email: string, password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  return { data, errorMessage: error?.message };
}

/**
 * サインイン処理
 * 
 * <see href="https://supabase.com/docs/reference/javascript/auth-signin">Supabase - Sign in a user</see>
 * 
 * @param email メールアドレス
 * @param password パスワード
 * @returns ユーザ情報
 */
export const signIn = async (email: string, password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  return { data, errorMessage: error?.message };
}

/**
 * ユーザ情報の取得
 * 
 * <see href="https://supabase.com/docs/reference/javascript/auth-get-user">Supabase - Retrieve a user</see>
 * 
 * @return ユーザ情報
 */
export const getUser = async (): Promise<User | null> => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data.user;
}