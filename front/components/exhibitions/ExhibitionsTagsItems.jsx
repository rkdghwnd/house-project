import React, { forwardRef } from 'react';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';
import { useSelector } from 'react-redux';
import { LOADING } from '../../datas/statusConstants';
import Spinner from '../../loading/spinner';

const ExhibitionsTagsItems = ({ categoryExhibitions }, ref) => {
  const { currentCategoryTag, getCategoryExhibitionsStatus } = useSelector(
    (state) => state.exhibitions
  );
  return (
    <section className="exhibitions-tags-items" ref={ref}>
      <div className="exhibitions-tags-items-title-box">
        <span>{currentCategoryTag}</span>
      </div>
      {getCategoryExhibitionsStatus === LOADING ? (
        <Spinner fontSize={24} />
      ) : (
        <ExhibitionsGrid3Items products={categoryExhibitions} />
      )}
    </section>
  );
};

export default forwardRef(ExhibitionsTagsItems);
