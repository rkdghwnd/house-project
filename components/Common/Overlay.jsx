import React, { useCallback } from 'react';
import modalSlice from '../../reducers/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const Overlay = () => {
  const dispatch = useDispatch();
  const { overlay } = useSelector((state) => state.modal);

  const onClickOverlay = useCallback(() => {
    dispatch(modalSlice.actions.closeModal());
  }, []);

  return (
    // {/* .overlay : 모달의 백드롭을 공통적으로 적용하는 태그 */}
    <div
      className={`overlay${overlay ? ' is-active' : ''}`}
      aria-hidden
      onClick={onClickOverlay}
    ></div>
  );
};

export default Overlay;
