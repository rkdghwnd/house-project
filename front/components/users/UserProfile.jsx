import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

const UserProfile = () => {
  return (
    <section className="user-profile">
      <div className="user-profile-info">
        <div className="user-profile-info-image">
          <img src="/assets/images/img-user-default.png" alt="" />
        </div>
        <div className="user-profile-info-title">
          <h4>강호중6</h4>
          <div className="user-following-follower">
            <span>팔로워</span>
            &nbsp;0
            <span>&nbsp;|&nbsp;</span>
            <span>팔로잉</span>
            &nbsp;0
          </div>
          <NavLink to="/users/1/edit">
            <button className="btn-32 btn-outlined">설정</button>
          </NavLink>
          <AiOutlineShareAlt className="share-icons" />
        </div>
      </div>
      <div className="user-profile-links">
        <Link to="/users/1/bookmark">
          <i className="ic-bookmark"></i>
          <h4>스크랩북</h4>
          <span>3</span>
        </Link>
        <Link to="/users/1/like">
          <CiHeart className="heart-icons" />
          <h4>좋아요</h4>
          <span>1</span>
        </Link>
      </div>
    </section>
  );
};

export default UserProfile;
