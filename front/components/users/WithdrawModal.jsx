import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { withdrawAccount } from '../../actions/user';

const WithdrawModal = () => {
  const dispatch = useDispatch();
  const { withdrawModalVisible } = useSelector((state) => state.modal);

  const onClickConfirm = useCallback(() => {
    dispatch(withdrawAccount());
  }, []);

  const onClickCancel = useCallback(() => {
    dispatch(modalSlice.actions.closeModal());
  }, []);

  return (
    <div className={`withdraw-modal${withdrawModalVisible ? ' is-open' : ''}`}>
      <p>회원 탈퇴를 하시겠습니까?</p>
      <div className="withdraw-modal-buttons">
        <button className="btn-32 btn-primary" onClick={onClickConfirm}>
          확인
        </button>
        <button className="btn-32 btn-outlined" onClick={onClickCancel}>
          취소
        </button>
      </div>
    </div>
  );
};

export default WithdrawModal;
