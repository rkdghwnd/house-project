import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { followUser, removeFollower, unfollowUser } from '../../actions/user';
import modalSlice from '../../reducers/modalSlice';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const FollowerUserFollowButton = ({
  follower,
}: {
  follower: {
    id: number;
    Follow?: {
      createdAt: string;
      updatedAt: string;
      followingId: number;
      followerId: number;
    };
  };
}) => {
  const dispatch = useAppDispatch();
  const me = useSelector((state: RootState) => state.user.me);
  const params = useParams();

  const onClickFollowButton = useCallback(() => {
    if (me) {
      dispatch(
        followUser({
          userId: follower.id,
        })
      );
    } else {
      dispatch(modalSlice.actions.openLogInModal({}));
    }
  }, [me]);

  const onClickUnfollowButton = useCallback(() => {
    dispatch(
      unfollowUser({
        userId: follower.id,
      })
    );
  }, []);

  const onClickRemoveFollowerButton = useCallback(() => {
    dispatch(
      removeFollower({
        userId: follower.id,
      })
    );
  }, []);

  const followOrUnfollowButton = useMemo(() => {
    if (me?.id !== follower?.id) {
      // 사용자가 내가 아닐 때(나 이면 버튼 안보이도록)
      if (me) {
        // 로그인 한 경우
        if (me?.id === parseInt(params?.userId || '')) {
          // 현재 페이지가 내 페이지인 경우
          return (
            <button
              className="btn-outlined btn-32"
              onClick={onClickRemoveFollowerButton}
            >
              언팔로워
            </button>
          );
        } else {
          // 현재 페이지가 내 페이지가 아닌 경우
          if (
            me.Followings.find((following) => following?.id === follower?.id)
          ) {
            // 내가 팔로우한 상대이면
            return (
              <button
                className="btn-outlined btn-32"
                onClick={onClickUnfollowButton}
              >
                언팔로우
              </button>
            );
          } else {
            // 내가 팔로우한 상대가 아니면
            return (
              <button
                className="btn-primary btn-32"
                onClick={onClickFollowButton}
              >
                팔로우
              </button>
            );
          }
        }
      } else {
        // 로그인 안한 경우
        return (
          <button className="btn-primary btn-32" onClick={onClickFollowButton}>
            팔로우
          </button>
        );
      }
    }
  }, [me, follower]);

  return <>{followOrUnfollowButton}</>;
};

export default FollowerUserFollowButton;
