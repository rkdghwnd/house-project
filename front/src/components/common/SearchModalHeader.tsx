import React, { KeyboardEvent, MouseEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import searchSlice from '../../reducers/searchSlice';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { RootState } from '../../reducers';

const SearchModalHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { value: searchText, handler: onChangeSearchText } = useInput('');
  const gnbSearchHistoryList = useSelector(
    (state: RootState) => state.search.gnbSearchHistoryList
  );

  const onClickCloseButton = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
  }, []);

  const onClickSearchButton = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
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
        dispatch(modalSlice.actions.closeModal({}));
      }
      e.stopPropagation();
    },
    [searchText, gnbSearchHistoryList]
  );

  const onEnterSearchInput = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
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
        dispatch(modalSlice.actions.closeModal({}));
      }
      e.stopPropagation();
    },
    [searchText, gnbSearchHistoryList]
  );

  return (
    <header className="search-modal-header">
      <h1 className="visually-hidden">검색창</h1>

      <div className="search-modal-form">
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
            onKeyDown={onEnterSearchInput}
            onChange={onChangeSearchText}
            value={searchText}
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
  );
};

export default SearchModalHeader;
