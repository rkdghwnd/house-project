import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import ToggleFilter from './ToggleFilter';
import RadioButtonFilter from './RadioButtonFilter';
import { Radio } from 'antd';

const FilterModal = () => {
  const { filterModalVisible } = useSelector((state) => state.modal);
  const { modalFilters } = useSelector((state) => state.product);

  return (
    <article
      className={`filter-modal ${filterModalVisible ? 'is-active' : ''}`}
    >
      <div className="filter-modal-header">
        <h4>{modalFilters.title}</h4>
      </div>

      <ul>
        {modalFilters.filterList.map((filter) =>
          filter.button === 'toggle' ? (
            <ToggleFilter key={shortid.generate()} filter={filter} />
          ) : (
            <RadioButtonFilter key={shortid.generate()} filter={filter} />
          )
        )}
      </ul>
    </article>
  );
};

export default FilterModal;
