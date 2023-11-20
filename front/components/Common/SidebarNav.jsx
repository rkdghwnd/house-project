import React from 'react';
import CommunityDrawerMenu from './CommunityDrawerMenu';
import StoreDrawerMenu from './StoreDrawerMenu';
import ExpertDrawerMenu from './ExpertDrawerMenu';
import SideBarUserMenu from './SideBarUserMenu';
import { useSelector } from 'react-redux';

const SidebarNav = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <nav className="sidebar-nav">
      <h2 className="visually-hidden">메뉴</h2>
      {/* <CommunityDrawerMenu /> */}
      <StoreDrawerMenu />
      {/* <ExpertDrawerMenu /> */}

      {me && <SideBarUserMenu />}
    </nav>
  );
};

export default SidebarNav;
