import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import PanelFilter from './PanelFilter';
import productSlice from '../../reducers/productSlice';
import PricePanelFilter from './PricePanelFilter';
import {
  getCategoryBrandList,
  getCategoryProducts,
} from '../../actions/product';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryButtonFilterList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { categoryProductsFilter } = useSelector((state) => state.product);
  const ButtonFilterListRef = useRef(null);
  const navigate = useNavigate();

  const queryObjects = location.search
    .slice(1)
    .split('&')
    .reduce((acc, cur) => {
      const singleQuery = cur.split('=');
      acc[singleQuery[0]] = singleQuery[1];
      return acc;
    }, {});

  useEffect(() => {
    const categoryId = parseInt(queryObjects.category_id);
    dispatch(
      getCategoryBrandList({
        categoryId,
      })
    ).then((res) => {
      dispatch(
        productSlice.actions.updateCategoryFilter({
          locationSearch: location.search,
        })
      );
      dispatch(
        getCategoryProducts({
          query: `${location.search}&page=1`,
        })
      );
    });
  }, [location]);

  useEffect(() => {
    const closeFilter = (e) => {
      if (!ButtonFilterListRef.current.contains(e.target)) {
        dispatch(productSlice.actions.closePanelFilter());
      }
    };

    window.addEventListener('click', closeFilter);
    return () => {
      window.removeEventListener('click', closeFilter);
    };
  }, [ButtonFilterListRef]);

  const onClickFilter = useCallback(
    (e) => {
      const isSubFilter = JSON.parse(e.currentTarget.value)[0];
      const index = JSON.parse(e.currentTarget.value)[1];
      if (isSubFilter) {
        dispatch(
          productSlice.actions.togglePanelFilter({
            index,
          })
        );
      } else {
        let query = location.search;
        if (
          location.search.includes(categoryProductsFilter[index].filterProperty)
        ) {
          query = location.search.replace(
            `&${categoryProductsFilter[index].filterProperty}=true`,
            ''
          );
        } else {
          query += `&${categoryProductsFilter[index].filterProperty}=true`;
        }
        navigate(`/category${query}`);
      }

      e.stopPropagation();
    },
    [categoryProductsFilter, location]
  );

  return (
    <section className="button-filter-list" ref={ButtonFilterListRef}>
      <div className="button-filter-list-container">
        {categoryProductsFilter?.map((button, index) => {
          return (
            <div className="button-filter" key={shortid.generate()}>
              <button
                className={`btn-32 btn-outlined${
                  button.isOn ? ' is-active' : ''
                }`}
                onClick={onClickFilter}
                value={`[${button.isSubFilter},${index}]`}
              >
                {button?.isSubFilter || <i className="ic-check"></i>}
                {button?.content}
                {button?.isSubFilter && <i className="ic-chevron"></i>}
              </button>
              {button?.filterProperty === 'price' && (
                <PricePanelFilter
                  isSubFilterOn={button.isSubFilterOn}
                  subFilter={button.subFilter}
                />
              )}
              {(button?.filterProperty === 'brand_name' ||
                button?.filterProperty === 'overseas_purchase') && (
                <PanelFilter
                  isSubFilterOn={button.isSubFilterOn}
                  subFilter={button?.subFilter}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryButtonFilterList;
