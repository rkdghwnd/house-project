import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
const Sidebar = () => {
  const sideBarVisible = useSelector(
    (state: RootState) => state.modal.sideBarVisible
  );

  return (
    <aside className={`sidebar ${sideBarVisible ? 'is-active' : ''}`}>
      <SidebarHeader />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
