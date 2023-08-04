import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const { sideBarVisible } = useSelector((state) => state.modal);

  return (
    <aside className={`sidebar sm-only ${sideBarVisible ? 'is-active' : ''}`}>
      <SidebarHeader />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
