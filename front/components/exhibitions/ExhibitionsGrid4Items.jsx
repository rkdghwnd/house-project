import React from 'react';
import StoreItem from '../home/StoreItem';
import shortid from 'shortid';

const ExhibitionsGrid4Items = ({ products }) => {
  return (
    <section className="exhibition-grid-4-items">
      {products?.map((product) => {
        return <StoreItem key={shortid.generate()} {...product} />;
      })}
    </section>
  );
};

export default ExhibitionsGrid4Items;
