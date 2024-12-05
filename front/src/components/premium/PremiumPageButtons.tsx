import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const PremiumPageButtons = () => {
  const location = useLocation();
  const isCategory = location.pathname === '/premium/category';
  return (
    <div className="premium-page-buttons">
      <Link to="/premium/category">
        <button
          className={`btn-48 ${isCategory ? 'btn-primary' : 'btn-outlined'}`}
        >
          카테고리
        </button>
      </Link>
      <Link to="/premium/brand">
        <button
          className={`btn-48 ${isCategory ? 'btn-outlined' : 'btn-primary'}`}
        >
          브랜드
        </button>
      </Link>
    </div>
  );
};

export default PremiumPageButtons;
