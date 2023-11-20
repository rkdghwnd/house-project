import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { getProductFormData } from '../../actions/productions';

const ReviewUpdateRemoveButtons = ({ id, productId, page }) => {
  const dispatch = useDispatch();

  const onClickReviewUpdateButton = useCallback(() => {
    dispatch(
      modalSlice.actions.openWritingReviewForm({
        mode: 'update',
      })
    );
    dispatch(
      getProductFormData({
        reviewId: id,
        page,
      })
    );
  }, [id, page]);

  const onClickReviewRemoveButton = useCallback(() => {
    dispatch(
      modalSlice.actions.openRemoveReviewConfirmModal({
        reviewId: id,
        productId,
        page,
      })
    );
  }, [id, productId, page]);

  return (
    <div className="update-remove-buttons">
      <button className="btn-32 btn-ghost" onClick={onClickReviewUpdateButton}>
        수정
      </button>
      <button className="btn-32 btn-ghost" onClick={onClickReviewRemoveButton}>
        삭제
      </button>
    </div>
  );
};

export default ReviewUpdateRemoveButtons;
