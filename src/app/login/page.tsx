'use client';

import AuthDialog from '../_components/dialog/authDialog';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      {/* 認証ダイアログ */}
      <AuthDialog open={true} handleClose={() => {}} />
    </div>
  );
};

export default Home;
