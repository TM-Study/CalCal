import { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';
import { AccordionItemInfo } from './dto/AccordionAreaInfo';

const AccordionArea: React.FC<{ dialogState: boolean }> = (dialogState) => {
  // アコーディオン情報
  const [accordionItemInfos, setAccordionItemInfos] = useState<
    AccordionItemInfo[]
  >([]);

  // アコーディオン情報更新処理
  const fetchAccordionItemInfos = async () => {
    const res = await fetch('/api/getItems');
    const data = await res.json();
    setAccordionItemInfos(data.accordionItemInfos);
  };

  // レンダリング時処理
  useEffect(() => {
    fetchAccordionItemInfos();
  }, [dialogState]); //ダイアログの開閉毎にレンダリング

  return (
    <div className="max-w-lg mx-auto">
      {accordionItemInfos?.map((accordionItemInfo, index) => (
        <AccordionItem key={index} accordionItemInfo={accordionItemInfo} />
      ))}
    </div>
  );
};

export default AccordionArea;
