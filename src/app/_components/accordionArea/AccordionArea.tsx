import { useCallback, useEffect, useMemo, useState } from 'react';
import AccordionItem from './AccordionItem';
import { AccordionItemInfo } from './dto/AccordionAreaInfo';

const AccordionArea: React.FC<{ dialogState: boolean }> = (dialogState) => {
  // アコーディオン情報
  const [accordionItemInfos, setAccordionItemInfos] = useState<
    AccordionItemInfo[]
  >([]);

  // アコーディオン情報更新処理
  const fetchAccordionItemInfos = useCallback(async () => {
    const res = await fetch('/api/getItems');
    const data = await res.json();
    setAccordionItemInfos(data.accordionItemInfos);
  }, []);

  // レンダリング時処理
  useEffect(() => {
    fetchAccordionItemInfos();
  }, [dialogState]); //ダイアログの開閉毎にレンダリング

  // AccordionItem のリストを useMemo でメモ化
  const renderedAccordionItems = useMemo(() => {
    return accordionItemInfos?.map((accordionItemInfo, index) => (
      <AccordionItem key={index} accordionItemInfo={accordionItemInfo} />
    ));
  }, [accordionItemInfos]); // 情報が更新された場合のみ再描画

  return <div className="max-w-lg mx-auto">{renderedAccordionItems}</div>;
};

export default AccordionArea;
