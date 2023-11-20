import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import searchSlice from '../../reducers/searchSlice';
import DeleteButton from './DeleteButton';
import SearchModalHeader from './SearchModalHeader';

const SearchModal = () => {
  const dispatch = useDispatch();
  const { searchModalVisible } = useSelector((state) => state.modal);
  const navigate = useNavigate();

  const { gnbSearchHistoryList } = useSelector((state) => state.search);

  const onClickHistoryItem = useCallback((e) => {
    dispatch(
      searchSlice.actions.updateGnbSearchHistoryList({
        historyList: [
          ...new Set([...gnbSearchHistoryList, e.currentTarget.textContent]),
        ],
      })
    );
    const query = `?keyword=${e.currentTarget.textContent}`;
    navigate(`/search_result${query}`);
    dispatch(modalSlice.actions.closeModal());
    e.stopPropagation();
  }, []);

  const onClickRemoveAll = useCallback(() => {
    dispatch(
      searchSlice.actions.updateGnbSearchHistoryList({
        historyList: [],
      })
    );
    localStorage.setItem('history', JSON.stringify([]));
  }, []);

  const searchHistoryList = useMemo(() => {
    if (gnbSearchHistoryList.length === 0) {
      {
        /* //  <!-- NOTE: 최근 검색어가 존재하지 않을 경우 --> */
      }
      return (
        <div className="search-history-content">
          <p className="placeholder">최근 검색한 내역이 없습니다.</p>
        </div>
      );
    } else {
      {
        /* <!-- NOTE: 최근 검색어가 존재할 경우 --> */
      }
      return gnbSearchHistoryList.map((history, index) => {
        return (
          <li className="search-history-item" key={shortid.generate()}>
            <button
              className="word-button"
              type="button"
              onClick={onClickHistoryItem}
            >
              {history}
            </button>
            <DeleteButton index={index} />
          </li>
        );
      });
    }
  }, [gnbSearchHistoryList]);

  return (
    <aside
      className={`search-modal lg-hidden ${
        searchModalVisible ? 'is-active' : ''
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <SearchModalHeader />

            <section className="search-history">
              <header className="search-history-header">
                <h2 className="title">최근 검색어</h2>
                <button type="button" onClick={onClickRemoveAll}>
                  전체 삭제
                </button>
              </header>

              <div className="search-history-content">
                <ol className="search-history-list">{searchHistoryList}</ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SearchModal;
