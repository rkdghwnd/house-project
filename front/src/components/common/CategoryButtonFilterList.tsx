import { MouseEvent, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import PanelFilter from './PanelFilter';
import productSlice from '../../reducers/productSlice';
import PricePanelFilter from './PricePanelFilter';
import {
  getCategoryBrandList,
  getCategoryProducts,
} from '../../actions/product';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const CategoryButtonFilterList = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const categoryProductsFilter = useSelector(
    (state: RootState) => state.product.categoryProductsFilter
  );
  const ButtonFilterListRef = useRef<HTMLBaseElement>(null);
  const navigate = useNavigate();

  const queryObjects = location.search
    .slice(1)
    .split('&')
    .reduce((acc: { [key in string]: string }, cur) => {
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

  useEffect(() => {
    const closeFilter = (e: globalThis.MouseEvent) => {
      if (!ButtonFilterListRef.current!.contains(e.target as Node)) {
        dispatch(productSlice.actions.closePanelFilter({}));
      }
    };

    window.addEventListener('click', closeFilter);
    return () => {
      window.removeEventListener('click', closeFilter);
    };
  }, [ButtonFilterListRef]);

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
                  subFilter={button.subFilter || []}
                />
              )}
              {(button?.filterProperty === 'brand_name' ||
                button?.filterProperty === 'overseas_purchase') && (
                <PanelFilter
                  isSubFilterOn={button.isSubFilterOn}
                  subFilter={button?.subFilter || []}
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
