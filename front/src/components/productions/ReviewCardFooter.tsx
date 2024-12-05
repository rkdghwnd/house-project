import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeReview, unlikeReview } from '../../actions/user';
import modalSlice from '../../reducers/modalSlice';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const ReviewCardFooter = ({
  Likers,
  id,
}: {
  Likers?: { id: number }[];
  id: number;
}) => {
  const dispatch = useAppDispatch();
  const me = useSelector((state: RootState) => state.user.me);
  const isLiked = me?.Liked?.find((review) => review?.id === id);

  const onClickReviewLike = useCallback(() => {
    const route = location.pathname.split('/')[1];
    if (me) {
      dispatch(likeReview({ reviewId: id, route }));
    } else {
      dispatch(modalSlice.actions.openLogInModal({}));
    }
  }, [me, location]);

  const onClickReviewUnlike = useCallback(() => {
    const route = location.pathname.split('/')[1];
    if (me) {
      dispatch(unlikeReview({ reviewId: id, route }));
    } else {
      dispatch(modalSlice.actions.openLogInModal({}));
    }
  }, [me, location]);

  return (
    <footer className="review-card-footer">
      {isLiked ? (
        <button
          className="btn-primary btn-32"
          type="button"
          onClick={onClickReviewUnlike}
        >
          <i className="ic-check" aria-hidden></i>
          도움됨
        </button>
      ) : (
        <button
          className="btn-outlined btn-32"
          type="button"
          onClick={onClickReviewLike}
        >
          도움이 돼요
        </button>
      )}

      <p>
        <strong>
          <span>{Likers?.length || 0}</span>명
        </strong>
        에게 도움이 되었습니다.
      </p>
    </footer>
  );
};

export default ReviewCardFooter;
