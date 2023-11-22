import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import shortid from 'shortid';

const CategoryListMenu = ({ title, subCategories, indexUnit }) => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const toggleSubMenu = useCallback(() => {
    setOpenSubMenu((state) => !state);
  }, []);

  // 해당하는 페이지가 현재 경로랑 같으면? -> is-active 추가하기
  // 해당하는 페이지가 indexUnit 범위에 있으면? -> 하위메뉴 op-open 추가

  useEffect(() => {
    if (parseInt(parseInt(location.search.split('=')[1]) / 10) === indexUnit) {
      setOpenSubMenu(true);
    } else {
      setOpenSubMenu(false);
    }
  }, [location, indexUnit]);

  return (
    <div className="category-list-menu">
      <div className="category-list-menu-header">
        <h2>
          <Link to={`/category?category_id=${indexUnit * 10}`}>{title}</Link>
        </h2>
        <i
          className={`ic-chevron ${openSubMenu ? ' on-open' : ''}`}
          onClick={toggleSubMenu}
        ></i>
      </div>

      <ul className={`category-list-menu-sub${openSubMenu ? ' on-open' : ''}`}>
        {subCategories.map((category, i) => {
          return (
            <li
              className={`category-list-menu-sub-link${
                parseInt(location.search.split('=')[1]) === indexUnit * 10 + i
                  ? ' is-active'
                  : ''
              }`}
              key={shortid.generate()}
            >
              <Link to={`/category?category_id=${indexUnit * 10 + i}`}>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryListMenu;
