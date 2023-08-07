import React from 'react';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';
import Sidebar from './SideBar';
import SearchModal from './SearchModal';
import Overlay from './Overlay';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      {children}
      <GlobalFooter />
      <Sidebar />
      <SearchModal />
      <Overlay />
      {/* 북마크 추가/제거 했을때의 메시지
<BookmarkToast /> */}
    </>
  );
};

export default AppLayout;
