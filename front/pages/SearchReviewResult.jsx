import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import modalSlice from '../reducers/modalSlice';
import productionsSlice from '../reducers/productionsSlice';

const SearchReviewResult = () => {
  const dispatch = useDispatch();
  const { searchReviewProducts, searchReviewProductsVisible } = useSelector(
    (state) => state.search
  );
  const openReviewWritingModal = useCallback(
    (id, image_url, brand_name, product_name) => () => {
      // 리뷰작성 모달 열기
      dispatch(
        modalSlice.actions.openWritingReviewForm({
          mode: 'create',
        })
      );
      dispatch(
        productionsSlice.actions.updateWritingReviewFormData({
          id: null,
          review_img: '',
          review_star: 1,
          Product: {
            id: id,
            image_url,
            brand_name,
            product_name,
          },
        })
      );
    },
    []
  );

  return (
    <section
      className={`search-review-result${
        searchReviewProductsVisible ? '' : ' visually-hidden'
      }`}
    >
      {searchReviewProducts.length === 0 ? (
        <div className="empty-search-review-item">
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        searchReviewProducts?.map(
          ({ id, image_url, brand_name, product_name }) => {
            return (
              <div
                className="search-review-item"
                key={shortid.generate()}
                onClick={openReviewWritingModal(
                  id,
                  image_url,
                  brand_name,
                  product_name
                )}
              >
                <img src={image_url} alt="search-review-product" />
                <div className="search-review-item-content">
                  <span>{brand_name}</span>
                  <h3>{product_name}</h3>
                </div>
              </div>
            );
          }
        )
      )}
    </section>
  );
};

export default SearchReviewResult;
