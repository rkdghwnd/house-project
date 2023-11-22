import React from 'react';
import PremiumBrandBox from '../components/premium/PremiumBrandBox';
import { PremiumBrandBoxes } from '../datas/premium';
import shortid from 'shortid';

const PremiumBrand = () => {
  return (
    <main className="premium-brand">
      {PremiumBrandBoxes.map((box) => (
        <PremiumBrandBox key={shortid.generate()} {...box} />
      ))}
    </main>
  );
};

export default PremiumBrand;
