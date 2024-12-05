import { useCallback, useEffect } from 'react';
import modalSlice from '../../reducers/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';

const Overlay = () => {
  const dispatch = useDispatch();
  const overlay = useSelector((state: RootState) => state.modal.overlay);

  useEffect(() => {
    if (overlay) {
      document.body.setAttribute('style', 'overflow: hidden');
    }
    return () => document.body.setAttribute('style', 'overflow: auto');
  }, [overlay]);

  const onClickOverlay = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
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
