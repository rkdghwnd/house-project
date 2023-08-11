import React from 'react';
import StoreItem from '../store/StoreItem';

const ExhibitionsGrid3Items = () => {
  return (
    <section className="exhibition-grid-3-items">
      <div className="col">
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </div>
      <div className="col">
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </div>
    </section>
  );
};

export default ExhibitionsGrid3Items;
