import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import modalSlice from '../../reducers/modalSlice';
import { RootState } from '../../reducers';

const SidebarHeader = () => {
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.user.me);

  const openLogInModal = useCallback(() => {
    dispatch(modalSlice.actions.openLogInModal({}));
  }, []);

  return (
    <header className="sidebar-header">
      <h1 className="logo">
        <a href="/">
          <img src="/assets/images/logo.svg" alt="내일의 집" />
        </a>
      </h1>

      {me ? (
        <div className="sidebar-user">
          {/* <!-- NOTE: 로그인을 한 경우  --> */}
          <Link to={`/users/${me.id}`}>
            <div className="avatar-24">
              <img
                src={`${import.meta.env.VITE_BACK_END_DOMAIN}/${
                  me.profile_img
                }`}
                alt="프로필 이미지"
              />
            </div>
            <strong className="username">{me.nickname}</strong>
          </Link>
        </div>
      ) : (
        <div className="sidebar-auth">
          {/* <!-- NOTE: 로그인을 하지 않은 경우  --> */}
          <button className="btn-outlined btn-40" onClick={openLogInModal}>
            로그인
          </button>
        </div>
      )}
    </header>
  );
};

export default SidebarHeader;
