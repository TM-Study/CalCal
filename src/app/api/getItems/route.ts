import { AccordionItemInfo } from "@/app/_components/accordionArea/dto/AccordionAreaInfo";
import { CalInfoTableType } from "@/supabase/tableInfo";
import { transformToAccordionItemInfo } from "@/utils/businessUtil";
import { selectAll } from "@/utils/crudUtil";

/**
 * アコーディオンエリア情報を取得
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