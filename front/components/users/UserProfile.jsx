import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Link, NavLink, useParams } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { followUser, getUserInfo, unfollowUser } from '../../actions/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, user } = useSelector((state) => state.user);
  const params = useParams();
  const userIsMe = me?.id === user?.id;

  useEffect(() => {
    // 유저 정보 불러오기
    dispatch(
      getUserInfo({
        userId: params.userId,
      })
    );
  }, [params]);

  const isFollowed = user?.Followers?.find(
    (follower) => follower.id === me?.id
  );

  const openShareModal = useCallback(() => {
    dispatch(modalSlice.actions.openShareModal());
  }, []);

  const onClickFollowButtons = useCallback(() => {
    if (me) {
      // 팔로우 언팔로우
      if (isFollowed) {
        dispatch(
          unfollowUser({
            userId: user?.id,
          })
        );
      } else {
        dispatch(
          followUser({
            userId: user?.id,
          })
        );
      }
    } else {
      dispatch(modalSlice.actions.openLogInModal());
    }
  }, [me, user]);

  return (
    <section className="user-profile">
      <div className="user-profile-info">
        <div className="user-profile-info-image">
          <img
            src={`${import.meta.env.VITE_BACK_END_DOMAIN}/${user?.profile_img}`}
            alt="profile-image"
          />
        </div>
        <div className="user-profile-info-title">
          <h4>{user?.nickname}</h4>
          <div className="user-following-follower">
            <span>팔로워</span>
            &nbsp;{user?.Followers.length}
            <span>&nbsp;|&nbsp;</span>
            <span>팔로잉</span>
            &nbsp;{user?.Followings.length}
          </div>
          {userIsMe ? (
            <NavLink to="/users/edit">
              <button className="btn-32 btn-outlined">설정</button>
            </NavLink>
          ) : (
            <button
              className={`btn-32${
                isFollowed ? ' btn-outlined' : ' btn-primary'
              } `}
              onClick={onClickFollowButtons}
            >
              {isFollowed ? '언팔로우' : '팔로우'}
            </button>
          )}

          <AiOutlineShareAlt className="share-icons" onClick={openShareModal} />
        </div>
      </div>
      <div className="user-profile-links">
        <Link to={`/users/${user?.id}/bookmark`}>
          <i className="ic-bookmark"></i>
          <h4>스크랩북</h4>
          <span>{user?.Bookmarked.length}</span>
        </Link>
        <Link to={`/users/${user?.id}/like`}>
          <CiHeart className="heart-icons" />
          <h4>좋아요</h4>
          <span>{user?.Liked.length}</span>
        </Link>
      </div>
    </section>
  );
};

export default UserProfile;
