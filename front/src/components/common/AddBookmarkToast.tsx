import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toastSlice from '../../reducers/toastSlice';
import { RootState } from '../../reducers';

const AddBookmarkToast = () => {
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.user.me);

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
    <>
      <aside className={`bookmark-toast`}>
        <h1 className="bookmark-title">스크랩했습니다</h1>
        <button
          className="close-button"
          type="button"
          aria-label="닫기"
          onClick={closeToast}
        >
          <i className="ic-close" aria-hidden></i>
        </button>
        <div className="button-group">
          <Link
            className="btn-32 btn-outlined"
            to={`/users/${me?.id}/bookmark`}
          >
            스크랩북 보기
          </Link>
        </div>
      </aside>
    </>
  );
};

export default AddBookmarkToast;
