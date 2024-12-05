import { KeyboardEvent, useCallback, useRef } from 'react';
import SearchHistory from './SearchHistory';
import ButtonGroup from './ButtonGroup';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../reducers/searchSlice';
import WriteMenu from './WriteMenu';
import { RootState } from '../../reducers';

const GnbRight = () => {
  const dispatch = useDispatch();
  const gnbSearch = useRef<HTMLDivElement>(null); // 필수 (바깥과 안쪽 구분하기 위해)
  const gnbSearchHistory = useRef<HTMLButtonElement>(null); // 필수(윈도우 이벤트 삽입/삭제하기 위해)
  const gnbSearchHistoryList = useSelector(
    (state: RootState) => state.search.gnbSearchHistoryList
  );
  const navigate = useNavigate();

  const { value, handler } = useInput('');

  const clickingOutside = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!gnbSearch.current?.contains(e.target as Node)) {
        closeGnbSearchHistory();
      }
    },
    [gnbSearch]
  );

  const closeGnbSearchHistory = useCallback(() => {
    // 검색기록창 닫기
    if (!gnbSearchHistory.current) {
      return;
    }
    gnbSearchHistory.current.classList.remove('is-active');
    // 닫히는 이벤트 제거
    window.removeEventListener('click', clickingOutside);
  }, [gnbSearchHistory]);

  const openGnbSearchHistory = useCallback(() => {
    if (gnbSearchHistoryList.length === 0 || !gnbSearchHistory.current) {
      return;
    }

    if (!gnbSearchHistory.current.classList.contains('is-active')) {
      // 검색기록창 닫혀 있으면
      // 닫히는 이벤트 등록(호출 X)
      window.addEventListener('click', clickingOutside);
    }
    gnbSearchHistory.current.classList.add('is-active');
  }, [gnbSearchHistory, gnbSearchHistoryList]);

  const onEnterSearchInput = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && e.currentTarget.value) {
        dispatch(
          searchSlice.actions.updateGnbSearchHistoryList({
            historyList: [...new Set([...gnbSearchHistoryList, value])],
          })
        );
        localStorage.setItem(
          'history',
          JSON.stringify([...new Set([...gnbSearchHistoryList, value])])
        );
        const query = `?keyword=${e.currentTarget.value}`;
        navigate(`/search_result${query}`);
      }
    },
    [value, gnbSearchHistoryList]
  );

  const onClickSearchButton = useCallback(() => {
    if (value) {
      dispatch(
        searchSlice.actions.updateGnbSearchHistoryList({
          historyList: [...new Set([...gnbSearchHistoryList, value])],
        })
      );
      localStorage.setItem(
        'history',
        JSON.stringify([...new Set([...gnbSearchHistoryList, value])])
      );
      const query = `?keyword=${value}`;
      navigate(`/search_result${query}`);
    }
  }, [value, gnbSearchHistoryList]);

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
            onChange={handler}
            value={value}
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
