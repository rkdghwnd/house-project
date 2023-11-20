import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import FollowingUserFollowButtons from './FollowingUserFollowButtons';

const UserFollowings = ({ mobileVisible }) => {
  const { userFollowings } = useSelector((state) => state.user);

  return (
    <section
      className={`user-followings${
        mobileVisible ? ' lg-hidden' : ' sm-hidden'
      }`}
    >
      <div className="user-followings-header">
        <h2>팔로잉</h2>
      </div>
      <div className="user-followings-list">
        <ul>
          {userFollowings.map((following) => {
            return (
              <li key={shortid.generate()}>
                <div className="user-followings-list-title">
                  <Link to={`/users/${following?.id}`}>
                    <img
                      src={`${import.meta.env.VITE_BACK_END_DOMAIN}/${
                        following.profile_img
                      }`}
                      alt="팔로잉 프로필 이미지"
                    />
                  </Link>
                  <span>{following.nickname}</span>
                </div>
                <FollowingUserFollowButtons following={following} />
              </li>
            );
          })}
          {userFollowings.length === 0 && (
            <li className="none-followings">없음</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default UserFollowings;
