import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import FollowingUserFollowButtons from './FollowingUserFollowButtons';
import { RootState } from '../../reducers';

const UserFollowings = ({ mobileVisible }: { mobileVisible: boolean }) => {
  const userFollowings = useSelector(
    (state: RootState) => state.user.userFollowings
  );

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
