import { deleteByDate } from "@/utils/crudUtil";

/**
 * レコードの削除
 * 
 * @param req リクエスト
 */
export const POST = async (req: Request) => {
  
  const data = await req.json();
  const { date } = data;

  await deleteByDate('cal_info', date);
}