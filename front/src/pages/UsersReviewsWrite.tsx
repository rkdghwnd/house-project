import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import SearchReviewResult from './SearchReviewResult';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchReviewProducts } from '../actions/search';
import searchSlice from '../reducers/searchSlice';
import { SUCCEEDED } from '../datas/statusConstants';
import { RootState } from '../reducers';
import { useAppDispatch } from '../../reduxToolkitStore';

const UsersReviewsWrite = () => {
  const dispatch = useAppDispatch();

  const getSearchReviewProductsStatus = useSelector(
    (state: RootState) => state.search.getSearchReviewProductsStatus
  );
  const searchReviewProductsVisible = useSelector(
    (state: RootState) => state.search.searchReviewProductsVisible
  );
  const [searchText, setSearchText] = useState('');

  const onChangeSearchText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.currentTarget.value);
      if (!e.currentTarget.value && searchReviewProductsVisible) {
        dispatch(
          searchSlice.actions.updateSearchReviewProductsVisible({
            visible: false,
          })
        );
      } else if (
        e.currentTarget.value &&
        getSearchReviewProductsStatus === SUCCEEDED &&
        !searchReviewProductsVisible
      ) {
        dispatch(
          searchSlice.actions.updateSearchReviewProductsVisible({
            visible: true,
          })
        );
      }
    },
    [searchReviewProductsVisible, getSearchReviewProductsStatus]
  );

  const onEnterSearchInput = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && e.currentTarget.value) {
        dispatch(
          getSearchReviewProducts({
            query: `?keyword=${e.currentTarget.value}`,
          })
        );
      }
    },
    []
  );

  const onSearchProductReview = useCallback(() => {
    if (searchText) {
      dispatch(
        getSearchReviewProducts({
          query: `?keyword=${searchText}`,
        })
      );
    }
  }, [searchText]);

  return (
    <section className="production-reviews-write">
      <article className="production-reviews-write-main">
        <span className="production-reviews-write-main-title">
          내가 사용하는 상품 리뷰쓰기
        </span>
        <div className="search-reviews-input">
          <input
            className="input-secondary"
            type="text"
            placeholder="브랜드명 혹은 상품명 입력"
            value={searchText}
            onChange={onChangeSearchText}
            onKeyDown={onEnterSearchInput}
          />
          <button
            className="btn-primary btn-40"
            onClick={onSearchProductReview}
          >
            검색
          </button>
        </div>
        <SearchReviewResult />
      </article>
    </section>
  );
};

export default UsersReviewsWrite;
