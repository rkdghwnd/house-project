import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyButtons = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <Link
        className="gnb-icon-button sm-hidden"
        to={`/users/${me.id}/bookmark`}
        aria-label="스크랩북 페이지로 이동"
      >
        <i className="ic-bookmark"></i>
      </Link>
      <Link
        className="gnb-icon-button sm-hidden"
        to="/notification"
        aria-label="내 소식 페이지로 이동"
      >
        <i className="ic-bell"></i>
      </Link>
    </>
  );
};

export default MyButtons;
