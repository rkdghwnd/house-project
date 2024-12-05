import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Link, NavLink, useParams } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { followUser, getUserInfo, unfollowUser } from '../../actions/user';
import { useAppDispatch } from '../../../reduxToolkitStore';
import { RootState } from '../../reducers';

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const me = useSelector((state: RootState) => state.user.me);
  const user = useSelector((state: RootState) => state.user.user);
  const params = useParams();
  const userIsMe = me?.id === user?.id;

  useEffect(() => {
    // 유저 정보 불러오기
    dispatch(
      getUserInfo({
        userId: parseInt(params.userId || ''),
      })
    );
  }, [params]);

  const isFollowed = user?.Followers?.find(
    (follower) => follower.id === me?.id
  );

  const openShareModal = useCallback(() => {
    dispatch(modalSlice.actions.openShareModal({}));
  }, []);

  const onClickFollowButtons = useCallback(() => {
    if (me) {
      // 팔로우 언팔로우
      if (isFollowed) {
        dispatch(
          unfollowUser({
            userId: user?.id || 0,
          })
        );
      } else {
        dispatch(
          followUser({
            userId: user?.id || 0,
          })
        );
      }
    } else {
      dispatch(modalSlice.actions.openLogInModal({}));
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
          <span className="user-profile-info-title-span">{user?.nickname}</span>
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
          <span className="user-profile-links-scrap">스크랩북</span>
          <span>{user?.Bookmarked.length}</span>
        </Link>
        <Link to={`/users/${user?.id}/like`}>
          <CiHeart className="heart-icons" />
          <span className="user-profile-links-like">좋아요</span>
          <span>{user?.Liked.length}</span>
        </Link>
      </div>
    </section>
  );
};

export default UserProfile;
