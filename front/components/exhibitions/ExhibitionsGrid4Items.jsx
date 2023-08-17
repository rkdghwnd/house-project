import React from 'react';
import StoreItem from '../home/StoreItem';

const ExhibitionsGrid4Items = () => {
  return (
    <section className="exhibition-grid-4-items">
      <div className="col">
        <StoreItem />
        <StoreItem />
      </div>
      <div className="col">
        <StoreItem />
        <StoreItem />
      </div>
    </section>
  );
};

export default ExhibitionsGrid4Items;
