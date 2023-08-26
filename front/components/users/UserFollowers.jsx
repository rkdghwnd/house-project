import React from 'react';

const UserFollowers = ({ mobileVisible }) => {
  return (
    <section
      className={`user-followers${mobileVisible ? ' lg-hidden' : ' sm-hidden'}`}
    >
      <div className="user-followers-header">
        <h2>팔로워</h2>
      </div>
      <div className="user-followers-list">
        <ul>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
          <li>
            <div className="user-followers-list-title">
              <img src="/assets/images/img-user-default.png" alt="" />
              <span>고민중80</span>
            </div>
            <button className="btn-outlined btn-32">팔로워</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserFollowers;
