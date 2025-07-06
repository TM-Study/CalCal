import { AccordionItemInfo } from './dto/AccordionAreaInfo';
import { formatDateToMD } from '@/app/utils/dateUtil';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DetailCalTable from './DetailCalTable';

interface AccordionItemProps {
  accordionItemInfo: AccordionItemInfo;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ accordionItemInfo }) => {
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
      <AccordionDetails>
        <DetailCalTable detailCalInfos={accordionItemInfo.detailCalInfos} />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
