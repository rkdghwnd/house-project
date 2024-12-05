import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const RanksMenu = () => {
  const location = useLocation();
  const isActive = location.search.includes('?alltime=true');
  return (
    <div className="ranks-menu">
      <Link to="/ranks">
        <button
          className={`btn-48${isActive ? ' btn-outlined' : ' btn-primary'}`}
        >
          실시간 베스트
        </button>
      </Link>
      <Link to="/ranks?alltime=true">
        <button
          className={`btn-48${isActive ? ' btn-primary' : ' btn-outlined'}`}
        >
          역대 베스트
        </button>
      </Link>
    </div>
  );
};

export default RanksMenu;
