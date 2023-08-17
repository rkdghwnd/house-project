import React from 'react';
import PremiumCategory from '../components/premium/PremiumCategory';
import WeeklyPromotion from '../components/premium/WeeklyPromotion';
import PopularProducts from '../components/home/PopularProducts';

const PremiumCategoryMain = () => {
  return (
    <>
      <PremiumCategory />
      <div className="product-section-divider" aria-hidden></div>
      <WeeklyPromotion />
      <div className="product-section-divider" aria-hidden></div>
      <PopularProducts />
    </>
  );
};

export default PremiumCategoryMain;
