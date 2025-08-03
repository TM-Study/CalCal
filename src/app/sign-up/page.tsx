'use client';

import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUpPage: React.FC = () => {
  /** hooks */
  const router = useRouter();

  /** state */
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // 登録ボタン押下時処理
  const handleSubmit = async () => {
    // バリデーション：リファクタしたい
    if (!email || !password) {
      alert('メールアドレスとパスワードを入力してください');
      return;
    }

    try {
      const response = await fetch('/api/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // エラーハンドリングのベストプラクティスがわからない
      if (!response.ok) {
        throw new Error('登録に失敗しました');
      }

      alert('登録が完了しました');
      router.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {/* メールアドレス */}
      <TextField
        label="メールアドレス"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-60"
      />

      {/* パスワード */}
      <TextField
        label="パスワード"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-60"
      />

      {/* 登録ボタン */}
      <Button variant="outlined" color="success" onClick={handleSubmit}>
        登録
      </Button>
    </>
  );
};

export default SignUpPage;
