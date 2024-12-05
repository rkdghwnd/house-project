import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { removeReview } from '../../actions/productions';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const RemoveReviewConfirmModal = () => {
  const dispatch = useAppDispatch();

  const removeReviewConfirmModalVisible = useSelector(
    (state: RootState) => state.modal.removeReviewConfirmModalVisible
  );
  const removeReviewId = useSelector(
    (state: RootState) => state.modal.removeReviewId
  );
  const removeReviewProductId = useSelector(
    (state: RootState) => state.modal.removeReviewProductId
  );

  const onClickCloseButton = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
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
