import React, { ReactNode, useEffect } from 'react';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';
import Sidebar from './Sidebar';
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
import { useSelector } from 'react-redux';
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
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const addBookmarkToastVisible = useSelector(
    (state: RootState) => state.toast.addBookmarkToastVisible
  );
  const removeBookmarkToastVisible = useSelector(
    (state: RootState) => state.toast.removeBookmarkToastVisible
  );
  const likeToastVisible = useSelector(
    (state: RootState) => state.toast.likeToastVisible
  );
  const cancelLikeToastVisible = useSelector(
    (state: RootState) => state.toast.cancelLikeToastVisible
  );
  const addInquiryToastVisible = useSelector(
    (state: RootState) => state.toast.addInquiryToastVisible
  );
  const removeInquiryToastVisible = useSelector(
    (state: RootState) => state.toast.removeInquiryToastVisible
  );
  const updateInquiryToastVisible = useSelector(
    (state: RootState) => state.toast.updateInquiryToastVisible
  );
  const addReviewToastVisible = useSelector(
    (state: RootState) => state.toast.addReviewToastVisible
  );
  const removeReviewToastVisible = useSelector(
    (state: RootState) => state.toast.removeReviewToastVisible
  );
  const updateReviewToastVisible = useSelector(
    (state: RootState) => state.toast.updateReviewToastVisible
  );
  const followToastVisible = useSelector(
    (state: RootState) => state.toast.followToastVisible
  );
  const unfollowToastVisible = useSelector(
    (state: RootState) => state.toast.unfollowToastVisible
  );

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
