import React, { forwardRef, useRef } from 'react';
import DeleteButton from './DeleteButton';

const SearchHistory = (
  { gnbSearchHistoryList, closeGnbSearchHistory },
  ref
) => {
  const deleteAllButton = useRef();

  const onClickRemoveAll = () => {
    gnbSearchHistoryList.current.innerHTML = '';
    closeGnbSearchHistory();
  };

  return (
    <section className="search-history" ref={ref}>
      <header className="search-history-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button" ref={deleteAllButton} onClick={onClickRemoveAll}>
          전체 삭제
        </button>
      </header>

      <div className="search-history-content">
        <ol className="search-history-list" ref={gnbSearchHistoryList}>
          <li className="search-history-item">
            <button className="word-button" type="button">
              김버그
            </button>
            <DeleteButton
              gnbSearchHistoryList={gnbSearchHistoryList}
              closeGnbSearchHistory={closeGnbSearchHistory}
            />
          </li>
          <li className="search-history-item">
            <button className="word-button" type="button">
              버그
            </button>
            <DeleteButton
              gnbSearchHistoryList={gnbSearchHistoryList}
              closeGnbSearchHistory={closeGnbSearchHistory}
            />
          </li>
          <li className="search-history-item">
            <button className="word-button" type="button">
              튕김버그
            </button>
            <DeleteButton
              gnbSearchHistoryList={gnbSearchHistoryList}
              closeGnbSearchHistory={closeGnbSearchHistory}
            />
          </li>
        </ol>
      </div>
    </section>
  );
};

export default forwardRef(SearchHistory);
