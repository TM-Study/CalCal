import { AccordionItemInfo } from './dto/AccordionAreaInfo';
import { formatDateToMD } from '@/utils/dateUtil';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DetailCalTable from './DetailCalTable';

interface AccordionItemProps {
  accordionItemInfo: AccordionItemInfo;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ accordionItemInfo }) => {
  // 削除ボタン押下時処理
  const handleDeleteButton = async () => {
    // 削除対象日付
    const date: string = accordionItemInfo.date;
    try {
      await fetch('/api/deleteByDate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date }),
      });
      window.location.reload();
    } catch (error) {
      alert('削除に失敗しました');
      throw error;
    }
  };

  return (
    <Accordion>
      {/* アコーディオンヘッダ */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          {/* 日付 */}
          <Box px={2}>
            <Typography>{formatDateToMD(accordionItemInfo.date)}</Typography>
          </Box>
          {/* 合計カロリー */}
          <Box px={2}>
            <Typography>
              {accordionItemInfo.totalCal.toLocaleString()} kcal
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      {/* アコーディオン要素 */}
      <AccordionDetails className="flex flex-col items-center gap-4">
        {/* 品目別カロリー情報 */}
        <DetailCalTable detailCalInfos={accordionItemInfo.detailCalInfos} />
        {/*  削除ボタン */}
        <Button variant="outlined" color="error" onClick={handleDeleteButton}>
          削除
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
