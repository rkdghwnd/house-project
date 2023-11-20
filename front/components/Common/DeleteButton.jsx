import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../reducers/searchSlice';

const DeleteButton = ({ closeGnbSearchHistory = () => {}, index }) => {
  const dispatch = useDispatch();
  const { gnbSearchHistoryList } = useSelector((state) => state.search);
  const deleteSearchHistoryItem = useCallback(
    (e) => {
      e.stopPropagation();
      const updatedHistory = gnbSearchHistoryList.filter(
        (history, i) => i !== index
      );
      dispatch(
        searchSlice.actions.updateGnbSearchHistoryList({
          historyList: updatedHistory,
        })
      );
      localStorage.setItem('history', JSON.stringify(updatedHistory));

      if (gnbSearchHistoryList.length === 0) {
        closeGnbSearchHistory();
      }
    },
    [gnbSearchHistoryList, closeGnbSearchHistory]
  );

  return (
    <button
      className="delete-button"
      type="button"
      aria-label="검색어 삭제"
      onClick={deleteSearchHistoryItem}
    >
      <i className="ic-close"></i>
    </button>
  );
};

export default DeleteButton;
