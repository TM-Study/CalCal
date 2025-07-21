/**
 * アコーディオンエリア情報
 * <p>
 * 日ごとのカロリー情報
 */
export interface AccordionItemInfo {
  date: string;
  totalCal: number;
  detailCalInfos: DetailCalInfo[];
}

/**
 * アコーディオン要素情報
 * <p>
 * 品目ごとのカロリー情報
 */
export interface DetailCalInfo {
  item: string;
  cal: number;
}
