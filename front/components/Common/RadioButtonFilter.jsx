import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../reducers/productSlice';
import { thunkArray } from '../../datas/filter';
import { makeQuery } from '../../hooks/query';
import { useLocation, useNavigate } from 'react-router-dom';

const RadioButtonFilter = ({ filter }) => {
  const dispatch = useDispatch();
  const radioButtonRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const { modalFilters } = useSelector((state) => state.product);

  const onClickList = useCallback(
    (e) => {
      if (!radioButtonRef.current.contains(e.target)) {
        radioButtonRef.current.click();
      }
    },
    [radioButtonRef]
  );

  const onClickRadioButtons = useCallback(() => {
    const newSortfilterList = modalFilters.filterList.map((el) => {
      const newFilterObject = { ...el };
      newFilterObject.isOn =
        newFilterObject.filterProperty === filter.filterProperty;
      return newFilterObject;
    });

    if (location.pathname === '/') {
      dispatch(
        productSlice.actions[modalFilters.filterActionName]({
          productsFilter: modalFilters.productsFilter,
          productsSortFilter: newSortfilterList,
        })
      );
    }

    dispatch(
      productSlice.actions.updateModalFilter({
        title: modalFilters.title,
        filterList: newSortfilterList,
        thunkName: modalFilters.thunkName,
        filterActionName: modalFilters.filterActionName,
        productsFilter: modalFilters.productsFilter,
        productsSortFilter: newSortfilterList,
      })
    );

    if (location.pathname === '/') {
      const query = makeQuery(
        1,
        modalFilters.productsFilter,
        newSortfilterList
      );

      dispatch(
        thunkArray[modalFilters.thunkName]({
          query,
        })
      );
    } else {
      const queryObjects = location.search
        .slice(1)
        .split('&')
        .reduce((acc, cur) => {
          const singleQuery = cur.split('=');
          acc[singleQuery[0]] = singleQuery[1];
          return acc;
        }, {});
      queryObjects.order = filter.filterProperty;

      const queryArray = Object.entries(queryObjects);
      const query = queryArray
        .reduce((acc, cur) => {
          return acc + `&${cur[0]}=${cur[1]}`;
        }, '')
        .slice(1);

      navigate(`${location.pathname}?${query}`);
    }
  }, [modalFilters, location]);

  return (
    <li
      onClick={onClickList}
      className={`radio-button-filter${filter.isOn ? ' is-active' : ''}`}
    >
      <span>{filter.content}</span>
      <div className="radio-button">
        <input
          type="radio"
          value={filter.content}
          name="radiofilter"
          ref={radioButtonRef}
          defaultChecked={filter.isOn}
          onClick={onClickRadioButtons}
        ></input>
      </div>
    </li>
  );
};

export default RadioButtonFilter;
