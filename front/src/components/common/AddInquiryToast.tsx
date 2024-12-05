import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toastSlice from '../../reducers/toastSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';

const AddInquiryToast = () => {
  const dispatch = useDispatch();

  const closeToast = useCallback(() => {
    dispatch(toastSlice.actions.closeToast({}));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(toastSlice.actions.closeToast({}));
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <aside className={`inquiry-toast`}>
      <h1 className="inquiry-title">문의글을 작성했습니다.</h1>
      <button
        className="close-button"
        type="button"
        aria-label="닫기"
        onClick={closeToast}
      >
        <i className="ic-close" aria-hidden></i>
      </button>

      <div className="button-group">
        <Link className="btn-32 btn-outlined" to={`/my_shopping/inquiry`}>
          목록 보러가기
        </Link>
      </div>
    </aside>
  );
};

export default AddInquiryToast;
