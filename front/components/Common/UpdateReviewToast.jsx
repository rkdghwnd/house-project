import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toastSlice from '../../reducers/toastSlice';

const UpdateReviewToast = () => {
  const dispatch = useDispatch();

  const closeToast = useCallback(() => {
    dispatch(toastSlice.actions.closeToast());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(toastSlice.actions.closeToast());
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <aside className={`review-toast`}>
      <h1 className="review-title">리뷰를 업데이트 했습니다.</h1>

      <button
        className="close-button"
        type="button"
        aria-label="닫기"
        onClick={closeToast}
      >
        <i className="ic-close" aria-hidden></i>
      </button>
    </aside>
  );
};

export default UpdateReviewToast;
