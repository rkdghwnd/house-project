import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { removeInquiry } from '../../actions/productions';
import { useLocation } from 'react-router-dom';

const RemoveInquiryConfirmModal = () => {
  const dispatch = useDispatch();
  const {
    removeInquiryConfirmModalVisible,
    removeInquiryId,
    removeInquiryProductId,
  } = useSelector((state) => state.modal);

  const onClickCloseButton = useCallback(() => {
    dispatch(modalSlice.actions.closeModal());
  }, []);

  const onClickRemoveButton = useCallback(() => {
    dispatch(
      removeInquiry({
        inquiryId: removeInquiryId,
        productId: removeInquiryProductId,
      })
    );
  }, [removeInquiryId, removeInquiryProductId]);

  return (
    <article
      className={`remove-inquiry-confirm-modal${
        removeInquiryConfirmModalVisible ? ' is-open' : ''
      }`}
    >
      <p>문의를 삭제하시겠습니까?</p>
      <div className="remove-inquiry-confirm-modal-buttons">
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

export default RemoveInquiryConfirmModal;
