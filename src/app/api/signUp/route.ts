import { signUp } from "@/utils/authUtil";

/**
 * サインアップ
 * 
 * @param req リクエスト
 */
export const POST = async (req: Request) => {

  const data = await req.json();
  const { email, password } = data;

  const { data: userInfo, errorMessage } = await signUp(email, password);

  return new Response(JSON.stringify({ userInfo, errorMessage }));
}