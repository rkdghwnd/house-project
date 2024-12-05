import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import React, { Dispatch, MouseEvent, useCallback } from 'react';
import shortid from 'shortid';
import { useAppDispatch } from '../../../reduxToolkitStore';
import {
  ProductIdPayloadType,
  QueryPayloadType,
} from '../../types/actionsTypes';

type PaginationPropsType = {
  totalCount: number;
  countPerPage: number;
  actionFunction: AsyncThunk<any, any, any>;
  productId?: number;
  page?: number;
  setPage?: Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  totalCount,
  countPerPage = 5,
  actionFunction,
  productId,
  page,
  setPage,
}: PaginationPropsType) => {
  const dispatch = useAppDispatch();
  const pageCountArray = Array.from(
    { length: Math.ceil(totalCount / countPerPage) || 1 },
    (_, i) => i + 1
  );

  const onClickPageButton = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setPage!(parseInt(e.currentTarget.value));

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
