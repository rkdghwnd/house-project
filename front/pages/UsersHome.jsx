import React from 'react';
import UserProfile from '../components/users/UserProfile';
import UserFollowings from '../components/users/UserFollowings';
import UserFollowers from '../components/users/UserFollowers';

const UsersHome = () => {
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
