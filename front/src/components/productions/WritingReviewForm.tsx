import React, { useCallback, useEffect, useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import WritingReviewFormProduct from './WritingReviewFormProduct';
import WritingReviewFormImageAttach from './WritingReviewFormImageAttach';
import WritingReviewFormText from './WritingReviewFormText';
import WritingReviewFormPolicy from './WritingReviewFormPolicy';
import modalSlice from '../../reducers/modalSlice';
import { RootState } from '../../reducers';

const WritingReviewForm = () => {
  const dispatch = useDispatch();

  const writingReviewFormVisible = useSelector(
    (state: RootState) => state.modal.writingReviewFormVisible
  );
  const writingReviewFormMode = useSelector(
    (state: RootState) => state.modal.writingReviewFormMode
  );

  const writingReviewFormData = useSelector(
    (state: RootState) => state.productions.writingReviewFormData
  );
  const [starCount, setStarCount] = useState(
    Array.from({ length: 5 }, (_, i) => (i === 0 ? true : false))
  );
  useEffect(() => {
    setStarCount(
      Array.from(
        { length: 5 },
        (_, i) => i + 1 <= writingReviewFormData.review_star
      )
    );
  }, [writingReviewFormData]);

  const onClickReviewStar = useCallback(
    (clickedIndex: number) => () => {
      setStarCount(
        starCount.map((el, i) => (i <= clickedIndex ? true : false))
      );
    },
    [starCount]
  );

  const onCloseReviewForm = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
  }, []);

  return (
    <section
      className={`writing-review-form${
        writingReviewFormVisible ? ' is-open' : ''
      }`}
    >
      <header className="writing-review-form-header">
        <i className="ic-close" onClick={onCloseReviewForm}></i>
        <h3>
          {writingReviewFormMode === 'update' ? '리뷰 수정하기' : '리뷰작성'}
        </h3>
      </header>

      <WritingReviewFormProduct />
      <div className="writing-review-form-star">
        <h3>별점 평가</h3>
        <div className="star-format">
          <div className="star-format-name">
            <label>만족도</label>
          </div>
          {starCount?.map((isActive, i) => {
            return (
              <i
                className={`ic-star${isActive ? ' is-active' : ''}`}
                key={shortid.generate()}
                onClick={onClickReviewStar(i)}
              />
            );
          })}
        </div>
      </div>

      <WritingReviewFormImageAttach />
      <WritingReviewFormText starCount={starCount} />
      <WritingReviewFormPolicy />
    </section>
  );
};

export default WritingReviewForm;
