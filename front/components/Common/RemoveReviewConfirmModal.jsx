import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { removeReview } from '../../actions/productions';
import { useLocation } from 'react-router-dom';

const RemoveReviewConfirmModal = () => {
  const dispatch = useDispatch();

  const {
    removeReviewConfirmModalVisible,
    removeReviewId,
    removeReviewProductId,
  } = useSelector((state) => state.modal);

  const onClickCloseButton = useCallback(() => {
    dispatch(modalSlice.actions.closeModal());
  }, []);

  const onClickRemoveButton = useCallback(() => {
    dispatch(
      removeReview({
        reviewId: removeReviewId,
        productId: removeReviewProductId,
      })
    );
  }, [removeReviewId, removeReviewProductId]);

  return (
    <article
      className={`remove-review-confirm-modal${
        removeReviewConfirmModalVisible ? ' is-open' : ''
      }`}
    >
      <p>리뷰를 삭제하시겠습니까?</p>
      <div className="remove-review-confirm-modal-buttons">
        <button className="btn-48 btn-outlined" onClick={onClickCloseButton}>
          취소
        </button>
        <button className="btn-48 btn-primary" onClick={onClickRemoveButton}>
          확인
        </button>
      </div>
    </article>
  );
};

export default RemoveReviewConfirmModal;
