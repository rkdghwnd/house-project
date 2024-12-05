import React from 'react';
import StoreItem from '../home/StoreItem';
import shortid from 'shortid';
import { ProductType } from '../../types/stateTypes';

const ExhibitionsGrid4Items = ({ products }: { products: ProductType[] }) => {
  return (
    <section className="exhibition-grid-4-items">
      {products?.map((product) => {
        return <StoreItem key={shortid.generate()} {...product} />;
      })}
    </section>
  );
};

export default ExhibitionsGrid4Items;
