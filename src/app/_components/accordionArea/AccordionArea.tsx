import AccordionItem from './AccordionItem';
import { AccordionItemInfo } from './dto/AccordionAreaInfo';

// テストデータ作成
const testData: AccordionItemInfo[] = [
  {
    id: '1',
    date: new Date('2025-07-01'),
    totalCal: 1500,
    detailCalInfos: [
      { id: '1', item: 'ご飯', cal: 250 },
      { id: '2', item: '鶏肉', cal: 350 },
      { id: '3', item: 'サラダ', cal: 100 },
      { id: '4', item: 'スープ', cal: 200 },
      { id: '5', item: 'デザート', cal: 600 },
    ],
  },
  {
    id: '2',
    date: new Date('2025-07-02'),
    totalCal: 1700,
    detailCalInfos: [
      { id: '1', item: 'パン', cal: 300 },
      { id: '2', item: '卵焼き', cal: 250 },
      { id: '3', item: '野菜炒め', cal: 200 },
      { id: '4', item: 'みそ汁', cal: 150 },
      { id: '5', item: 'アイスクリーム', cal: 800 },
    ],
  },
  {
    id: '3',
    date: new Date('2025-07-03'),
    totalCal: 1800,
    detailCalInfos: [
      { id: '1', item: 'ラーメン', cal: 500 },
      { id: '2', item: 'チャーハン', cal: 600 },
      { id: '3', item: '餃子', cal: 300 },
      { id: '4', item: 'お茶', cal: 100 },
      { id: '5', item: 'デザート', cal: 300 },
    ],
  },
];

const AccordionArea: React.FC = () => {
  // TODO:DB疎通
  const accordionItemInfos: AccordionItemInfo[] = testData;

  return (
    <div className="max-w-lg mx-auto">
      {accordionItemInfos.map((accordionItemInfo) => (
        <AccordionItem
          key={accordionItemInfo.id}
          accordionItemInfo={accordionItemInfo}
        />
      ))}
    </div>
  );
};

export default AccordionArea;
