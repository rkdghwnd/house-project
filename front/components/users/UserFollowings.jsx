import React from 'react';

const UserFollowings = ({ mobileVisible }) => {
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
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
          <li>
            <div className="user-followings-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로잉</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserFollowings;
