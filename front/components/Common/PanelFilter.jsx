import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import productSlice from '../../reducers/productSlice';
import { getCategoryProducts } from '../../actions/product';
import { makeQuery } from '../../hooks/query';
import { useLocation, useNavigate } from 'react-router-dom';
import sideBarMenuSlice from '../../reducers/sideBarMenuSlice';

const PanelFilter = ({ isSubFilterOn, subFilter }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const panelRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const { panelScrollTop } = useSelector((state) => state.sideBarMenu);

  useEffect(() => {
    panelRef.current.scrollTop = panelScrollTop;
  }, [panelRef, panelScrollTop]);

  useEffect(() => {
    const scrollSave = (e) => {
      setScroll(panelRef.current.scrollTop);
    };
    if (panelRef) {
      panelRef.current?.addEventListener('scroll', scrollSave);
      return () => {
        panelRef.current?.removeEventListener('scroll', scrollSave);
      };
    }
  }, [panelRef, scroll]);

  const onClickFilter = useCallback(
    (e) => {
      const queryObjects = location.search
        .slice(1)
        .split('&')
        .reduce((acc, cur) => {
          const singleQuery = cur.split('=');
          acc[singleQuery[0]] = singleQuery[1];
          return acc;
        }, {});

      const [filterProperty, filterValue] = e.currentTarget.value.split(',');
      console.log(filterProperty);
      if (queryObjects[filterProperty]) {
        const prevValue = JSON.parse(
          decodeURIComponent(queryObjects[filterProperty])
        );

        // 기존에 존재하면 빼고 아니면 추가
        if (prevValue.includes(filterValue)) {
          prevValue.splice(prevValue.indexOf(filterValue), 1);
        } else {
          prevValue.push(filterValue);
        }
        queryObjects[filterProperty] = JSON.stringify(prevValue);
      } else {
        queryObjects[filterProperty] = JSON.stringify([filterValue]);
      }

      let newQuery = '';
      for (const key in queryObjects) {
        newQuery += `&${key}=${queryObjects[key]}`;
      }

      dispatch(
        sideBarMenuSlice.actions.updatePanelScrollTop({
          scrollTop: scroll,
        })
      );
      navigate(`${location.pathname}?${newQuery.slice(1)}`);
      e.stopPropagation();
    },
    [location, scroll]
  );

  return (
    <div
      className={`panel-filter${isSubFilterOn ? ' is-open' : ''}`}
      ref={panelRef}
    >
      <ul className="filter-list">
        {subFilter?.map(({ content, isOn, filterProperty }) => {
          return (
            <li key={shortid.generate()}>
              <input
                type="checkbox"
                defaultChecked={isOn}
                value={[filterProperty, content]}
                onClick={onClickFilter}
              />
              <span>{content}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PanelFilter;
