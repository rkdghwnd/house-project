import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { withdrawAccount } from '../../actions/user';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';
import { AxiosError, ResponseType } from 'axios';

const WithdrawModal = () => {
  const dispatch = useAppDispatch();
  const withdrawModalVisible = useSelector(
    (state: RootState) => state.modal.withdrawModalVisible
  );

  const onClickConfirm = useCallback(() => {
    try {
      dispatch(withdrawAccount());
    } catch (error) {
      console.error(error);
      modalSlice.actions.openMessageModal({
        message: (error as unknown as AxiosError).response!.data,
      });
    }
  }, []);

  const onClickCancel = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
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
