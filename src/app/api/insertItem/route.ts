import { insertInto } from "@/utils/crudUtil";
import { CalInfoTableType } from "@/utils/supabase/tableInfo";

/**
 * 摂取カロリー情報を登録
 * 
 * @param req リクエスト
 */
export const POST = async (req: Request) => {
  
  const data = await req.json();
  const { date, item, cal } = data;

  const calInfoTableData: CalInfoTableType = {
    date: date,
    item: item,
    cal: cal,
  };
  const insertedData = await insertInto<CalInfoTableType>('cal_info', calInfoTableData);
  return new Response('Insert item successfully: ' + JSON.stringify(insertedData));
}