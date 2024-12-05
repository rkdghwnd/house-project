import StoreDrawerMenu from './StoreDrawerMenu';
import SideBarUserMenu from './SideBarUserMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

const SidebarNav = () => {
  const me = useSelector((state: RootState) => state.user.me);
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
