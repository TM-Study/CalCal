import { AccordionItemInfo } from "@/app/_components/accordionArea/dto/AccordionAreaInfo";
import { CalInfoTableType } from "@/app/supabase/tableInfo";
import { transformToAccordionItemInfo } from "@/app/utils/businessUtil";
import { selectAll } from "@/app/utils/crudUtil";

/**
 * アコーディオンエリア情報を取得する
 * 
 * @returns accordionItemInfos アコーディオンエリア情報
 */
export const GET = async () => {
  // データの取得
  const calInfoTableData: CalInfoTableType[] = await selectAll<CalInfoTableType>('cal_info');
  // 型変換
  const accordionItemInfos: AccordionItemInfo[] = transformToAccordionItemInfo(calInfoTableData);

  return Response.json({ accordionItemInfos: accordionItemInfos });
}