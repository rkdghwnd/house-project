import { forwardRef, LegacyRef, useCallback, useEffect, useState } from 'react';
import ReviewScoreBoard from './ReviewScoreBoard';
import ReviewCard from './ReviewCard';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { getProductionReviews } from '../../actions/productions';
import modalSlice from '../../reducers/modalSlice';
import productionsSlice from '../../reducers/productionsSlice';
import { SUCCEEDED } from '../../datas/statusConstants';
import { useAppDispatch } from '../../../reduxToolkitStore';
import { RootState } from '../../reducers';

const ProductReview = (props: {}, ref: LegacyRef<HTMLBaseElement>) => {
  const dispatch = useAppDispatch();
  const me = useSelector((state: RootState) => state.user.me);

  const productionReviews = useSelector(
    (state: RootState) => state.productions.productionReviews
  );
  const productions = useSelector(
    (state: RootState) => state.productions.productions
  );
  const writeReviewStatus = useSelector(
    (state: RootState) => state.productions.writeReviewStatus
  );
  const updateReviewStatus = useSelector(
    (state: RootState) => state.productions.updateReviewStatus
  );
  const removeReviewStatus = useSelector(
    (state: RootState) => state.productions.removeReviewStatus
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (productions?.id) {
      dispatch(
        getProductionReviews({
          query: `?page=1`,
          productId: productions.id,
        })
      );
    }
  }, [productions.id]);

  useEffect(() => {
    if (writeReviewStatus === SUCCEEDED) {
      dispatch(
        getProductionReviews({
          query: `?page=1`,
          productId: productions.id,
        })
      );
      setPage(1);
    }
  }, [writeReviewStatus]);

  useEffect(() => {
    if (updateReviewStatus === SUCCEEDED) {
      dispatch(
        getProductionReviews({
          query: `?page=1`,
          productId: productions.id,
        })
      );
    }
  }, [updateReviewStatus]);

  useEffect(() => {
    if (removeReviewStatus === SUCCEEDED) {
      dispatch(
        getProductionReviews({
          query: `?page=1`,
          productId: productions.id,
        })
      );
    }
  }, [removeReviewStatus]);

  const existingReviewList = productionReviews?.reviews?.map((review) => {
    return (
      <li key={shortid.generate()} className="review-item">
        <ReviewCard {...review} page={page} />
      </li>
    );
  });

  const reviewList =
    productionReviews?.reviews?.length === 0 ? (
      <div className="product-section-content">
        <p className="review-empty">
          첫 리뷰를 남겨주세요! <br />
          최대 <strong>500P</strong>를 드립니다.
        </p>
      </div>
    ) : (
      <ol className="review-list">{existingReviewList}</ol>
    );

  const openReviewWritingModal = useCallback(() => {
    if (me) {
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
            id: productions.id,
            image_url: productions.image_url,
            brand_name: productions.brand_name,
            product_name: productions.product_name,
          },
        })
      );
    } else {
      dispatch(modalSlice.actions.openLogInModal({}));
    }
  }, [me, productions]);

  return (
    <section
      className="product-section product-review"
      id="product-review"
      role="tabpanel"
      ref={ref}
    >
      <header className="product-section-header">
        <h1 className="title">리뷰</h1>
        <strong className="badge" aria-label={`${productionReviews?.count}개`}>
          {productionReviews?.count}
        </strong>
        <button className="text-button" onClick={openReviewWritingModal}>
          리뷰쓰기
        </button>
      </header>
      <div className="product-section-content">
        <ReviewScoreBoard />
        {reviewList}
        <Pagination
          totalCount={productionReviews?.count}
          countPerPage={5}
          actionFunction={getProductionReviews}
          productId={productions.id}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
};

export default forwardRef(ProductReview);
