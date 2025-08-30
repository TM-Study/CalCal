import { signIn } from "@/utils/authUtil";

/**
 * サインイン
 * 
 * @param req リクエスト
 */
export const POST = async (req: Request) => {

  const data = await req.json();
  const { email, password } = data;

  const userInfo = await signIn(email, password);

  return new Response(JSON.stringify(userInfo));
}