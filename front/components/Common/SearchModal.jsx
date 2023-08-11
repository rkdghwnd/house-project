import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';

const SearchModal = () => {
  const dispatch = useDispatch();
  const { searchModalVisible } = useSelector((state) => state.modal);

  const onClickCloseButton = useCallback(() => {
    dispatch(modalSlice.actions.closeModal());
  }, []);

  const onClickRemoveAll = useCallback(() => {}, []);

  return (
    <aside
      className={`search-modal lg-hidden ${
        searchModalVisible ? 'is-active' : ''
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <header className="search-modal-header">
              <h1 className="visually-hidden">검색창</h1>

              <div className="search-modal-form">
                <div className="input-group">
                  <i className="ic-search" aria-hidden></i>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="스토어 검색"
                  />
                </div>
                <button
                  className="btn-ghost btn-40"
                  type="button"
                  onClick={onClickCloseButton}
                >
                  취소
                </button>
              </div>
            </header>

            <section className="search-history">
              <header className="search-history-header">
                <h2 className="title">최근 검색어</h2>
                <button type="button" onClick={onClickRemoveAll}>
                  전체 삭제
                </button>
              </header>

              {/* <!-- NOTE: 최근 검색어가 존재할 경우 --> */}
              <div className="search-history-content">
                <ol className="search-history-list">
                  <li className="search-history-item">
                    <button className="word-button" type="button">
                      김버그
                    </button>
                    <button
                      className="delete-button"
                      type="button"
                      aria-label="검색어 삭제"
                    >
                      <i className="ic-close"></i>
                    </button>
                  </li>
                  <li className="search-history-item">
                    <button className="word-button" type="button">
                      버그
                    </button>
                    <button
                      className="delete-button"
                      type="button"
                      aria-label="검색어 삭제"
                    >
                      <i className="ic-close"></i>
                    </button>
                  </li>
                  <li className="search-history-item">
                    <button className="word-button" type="button">
                      튕김버그
                    </button>
                    <button
                      className="delete-button"
                      type="button"
                      aria-label="검색어 삭제"
                    >
                      <i className="ic-close"></i>
                    </button>
                  </li>
                </ol>
              </div>

              {/* <!-- NOTE: 최근 검색어가 존재하지 않을 경우 -->
            <!-- <div className="search-history-content">
              <p className="placeholder">최근 검색한 내역이 없습니다.</p>
            </div> --> */}
            </section>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SearchModal;
