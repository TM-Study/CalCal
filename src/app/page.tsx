'use client';

import { Button } from '@mui/material';
import { useState } from 'react';
import AccordionArea from './_components/accordionArea/AccordionArea';
import RegisterDialog from './_components/dialog/registerDialog';
import AuthDialog from './_components/dialog/authDialog';

const Home: React.FC = () => {
  // ダイアログの開閉制御
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const handleOpenAuth = () => setOpenAuth(true);
  const handleCloseAuth = () => setOpenAuth(false);

  // ダイアログ-登録ボタン押下時処理
  const handleRegister = async (date: string, item: string, cal: number) => {
    try {
      await fetch('/api/insertItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, item, cal }),
      });
    } catch (error) {
      alert('登録に失敗しました');
      throw error;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      {/* 登録ボタン */}
      <Button variant="outlined" color="success" onClick={handleOpen}>
        摂取カロリーを登録する
      </Button>

      {/* 登録ボタン */}
      <Button variant="outlined" color="success" onClick={handleOpenAuth}>
        ログイン・新規登録
      </Button>

      {/* アコーディオンエリア */}
      <AccordionArea dialogState={open} />

      {/* 登録ダイアログ */}
      <RegisterDialog
        open={open}
        handleClose={handleClose}
        handleRegister={handleRegister}
      />

      {/* 登録ダイアログ */}
      <AuthDialog open={openAuth} handleClose={handleCloseAuth} />
    </div>
  );
};

export default Home;
