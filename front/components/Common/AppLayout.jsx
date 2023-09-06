import React, { useEffect } from 'react';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';
import Sidebar from './SideBar';
import SearchModal from './SearchModal';
import Overlay from './Overlay';
import OrderFormModal from '../productions/OrderFormModal';
import CartModal from '../productions/CartModal';
import { useLocation } from 'react-router-dom';
import LogInModal from './LogInModal';

const AppLayout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/cart') {
      document.body.style.backgroundColor = 'rgb(245,245,245)';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [location]);

  return (
    <>
      <GlobalHeader />
      {children}
      <GlobalFooter />
      <OrderFormModal />
      {/* 상품을 장바구니에 추가했을때 나오는 모달  CartModal*/}
      <CartModal />
      <Sidebar />
      <SearchModal />
      <LogInModal />
      <Overlay />
      {/* 북마크 추가/제거 했을때의 메시지
<BookmarkToast /> */}
    </>
  );
};

export default AppLayout;
