import { MouseEvent, useCallback, useRef } from 'react';
import Toggle from './Toggle';
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../reducers/productSlice';
import { thunkArray } from '../../datas/filter';
import { makeQuery } from '../../hooks/query';
import { RootState } from '../../reducers';

const ToggleFilter = ({
  filter,
}: {
  filter: {
    content: string;
    button: string;
    filterProperty: string;
    isOn: boolean;
  };
}) => {
  const dispatch = useDispatch();

  const toggleRef = useRef<HTMLButtonElement>(null);
  const modalFilters = useSelector(
    (state: RootState) => state.product.modalFilters
  );

  const onToggle = (checked: boolean) => {
    // await new Promise((r) => setTimeout(r, 300));

    const newfilterList = modalFilters.filterList.map((el) => {
      const newFilterObject = { ...el };
      if (newFilterObject.filterProperty === filter.filterProperty) {
        newFilterObject.isOn = checked;
      }
      return newFilterObject;
    });

    dispatch(
      (productSlice.actions as any)[modalFilters.filterActionName]({
        productsFilter: newfilterList,
        productsSortFilter: modalFilters.productsSortFilter,
      })
    );

    dispatch(
      productSlice.actions.updateModalFilter({
        title: modalFilters.title,
        filterList: newfilterList,
        thunkName: modalFilters.thunkName,
        filterActionName: modalFilters.filterActionName,
        productsFilter: newfilterList,
        productsSortFilter: modalFilters.productsSortFilter,
      })
    );

    const query = makeQuery(1, newfilterList, modalFilters.productsSortFilter);

    dispatch(
      thunkArray[modalFilters.thunkName]({
        query,
      })
    );
  };

  const onClickList = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      if (!toggleRef.current) {
        return;
      }
      if (!toggleRef.current.contains(e.target as Node)) {
        toggleRef.current.click();
      }
    },
    [toggleRef]
  );

  return (
    <li onClick={onClickList}>
      <span>{filter.content}</span>
      <Toggle
        ref={toggleRef}
        onToggle={onToggle}
        defaultChecked={filter.isOn}
      />
    </li>
  );
};

export default ToggleFilter;
