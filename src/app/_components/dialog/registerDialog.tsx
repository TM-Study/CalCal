import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

interface RegisterDialogProps {
  open: boolean;
  handleClose: () => void;
  handleRegister: (date: string, item: string, cal: number) => void;
}

const RegisterDialog: React.FC<RegisterDialogProps> = ({
  open,
  handleClose,
  handleRegister,
}) => {
  // 入力値の状態
  const [date, setDate] = useState<Dayjs | null>(null);
  const [item, setItem] = useState<string>('');
  const [cal, setCalories] = useState<string>('');
  const resetState = () => {
    setDate(null);
    setItem('');
    setCalories('');
  };

  // 登録ボタン押下時処理
  const handleRegisterClick = () => {
    if (date && item && cal) {
      handleRegister(date?.format('YYYY-MM-DD'), item, parseInt(cal, 10));
      handleClose();
      resetState();
    } else {
      alert('すべての項目を入力してください');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className="flex flex-col items-center">
        {/* 日付入力エリア */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="日付"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            className="w-60 h-16"
          />
        </LocalizationProvider>

        {/* 品目入力エリア */}
        <TextField
          label="品目"
          variant="outlined"
          margin="normal"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-60"
        />

        {/* カロリー入力エリア */}
        <TextField
          label="カロリー（kcal）"
          variant="outlined"
          margin="normal"
          type="number"
          value={cal}
          onChange={(e) => setCalories(e.target.value)}
          className="w-60"
        />
      </DialogContent>

      <DialogActions className="flex flex-col items-center">
        {/* 登録ボタン */}
        <Button
          variant="outlined"
          color="success"
          onClick={handleRegisterClick}
        >
          登録
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;
