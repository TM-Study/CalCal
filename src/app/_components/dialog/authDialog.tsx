'use client';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, handleClose }) => {
  /* hooks */
  const router = useRouter();

  // 入力値の状態
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const resetState = () => {
    setEmail('');
    setPassword('');
  };

  // ログインボタン押下時処理
  const handleLoginClick = async () => {
    if (email && password) {
      try {
        await fetch('/api/signIn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        handleClose();
        router.push('/');
        resetState();
      } catch (error) {
        alert('処理に失敗しました');
        throw error;
      }
    } else {
      alert('すべての項目を入力してください');
    }
  };

  // 新規登録ボタン押下時処理
  const handleRegisterClick = async () => {
    if (email && password) {
      try {
        await fetch('/api/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        handleClose();
        router.push('/');
        resetState();
      } catch (error) {
        alert('処理に失敗しました');
        throw error;
      }
    } else {
      alert('すべての項目を入力してください');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className="flex flex-col items-center">
        {/* メールアドレス入力エリア */}
        <TextField
          label="メールアドレス"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-60"
        />

        {/* パスワード入力エリア */}
        <TextField
          label="パスワード"
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-60"
        />
      </DialogContent>

      <DialogActions className="flex">
        {/* ログインボタン */}
        <Button variant="outlined" color="success" onClick={handleLoginClick}>
          ログイン
        </Button>

        {/* 新規登録ボタン */}
        <Button
          variant="outlined"
          color="success"
          onClick={handleRegisterClick}
        >
          新規登録
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;
