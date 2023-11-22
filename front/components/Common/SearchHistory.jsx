import React, { forwardRef, useCallback, useRef } from 'react';
import DeleteButton from './DeleteButton';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../reducers/searchSlice';
import { useNavigate } from 'react-router-dom';

const SearchHistory = ({ closeGnbSearchHistory }, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gnbSearchHistoryList } = useSelector((state) => state.search);
  const deleteAllButton = useRef();

  const onClickRemoveAll = () => {
    dispatch(
      searchSlice.actions.updateGnbSearchHistoryList({
        historyList: [],
      })
    );
    localStorage.setItem('history', JSON.stringify([]));
    closeGnbSearchHistory();
  };

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
    e.stopPropagation();
  }, []);

  return (
    <section className="search-history" ref={ref}>
      <header className="search-history-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button" ref={deleteAllButton} onClick={onClickRemoveAll}>
          전체 삭제
        </button>
      </header>

      <div className="search-history-content">
        <ol className="search-history-list">
          {gnbSearchHistoryList?.map((history, index) => {
            return (
              <li className="search-history-item" key={shortid.generate()}>
                <button
                  className="word-button"
                  type="button"
                  onClick={onClickHistoryItem}
                >
                  {history}
                </button>
                <DeleteButton
                  closeGnbSearchHistory={closeGnbSearchHistory}
                  index={index}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default forwardRef(SearchHistory);
