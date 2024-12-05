import { MouseEvent, useCallback } from 'react';
import shortid from 'shortid';
import useNumberInput from '../../hooks/useNumberInput';
import { useLocation, useNavigate } from 'react-router-dom';

const PricePanelFilter = ({
  isSubFilterOn,
  subFilter,
}: {
  isSubFilterOn: boolean;
  subFilter:
    | { filterProperty: string; isOn: boolean; content: string }[]
    | undefined;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialPrices = JSON.parse(
    subFilter?.find((el) => el.isOn)?.filterProperty || '[0,999999999999]'
  );

  const {
    value: minPrice,
    handler: onChangeMinPrice,
    setValue: setMinPrice,
  } = useNumberInput(initialPrices[0]);
  const {
    value: maxPrice,
    handler: onChangeMaxPrice,
    setValue: setMaxPrice,
  } = useNumberInput(initialPrices[1]);

  const onClickPriceRadio = useCallback((e: MouseEvent<HTMLInputElement>) => {
    const selectedPrice = JSON.parse(e.currentTarget.value);
    setMinPrice(selectedPrice[0]);
    setMaxPrice(selectedPrice[1]);
    e.stopPropagation();
  }, []);

  const onClickPriceButton = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const queryObjects = location.search
        .slice(1)
        .split('&')
        .reduce((acc: { [key in string]: string }, cur) => {
          const singleQuery = cur.split('=');
          acc[singleQuery[0]] = singleQuery[1];
          return acc;
        }, {});

      queryObjects.price = JSON.stringify([minPrice, maxPrice]);
      let query = '';
      for (const key in queryObjects) {
        query += `&${key}=${queryObjects[key]}`;
      }
      navigate(`${location.pathname}?${query.slice(1)}`);
      e.stopPropagation();
    },
    [location, minPrice, maxPrice]
  );

  return (
    <section className={`price-panel-filter${isSubFilterOn ? ' is-open' : ''}`}>
      <div className="price-range-filter">
        <input
          type="text"
          className="input-primary"
          onChange={onChangeMinPrice}
          value={minPrice}
          placeholder="0"
        />
        <span>&nbsp;원&nbsp;~&nbsp;</span>
        <input
          type="text"
          className="input-primary"
          onChange={onChangeMaxPrice}
          value={maxPrice}
          placeholder="999,999,999"
        />
        <span>&nbsp;원&nbsp;</span>
        <button className="btn-32" onClick={onClickPriceButton}>
          적용
        </button>
      </div>
      <ul className="price-panel-filter-buttons">
        {subFilter?.map((filter) => {
          return (
            <li key={shortid.generate()}>
              <input
                type="radio"
                name="price"
                value={filter.filterProperty}
                defaultChecked={
                  JSON.parse(filter.filterProperty)[0] === minPrice &&
                  JSON.parse(filter.filterProperty)[1] === maxPrice
                }
                onClick={onClickPriceRadio}
              />
              <span>{filter.content}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PricePanelFilter;
