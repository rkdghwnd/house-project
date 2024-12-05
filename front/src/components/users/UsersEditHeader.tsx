import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import WithdrawModal from './WithdrawModal';
import modalSlice from '../../reducers/modalSlice';

const UsersEditHeader = () => {
  const dispatch = useDispatch();

  const onClickWithdrawButton = useCallback(() => {
    dispatch(modalSlice.actions.openWithdrawModal({}));
  }, []);

  return (
    <header className="users-edit-header">
      <h2>회원정보수정</h2>
      <button className="btn-ghost btn-32" onClick={onClickWithdrawButton}>
        탈퇴하기
      </button>
      <WithdrawModal />
    </header>
  );
};

export default UsersEditHeader;
