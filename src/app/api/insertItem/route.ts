import { CalInfoTableType } from "@/app/supabase/tableInfo";
import { insertInto } from "@/app/utils/crudUtil";

/**
 * 摂取カロリー情報を登録する
 * 
 * @param date 日付
 * @param item 品目
 * @param cal カロリー
 * @returns 登録結果
 */
export const POST = async (req: Request) => {
  
  const data = await req.json();
  const { date, item, cal } = data;

  const calInfoTableData: CalInfoTableType = {
    date: date,
    item: item,
    cal: cal,
  };
  const insertedData: CalInfoTableType[] = await insertInto<CalInfoTableType>('cal_info', calInfoTableData);

  return Response.json({ insertedData : insertedData});
}