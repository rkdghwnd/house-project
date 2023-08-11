import React, { useCallback, useRef } from 'react';

const DeleteButton = ({ gnbSearchHistoryList, closeGnbSearchHistory }) => {
  const deleteButton = useRef();
  const deleteSearchHistoryItem = useCallback(
    (e) => {
      e.stopPropagation();
      const itemToDelete = e.currentTarget.parentNode;
      gnbSearchHistoryList.current.removeChild(itemToDelete);

      if (gnbSearchHistoryList.current.children.length === 0) {
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
      ref={deleteButton}
      onClick={deleteSearchHistoryItem}
    >
      <i className="ic-close"></i>
    </button>
  );
};

export default DeleteButton;
