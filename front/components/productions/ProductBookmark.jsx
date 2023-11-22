import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookmark } from '../../actions/user';
import modalSlice from '../../reducers/modalSlice';

const ProductBookmark = ({ isInForm }) => {
  const dispatch = useDispatch();
  const { productions } = useSelector((state) => state.productions);
  const { me } = useSelector((state) => state.user);
  const isBookmarked = me?.Bookmarked.find(
    (product) => product.id === productions.id
  );

  const onClickBookmark = useCallback(() => {
    if (me) {
      dispatch(
        updateBookmark({
          productId: productions.id,
          add: !isBookmarked,
        })
      );
    } else {
      dispatch(modalSlice.actions.openLogInModal());
    }
  }, [productions.id, isBookmarked, me]);

  return (
    <button
      className={`${isInForm ? 'bookmark-button btn-55' : 'btn-ghost btn-48'}${
        isBookmarked ? ' is-active' : ''
      }`}
      type="button"
      aria-label={`북마크에 ${isBookmarked ? '해제' : '추가'}`}
      onClick={onClickBookmark}
    >
      <i
        className={`ic-bookmark${isBookmarked ? '-filled' : ''}`}
        aria-hidden
      ></i>
    </button>
  );
};

export default ProductBookmark;
