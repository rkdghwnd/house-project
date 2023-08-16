import React from 'react';
import CommunityDrawerMenu from './CommunityDrawerMenu';
import StoreDrawerMenu from './StoreDrawerMenu';
import ExpertDrawerMenu from './ExpertDrawerMenu';
import SideBarUserMenu from './SideBarUserMenu';

const SidebarNav = () => {
  return (
    <nav className="sidebar-nav">
      <h2 className="visually-hidden">메뉴</h2>
      {/* <CommunityDrawerMenu /> */}
      <StoreDrawerMenu />
      <ExpertDrawerMenu />

      {/* <!-- NOTE: 로그인을 한 경우  --> */}
      <SideBarUserMenu />
    </nav>
  );
};

export default SidebarNav;
