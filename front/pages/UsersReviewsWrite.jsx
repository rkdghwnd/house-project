import React, { useCallback, useState } from 'react';
import SearchReviewResult from './SearchReviewResult';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchReviewProducts } from '../actions/search';
import SearchModal from '../components/common/SearchModal';
import searchSlice from '../reducers/searchSlice';
import { SUCCEEDED } from '../datas/statusConstants';

const UsersReviewsWrite = () => {
  const dispatch = useDispatch();
  const { getSearchReviewProductsStatus, searchReviewProductsVisible } =
    useSelector((state) => state.search);
  const [searchText, setSearchText] = useState('');

  const onChangeSearchText = useCallback(
    (e) => {
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

  const onEnterSearchInput = useCallback((e) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      dispatch(
        getSearchReviewProducts({
          query: `?keyword=${e.currentTarget.value}`,
        })
      );
    }
  }, []);

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
        <h4>내가 사용하는 상품 리뷰쓰기</h4>
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
