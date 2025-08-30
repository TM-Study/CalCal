import { getUser } from "@/utils/authUtil";
import { User } from "@supabase/supabase-js";

/**
 * ユーザー情報を取得
 * 
 * @returns user ユーザー情報
 */
export const GET = async () => {
  const user: User | null = await getUser();
  return Response.json(user);
}