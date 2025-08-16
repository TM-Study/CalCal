import { AccordionItemInfo } from "@/app/_components/accordionArea/dto/AccordionAreaInfo";
import { CalInfoTableType } from "./supabase/tableInfo";

/**
 * テーブル情報から画面情報に変換
 * 
 * @param data cal_infoテーブル情報
 * @returns アコーディオン情報
 */
export const transformToAccordionItemInfo = (data: CalInfoTableType[]): AccordionItemInfo[] => {
  return data.reduce((accumulator, currentItem) => {

    // 重複チェック対象
    const { date, item, cal } = currentItem;

    // 日付重複チェック
    const duplicateTarget = accumulator.find(item => item.date === date);

    if (duplicateTarget) {
      // 日付が重複する場合
      duplicateTarget.totalCal += cal;
      duplicateTarget.detailCalInfos.push({ item, cal });
    } else {
      // 日付が重複しない場合
      accumulator.push({
        date,
        totalCal: cal,
        detailCalInfos: [{ item, cal }],
      });
    }

    return accumulator;
  }, [] as AccordionItemInfo[]).sort((a, b) => a.date.localeCompare(b.date));
};