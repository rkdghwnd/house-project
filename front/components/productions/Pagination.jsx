import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const Pagination = ({
  totalCount,
  countPerPage = 5,
  actionFunction,
  productId,
  page,
  setPage,
}) => {
  const dispatch = useDispatch();
  const pageCountArray = Array.from(
    { length: Math.ceil(totalCount / countPerPage) || 1 },
    (_, i) => i + 1
  );

  const onClickPageButton = useCallback(
    (e) => {
      setPage(parseInt(e.currentTarget.value));

      dispatch(
        actionFunction({
          query: `?page=${e.currentTarget.value}`,
          productId,
        })
      );
    },
    [productId]
  );

  return (
    <div className="pagination">
      <button
        className={`page-control page-prev${page === 1 ? ' is-disabled' : ''}`}
        type="button"
      >
        <i className="ic-chevron"></i>
      </button>

      <ol className="page-list">
        {pageCountArray?.map((pageNumber) => {
          return (
            <li
              className={`page-item${page === pageNumber ? ' is-active' : ''}`}
              key={shortid.generate()}
            >
              <button value={pageNumber} onClick={onClickPageButton}>
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ol>

      <button
        className={`page-control page-next${
          page === pageCountArray.length ? ' is-disabled' : ''
        }`}
        type="button"
      >
        <i className="ic-chevron"></i>
      </button>
    </div>
  );
};

export default Pagination;
