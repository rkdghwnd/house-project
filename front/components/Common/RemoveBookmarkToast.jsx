import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toastSlice from '../../reducers/toastSlice';

const RemoveBookmarkToast = () => {
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
    <aside className={`bookmark-toast`}>
      <h1 className="bookmark-title">스크랩북에서 삭제했습니다</h1>
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

export default RemoveBookmarkToast;
