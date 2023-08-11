import React from 'react';
import { storeMenus1, storeMenus2 } from '../../hooks/storeMenus';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

const StoreMenu = () => {
  return (
    <section className="store-menu">
      <div className="store-menu-row-1">
        {storeMenus1.map((menu) => {
          return (
            <Link to={menu.href} key={shortid.generate()}>
              <div className="store-menu-item">
                <img src={menu.src} loading="lazy" />
                <span>{menu.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="store-menu-row-2">
        {storeMenus2.map((menu) => {
          return (
            <Link to={menu.href} key={shortid.generate()}>
              <div className="store-menu-item">
                <img src={menu.src} loading="lazy" />
                <span>{menu.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default StoreMenu;
