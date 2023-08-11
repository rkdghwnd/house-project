import React from 'react';

const SidebarHeader = () => {
  return (
    <header className="sidebar-header">
      <h1 className="logo">
        <a href="/">
          <img src="/assets/images/logo.svg" alt="내일의 집" />
        </a>
      </h1>

      {/* <!-- NOTE: 로그인을 한 경우  --> */}
      <div className="sidebar-user">
        <a href="/">
          <div className="avatar-24">
            <img src="/assets/images/img-user-01.jpg" alt="사달라 아저씨" />
          </div>
          <strong className="username">사달라</strong>
        </a>
      </div>

      {/* <!-- NOTE: 로그인을 하지 않은 경우  --> */}
      {/* <!-- <div className="sidebar-auth">
        <a className="btn-outlined btn-40" href="/">로그인</a>
        <a className="btn-primary btn-40" href="/">회원가입</a>
      </div> --> */}
    </header>
  );
};

export default SidebarHeader;
