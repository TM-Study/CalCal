// 日ごとのカロリー情報
export interface AccordionItemInfo {
  id: string;
  date: Date;
  totalCal: number;
  detailCalInfos: DetailCalInfo[];
}

// 品目ごとのカロリー情報
export interface DetailCalInfo {
  id: string;
  item: string;
  cal: number;
}
