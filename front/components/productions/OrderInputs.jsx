import React, { useCallback, useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import productionsSlice from '../../reducers/productionsSlice';

const OrderInputs = () => {
  const dispatch = useDispatch();
  const { productionOptions } = useSelector((state) => state.productions);

  const onChangeOptions = useCallback((e) => {
    // 선택한 옵션 추가
    const optionIndex = parseInt(e.currentTarget.value);
    if (optionIndex !== 0) {
      dispatch(
        productionsSlice.actions.plusSelectedOptionCount({
          optionIndex,
        })
      );
    }
    e.stopPropagation();
  }, []);

  return (
    <div className="order-inputs">
      <div className="select-group is-active">
        <select
          className="form-select"
          id="select-1"
          required
          onChange={onChangeOptions}
        >
          <option value={0}>선택</option>
          {productionOptions.map((option, id) => {
            return (
              <option key={shortid.generate()} value={id + 1}>
                {option}
              </option>
            );
          })}
        </select>
        <i className="ic-caret" aria-hidden></i>
      </div>
    </div>
  );
};

export default OrderInputs;
