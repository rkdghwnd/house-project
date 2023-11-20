import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { subCategoryMenus } from '../../hooks/category';
import shortid from 'shortid';

const SubCategoryMenu = () => {
  const location = useLocation();
  const categoryIndex = Math.floor(
    parseInt(location.search.split('?category_id=')[1]) / 10
  );

  return (
    <nav className="subcategory-menu sm-only">
      {subCategoryMenus[categoryIndex]?.map((menu) => {
        return (
          <NavLink to={menu.href} key={shortid.generate()}>
            <img src={menu.src} alt={menu.title} />
            <span>{menu.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SubCategoryMenu;
