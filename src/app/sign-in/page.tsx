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

  // サインインボタン押下時処理
  const handleSubmit = async () => {
    // バリデーション：リファクタしたい
    if (!email || !password) {
      alert('メールアドレスとパスワードを入力してください');
      return;
    }

    try {
      const response = await fetch('/api/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // エラーハンドリングのベストプラクティスがわからない
      if (!response.ok) {
        throw new Error('サインインに失敗しました');
      }

      alert('サインインが完了しました');
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

      {/* サインインボタン */}
      <Button variant="outlined" color="success" onClick={handleSubmit}>
        サインイン
      </Button>

      {/* サインアップページへのリンク */}
      <Button variant="outlined" onClick={() => router.push('/sign-up')}>
        サインアップ
      </Button>
    </>
  );
};

export default SignUpPage;
