import React, { forwardRef, LegacyRef } from 'react';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';
import { useSelector } from 'react-redux';
import { LOADING } from '../../datas/statusConstants';
import Spinner from '../../loading/Spinner';
import { RootState } from '../../reducers';
import { ProductType } from '../../types/stateTypes';

const ExhibitionsTagsItems = (
  { categoryExhibitions }: { categoryExhibitions: ProductType[] },
  ref: LegacyRef<HTMLBaseElement>
) => {
  const currentCategoryTag = useSelector(
    (state: RootState) => state.exhibitions.currentCategoryTag
  );
  const getCategoryExhibitionsStatus = useSelector(
    (state: RootState) => state.exhibitions.getCategoryExhibitionsStatus
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
