import { useSelector } from 'react-redux';
import shortid from 'shortid';
import ToggleFilter from './ToggleFilter';
import RadioButtonFilter from './RadioButtonFilter';
import { RootState } from '../../reducers';

const FilterModal = () => {
  const filterModalVisible = useSelector(
    (state: RootState) => state.modal.filterModalVisible
  );
  const modalFilters = useSelector(
    (state: RootState) => state.product.modalFilters
  );

  return (
    <article
      className={`filter-modal ${filterModalVisible ? 'is-active' : ''}`}
    >
      <div className="filter-modal-header">
        <span>{modalFilters.title}</span>
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
