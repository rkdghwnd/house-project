import React, { useEffect } from 'react';
import UserProfile from '../components/users/UserProfile';
import UserFollowings from '../components/users/UserFollowings';
import UserFollowers from '../components/users/UserFollowers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserFollowers, getUserFollowings } from '../actions/user';
import { SUCCEEDED } from '../datas/statusConstants';

const UsersHome = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { getUserInfoStatus, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      getUserFollowers({
        userId: params.userId,
      })
    );
    dispatch(
      getUserFollowings({
        userId: params.userId,
      })
    );
  }, [params.userId]);

  if (getUserInfoStatus === SUCCEEDED && !user) {
    <>존재하지 않는 사용자 입니다.</>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-lg-4">
          <UserProfile />
          <UserFollowings mobileVisible={true} />
          <UserFollowers mobileVisible={true} />
        </div>
        <div className="col-lg-8">
          <UserFollowings mobileVisible={false} />
          <UserFollowers mobileVisible={false} />
        </div>
      </div>
    </div>
  );
};

export default UsersHome;
