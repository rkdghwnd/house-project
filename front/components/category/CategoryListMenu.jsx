import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryListMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState();
  const toggleSubMenu = useCallback(() => {
    setOpenSubMenu((state) => !state);
  }, []);

  return (
    <div className="category-list-menu">
      <div className="category-list-menu-header">
        <h2>
          <Link to="/">가구</Link>
        </h2>
        <i
          className={`ic-chevron ${openSubMenu ? ' on-open' : ''}`}
          onClick={toggleSubMenu}
        ></i>
      </div>

      <ul className={`category-list-menu-sub ${openSubMenu ? ' on-open' : ''}`}>
        <li className="category-list-menu-sub-link is-active">
          <Link to="/">침대</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">매트리스·토퍼</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">테이블·식탁·책상</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">소파</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">서랍·수납장</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">거실장·TV장 </Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">선반</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">진열장·책장</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">의자</Link>
        </li>
        <li className="category-list-menu-sub-link">
          <Link to="/">헹거·옷장</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryListMenu;
