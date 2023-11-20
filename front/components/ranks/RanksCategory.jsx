import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { categoryListDatas } from '../../datas/category';

const RanksCategory = () => {
  const location = useLocation();
  const isSelected = useCallback(
    (indexUnit) => {
      return parseInt(location.search.split('category_id=')[1]) ===
        indexUnit * 10
        ? ' is-active'
        : '';
    },
    [location]
  );

  return (
    <ul className="ranks-category">
      {categoryListDatas.map(({ indexUnit, title }) => {
        return (
          <li
            key={shortid.generate()}
            className={`ranks-category-link${isSelected(indexUnit)}`}
          >
            <Link
              className={'category-navlink'}
              to={`${
                location.pathname + location.search.split('&category_id=')[0]
              }&category_id=${indexUnit * 10}`}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RanksCategory;
