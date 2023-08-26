import React from 'react';
import UserProfile from '../components/users/UserProfile';

const UserLike = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-lg-4">
          <UserProfile />
        </div>
        <div className="col-lg-8"></div>
      </div>
    </div>
  );
};

export default UserLike;
