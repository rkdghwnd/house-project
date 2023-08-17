import React, { useCallback, useRef } from 'react';
import SearchHistory from './SearchHistory';
import ButtonGroup from './ButtonGroup';

const GnbRight = () => {
  const gnbSearch = useRef(); // 필수 (바깥과 안쪽 구분하기 위해)
  const gnbSearchHistory = useRef(); // 필수(윈도우 이벤트 삽입/삭제하기 위해)
  const gnbSearchHistoryList = useRef(); // 대체 가능(데이터로 대체)

  const clickingOutside = useCallback(
    (e) => {
      if (!gnbSearch.current.contains(e.target)) {
        closeGnbSearchHistory();
      }
    },
    [gnbSearch]
  );

  const closeGnbSearchHistory = useCallback(() => {
    gnbSearchHistory.current.classList.remove('is-active');
    window.removeEventListener('click', clickingOutside);
  }, [gnbSearchHistory]);

  const openGnbSearchHistory = useCallback(() => {
    if (gnbSearchHistoryList.current.children.length === 0) {
      return;
    }

    if (!gnbSearchHistory.current.classList.contains('is-active')) {
      window.addEventListener('click', clickingOutside); // 활성화가 되었을때만 이벤트가 적용되도록
    }
    gnbSearchHistory.current.classList.add('is-active');
  }, [gnbSearchHistory, gnbSearchHistoryList]);

  return (
    <div className="gnb-right">
      <div className="gnb-search lg-only" ref={gnbSearch}>
        <div className="input-group">
          <i className="ic-search" aria-hidden></i>
          <input
            className="form-input"
            type="text"
            placeholder="스토어 검색"
            onFocus={openGnbSearchHistory}
          />
        </div>
        <SearchHistory
          ref={gnbSearchHistory}
          gnbSearchHistoryList={gnbSearchHistoryList}
          closeGnbSearchHistory={closeGnbSearchHistory}
        />
      </div>

      <ButtonGroup />

      <button className="btn-primary btn-40 sm-hidden" type="button">
        글쓰기
        <i className="ic-chevron" aria-hidden></i>
      </button>
    </div>
  );
};

export default GnbRight;
