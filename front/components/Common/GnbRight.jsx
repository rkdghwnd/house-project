import React, { useCallback, useRef, useState } from 'react';
import SearchHistory from './SearchHistory';
import ButtonGroup from './ButtonGroup';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../reducers/searchSlice';
import WriteMenu from './WriteMenu';

const GnbRight = () => {
  const dispatch = useDispatch();
  const gnbSearch = useRef(); // 필수 (바깥과 안쪽 구분하기 위해)
  const gnbSearchHistory = useRef(); // 필수(윈도우 이벤트 삽입/삭제하기 위해)
  const { gnbSearchHistoryList } = useSelector((state) => state.search);
  const navigate = useNavigate();
  const [searchText, onChangeSearchText] = useInput('');

  const clickingOutside = useCallback(
    (e) => {
      if (!gnbSearch.current?.contains(e.target)) {
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
    if (gnbSearchHistoryList.length === 0) {
      return;
    }

    if (!gnbSearchHistory.current.classList.contains('is-active')) {
      window.addEventListener('click', clickingOutside); // 활성화가 되었을때만 이벤트가 적용되도록
    }
    gnbSearchHistory.current.classList.add('is-active');
  }, [gnbSearchHistory, gnbSearchHistoryList]);

  const onEnterSearchInput = useCallback(
    (e) => {
      if (e.key === 'Enter' && e.currentTarget.value) {
        dispatch(
          searchSlice.actions.updateGnbSearchHistoryList({
            historyList: [...new Set([...gnbSearchHistoryList, searchText])],
          })
        );
        localStorage.setItem(
          'history',
          JSON.stringify([...new Set([...gnbSearchHistoryList, searchText])])
        );
        const query = `?keyword=${e.currentTarget.value}`;
        navigate(`/search_result${query}`);
      }
    },
    [searchText, gnbSearchHistoryList]
  );

  const onClickSearchButton = useCallback(() => {
    if (searchText) {
      dispatch(
        searchSlice.actions.updateGnbSearchHistoryList({
          historyList: [...new Set([...gnbSearchHistoryList, searchText])],
        })
      );
      localStorage.setItem(
        'history',
        JSON.stringify([...new Set([...gnbSearchHistoryList, searchText])])
      );
      const query = `?keyword=${searchText}`;
      navigate(`/search_result${query}`);
    }
  }, [searchText, gnbSearchHistoryList]);

  return (
    <div className="gnb-right">
      <div className="gnb-search lg-only" ref={gnbSearch}>
        <div className="input-group">
          <i
            className="ic-search"
            aria-hidden
            onClick={onClickSearchButton}
          ></i>
          <input
            className="form-input"
            type="text"
            placeholder="스토어 검색"
            onFocus={openGnbSearchHistory}
            onKeyDown={onEnterSearchInput}
            onChange={onChangeSearchText}
            value={searchText}
          />
        </div>
        <SearchHistory
          ref={gnbSearchHistory}
          closeGnbSearchHistory={closeGnbSearchHistory}
        />
      </div>

      <ButtonGroup />

      <WriteMenu />
    </div>
  );
};

export default GnbRight;
