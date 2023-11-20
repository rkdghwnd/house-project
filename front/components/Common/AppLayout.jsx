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
import FilterModal from './FilterModal';
import ShareModal from './ShareModal';
import MessageModal from './MessageModal';
import WritingReviewForm from '../productions/WritingReviewForm';
import WritingInquiryForm from '../productions/WritingInquiryForm';
import RemoveReviewConfirmModal from './RemoveReviewConfirmModal';
import RemoveInquiryConfirmModal from './RemoveInquiryConfirmModal';
import AddBookmarkToast from './AddBookmarkToast';
import { useDispatch, useSelector } from 'react-redux';
import RemoveBookmarkToast from './RemoveBookmarkToast';
import AddLikeToast from './AddLikeToast';
import CancelLikeToast from './CancelLikeToast';
import AddInquiryToast from './AddInquiryToast';
import RemoveInquiryToast from './RemoveInquiryToast';
import UpdateInquiryToast from './UpdateInquiryToast';
import AddReviewToast from './AddReviewToast';
import RemoveReviewToast from './RemoveReviewToast';
import UpdateReviewToast from './UpdateReviewToast';
import FollowToast from './FollowToast';
import UnfollowToast from './UnfollowToast';
import { getMyInfo } from '../../actions/user';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    addBookmarkToastVisible,
    removeBookmarkToastVisible,
    likeToastVisible,
    cancelLikeToastVisible,
    addInquiryToastVisible,
    removeInquiryToastVisible,
    updateInquiryToastVisible,
    addReviewToastVisible,
    removeReviewToastVisible,
    updateReviewToastVisible,
    followToastVisible,
    unfollowToastVisible,
  } = useSelector((state) => state.toast);

  useEffect(() => {
    dispatch(getMyInfo());
  }, []);

  useEffect(() => {
    if (location.pathname === '/cart') {
      document.body.style.backgroundColor = 'rgb(245,245,245)';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [location.pathname]);

  return (
    <>
      <GlobalHeader />
      {children}
      <GlobalFooter />
      <OrderFormModal />
      <CartModal />
      <Sidebar />
      <SearchModal />
      <FilterModal />
      <LogInModal />
      <ShareModal />
      <MessageModal />
      <WritingReviewForm />
      <WritingInquiryForm />
      <RemoveReviewConfirmModal />
      <RemoveInquiryConfirmModal />
      <Overlay />
      {addBookmarkToastVisible && <AddBookmarkToast />}
      {removeBookmarkToastVisible && <RemoveBookmarkToast />}
      {likeToastVisible && <AddLikeToast />}
      {cancelLikeToastVisible && <CancelLikeToast />}
      {addInquiryToastVisible && <AddInquiryToast />}
      {removeInquiryToastVisible && <RemoveInquiryToast />}
      {updateInquiryToastVisible && <UpdateInquiryToast />}
      {addReviewToastVisible && <AddReviewToast />}
      {removeReviewToastVisible && <RemoveReviewToast />}
      {updateReviewToastVisible && <UpdateReviewToast />}
      {followToastVisible && <FollowToast />}
      {unfollowToastVisible && <UnfollowToast />}
    </>
  );
};

export default AppLayout;
