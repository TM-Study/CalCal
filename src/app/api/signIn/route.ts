import { signIn } from "@/utils/authUtil";

/**
 * サインイン
 * 
 * @param req リクエスト
 */
export const POST = async (req: Request) => {

  const data = await req.json();
  const { email, password } = data;

  await signIn(email, password);
}