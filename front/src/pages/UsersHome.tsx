import React, { useEffect } from 'react';
import UserProfile from '../components/users/UserProfile';
import UserFollowings from '../components/users/UserFollowings';
import UserFollowers from '../components/users/UserFollowers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserFollowers, getUserFollowings } from '../actions/user';
import { SUCCEEDED } from '../datas/statusConstants';
import { RootState } from '../reducers';
import { useAppDispatch } from '../../reduxToolkitStore';

const UsersHome = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const getUserInfoStatus = useSelector(
    (state: RootState) => state.user.getUserInfoStatus
  );
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    dispatch(
      getUserFollowers({
        userId: parseInt(params.userId || ''),
      })
    );
    dispatch(
      getUserFollowings({
        userId: parseInt(params.userId || ''),
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
