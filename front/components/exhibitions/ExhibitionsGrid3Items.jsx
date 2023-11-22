import React from 'react';
import StoreItem from '../home/StoreItem';
import shortid from 'shortid';

const ExhibitionsGrid3Items = ({ products }) => {
  return (
    <section className="exhibition-grid-3-items">
      {products?.map((product) => {
        return <StoreItem key={shortid.generate()} {...product} />;
      })}
    </section>
  );
};

export default ExhibitionsGrid3Items;
