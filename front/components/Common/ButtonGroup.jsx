import React, { useCallback } from 'react';
import MyMenu from './MyMenu';
import { useDispatch } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  const dispatch = useDispatch();
  const me = true;
  const onClickSearchButton = useCallback(() => {
    dispatch(modalSlice.actions.openSearchModal());
  }, []);

  return (
    <div className="button-group">
      <button
        className="gnb-icon-button is-search lg-hidden"
        type="button"
        aria-label="검색창 열기 버튼"
        onClick={onClickSearchButton}
      >
        <i className="ic-search"></i>
      </button>

      {me && (
        <>
          <Link
            className="gnb-icon-button sm-hidden"
            href="/users/1/bookmark"
            aria-label="스크랩북 페이지로 이동"
          >
            <i className="ic-bookmark"></i>
          </Link>

          <a
            className="gnb-icon-button sm-hidden"
            href="/"
            aria-label="내 소식 페이지로 이동"
          >
            <i className="ic-bell"></i>
          </a>
        </>
      )}

      <a
        className="gnb-icon-button is-cart"
        href="/"
        aria-label="장바구니 페이지로 이동"
      >
        <i className="ic-cart"></i>
        <strong className="badge">5</strong>
      </a>

      {me ? (
        <MyMenu />
      ) : (
        <div className="gnb-auth sm-hidden">
          <a href="/">로그인</a>
          <a href="/">회원가입</a>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
