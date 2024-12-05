import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { SUCCEEDED } from '../../datas/statusConstants';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../reducers';

const MessageModal = () => {
  const dispatch = useDispatch();

  const messageModalVisible = useSelector(
    (state: RootState) => state.modal.messageModalVisible
  );
  const message = useSelector((state: RootState) => state.modal.message);
  const withdrawAccountStatus = useSelector(
    (state: RootState) => state.user.withdrawAccountStatus
  );
  const navigate = useNavigate();
  const onCloseMessageModal = useCallback(() => {
    dispatch(
      modalSlice.actions.closeMessageModal({
        message: '',
      })
    );

    if (withdrawAccountStatus === SUCCEEDED) {
      navigate('/');
    }
  }, [withdrawAccountStatus]);

  return (
    <section
      className={`message-modal${messageModalVisible ? ' is-active' : ''}`}
    >
      <p>{message}</p>
      <button className="btn-primary" onClick={onCloseMessageModal}>
        확인
      </button>
    </section>
  );
};

export default MessageModal;
