import { MouseEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../reducers/searchSlice';
import { RootState } from '../../reducers';

const DeleteButton = ({
  closeGnbSearchHistory = () => {},
  index,
}: {
  closeGnbSearchHistory: () => void;
  index: number;
}) => {
  const dispatch = useDispatch();
  const gnbSearchHistoryList = useSelector(
    (state: RootState) => state.search.gnbSearchHistoryList
  );
  const deleteSearchHistoryItem = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
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

      if (updatedHistory.length === 0) {
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
