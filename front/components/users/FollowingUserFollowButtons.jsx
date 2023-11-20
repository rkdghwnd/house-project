import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/user';
import modalSlice from '../../reducers/modalSlice';

const FollowingUserFollowButtons = ({ following }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  // 내(me)가 이 user를 follow/unfollow 하는것
  const onClickFollowButton = useCallback(() => {
    if (me) {
      dispatch(
        followUser({
          userId: following.id,
        })
      );
    } else {
      dispatch(modalSlice.actions.openLogInModal());
    }
  }, [me]);

  const onClickUnfollowButton = useCallback(() => {
    dispatch(
      unfollowUser({
        userId: following.id,
      })
    );
  }, []);

  const followOrUnfollowButton = useMemo(() => {
    if (me?.id !== following?.id) {
      // 사용자가 내가 아닐 때(나 이면 버튼 안보이도록)
      if (
        me?.Followings?.find((myFollowing) => myFollowing?.id === following?.id)
      ) {
        // 이미 내가 팔로우를 한 사용자면
        return (
          <button
            className="btn-outlined btn-32"
            onClick={onClickUnfollowButton}
          >
            언팔로우
          </button>
        );
      } else {
        // 내가 팔로우를 안한 사용자면 or 로그인 안한경우
        return (
          <button className="btn-primary btn-32" onClick={onClickFollowButton}>
            팔로우
          </button>
        );
      }
    }
  }, [me, following]);

  return <>{followOrUnfollowButton}</>;
};

export default FollowingUserFollowButtons;
