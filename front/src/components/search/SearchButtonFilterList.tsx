import React, { MouseEvent, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import productSlice from '../../reducers/productSlice';
import shortid from 'shortid';
import PricePanelFilter from '../common/PricePanelFilter';
import PanelFilter from '../common/PanelFilter';
import { getSearchBrandList, getSearchProducts } from '../../actions/product';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const SearchButtonFilterList = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchProductsFilter = useSelector(
    (state: RootState) => state.product.searchProductsFilter
  );
  const searchProductsSortFilter = useSelector(
    (state: RootState) => state.product.searchProductsSortFilter
  );
  const ButtonFilterListRef = useRef<HTMLBaseElement>(null);

  const queryObjects: { [key in string]: string } = location.search
    .slice(1)
    .split('&')
    .reduce((acc: { [key in string]: string }, cur) => {
      const singleQuery = cur.split('=');
      acc[singleQuery[0]] = singleQuery[1];
      return acc;
    }, {});

  useEffect(() => {
    dispatch(
      getSearchBrandList({
        query: `?keyword=${queryObjects.keyword}`,
      })
    ).then((res) => {
      dispatch(
        productSlice.actions.updateSearchFilter({
          locationSearch: location.search,
        })
      );
      dispatch(
        getSearchProducts({
          query: `${location.search}&page=1`,
        })
      );
    });
  }, [location]);

  useEffect(() => {
    const closeFilter = (e: Event) => {
      if (!ButtonFilterListRef.current) {
        return;
      }
      if (!ButtonFilterListRef.current.contains(e.target as Node)) {
        dispatch(productSlice.actions.closePanelFilter({}));
      }
    };

    window.addEventListener('click', closeFilter);

    return () => {
      window.removeEventListener('click', closeFilter);
    };
  }, [ButtonFilterListRef]);

  const onClickFilter = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
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
          location.search.includes(searchProductsFilter[index].filterProperty)
        ) {
          query = location.search.replace(
            `&${searchProductsFilter[index].filterProperty}=true`,
            ''
          );
        } else {
          query += `&${searchProductsFilter[index].filterProperty}=true`;
        }
        navigate(`${location.pathname}${query}`);
        dispatch(
          getSearchProducts({
            query: query + '&page=1',
          })
        );
      }
      e.stopPropagation();
    },
    [productSlice, searchProductsFilter, searchProductsSortFilter, location]
  );

  return (
    <section className="button-filter-list" ref={ButtonFilterListRef}>
      <div className="button-filter-list-container">
        {searchProductsFilter.map((button, index: number) => {
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
                {button.content}
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

export default SearchButtonFilterList;
