import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toastSlice from '../../reducers/toastSlice';
import { Link } from 'react-router-dom';

const AddReviewToast = () => {
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
      <h1 className="review-title">리뷰를 작성했습니다.</h1>
      <button
        className="close-button"
        type="button"
        aria-label="닫기"
        onClick={closeToast}
      >
        <i className="ic-close" aria-hidden></i>
      </button>

      <div className="button-group">
        <Link className="btn-32 btn-outlined" to={`/users_reviews`}>
          목록 보러가기
        </Link>
      </div>
    </aside>
  );
};

export default AddReviewToast;
