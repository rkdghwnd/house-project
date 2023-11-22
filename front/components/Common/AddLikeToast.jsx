import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toastSlice from '../../reducers/toastSlice';

const AddLikeToast = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

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
    <aside className={`like-toast`}>
      <h1 className="like-title">좋아요를 눌렀습니다.</h1>
      <button
        className="close-button"
        type="button"
        aria-label="닫기"
        onClick={closeToast}
      >
        <i className="ic-close" aria-hidden></i>
      </button>

      <div className="button-group">
        <Link className="btn-32 btn-outlined" to={`/users/${me?.id}/like`}>
          목록 보러가기
        </Link>
      </div>
    </aside>
  );
};

export default AddLikeToast;
