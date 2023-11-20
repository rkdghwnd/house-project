import React, { forwardRef } from 'react';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';
import { useSelector } from 'react-redux';

const ExhibitionsTagsItems = ({ categoryExhibitions }, ref) => {
  const { currentCategoryTag } = useSelector((state) => state.exhibitions);
  return (
    <section className="exhibitions-tags-items" ref={ref}>
      <div className="exhibitions-tags-items-title-box">
        <span>{currentCategoryTag}</span>
      </div>
      <ExhibitionsGrid3Items products={categoryExhibitions} />
    </section>
  );
};

export default forwardRef(ExhibitionsTagsItems);
