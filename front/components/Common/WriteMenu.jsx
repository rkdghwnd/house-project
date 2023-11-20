import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { useNavigate } from 'react-router-dom';

const WriteMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  const writeMenuRef = useRef(null);
  const closeMyMenuOnClickingOutside = useCallback(
    (e) => {
      if (!writeMenuRef.current?.contains(e.target)) {
        writeMenuRef.current?.classList.remove('is-active');
        window.removeEventListener('click', closeMyMenuOnClickingOutside);
      }
    },
    [writeMenuRef]
  );

  const toggleMyMenu = useCallback(() => {
    if (!writeMenuRef.current?.classList.contains('is-active')) {
      window.addEventListener('click', closeMyMenuOnClickingOutside);
    }
    writeMenuRef.current?.classList.toggle('is-active');
  }, [writeMenuRef]);

  const navigateReviewWritePage = useCallback(() => {
    if (me) {
      navigate('/users_reviews/write');
    } else {
      dispatch(modalSlice.actions.openLogInModal());
    }
  }, [me]);

  return (
    <div className="write-menu" ref={writeMenuRef} onClick={toggleMyMenu}>
      <button className="btn-primary btn-40 sm-hidden" type="button">
        글쓰기
        <i className="ic-chevron" aria-hidden></i>
      </button>
      <div className="write-menu-content">
        <ul className="write-menu-list">
          <li className="write-menu-item">
            <button type="button" onClick={navigateReviewWritePage}>
              <img
                src={`/assets/write-menu-icon/write-review-icon.png`}
                alt="write-review-icon"
              />
              <span>상품 리뷰 쓰기</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WriteMenu;
