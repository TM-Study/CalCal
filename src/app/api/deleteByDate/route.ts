import { deleteByDate } from "@/utils/crudUtil";
import { CalInfoTableType } from "@/utils/supabase/tableInfo";

/**
 * レコードの削除
 * 
 * @param req リクエスト
 */
export const POST = async (req: Request) => {
  
  const data = await req.json();
  const { date } = data;

  const deletedData = await deleteByDate<CalInfoTableType>('cal_info', date);
  return new Response(JSON.stringify(deletedData));
}