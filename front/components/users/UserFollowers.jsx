import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { getUserFollowers } from '../../actions/user';
import { Link, useParams } from 'react-router-dom';
import FollowerUserFollowButton from './FollowerUserFollowButton';

const UserFollowers = ({ mobileVisible }) => {
  const { userFollowers, me } = useSelector((state) => state.user);
  const params = useParams();

  return (
    <section
      className={`user-followers${mobileVisible ? ' lg-hidden' : ' sm-hidden'}`}
    >
      <div className="user-followers-header">
        <h2>팔로워</h2>
      </div>
      <div className="user-followers-list">
        <ul>
          {userFollowers.map((follower) => {
            return (
              <li key={shortid.generate()}>
                <div className="user-followers-list-title">
                  <Link to={`/users/${follower.id}`}>
                    <img
                      src={`${import.meta.env.VITE_BACK_END_DOMAIN}/${
                        follower.profile_img
                      }`}
                      alt="팔로워 프로필 이미지"
                    />
                  </Link>
                  <span>{follower.nickname}</span>
                </div>
                <FollowerUserFollowButton follower={follower} />
              </li>
            );
          })}
          {userFollowers.length === 0 && (
            <li className="none-followers">없음</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default UserFollowers;
