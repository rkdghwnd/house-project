import React, { useRef } from 'react';
import ExhibitionsGrid4Items from './ExhibitionsGrid4Items';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';
import ExhibitionsTagsItems from './ExhibitionsTagsItems';
import { refurTags } from '../../hooks/exhibitions';
import ExhibitionsTags from './ExhibitionsTags';
import RefurMenu from './RefurMenu';

const RefurMarket = ({ productsRef }) => {
  const popularProductTab = useRef();
  const brandProductTab = useRef();
  const catagoryProductTab = useRef();

  return (
    <>
      <img src="/assets/images/refur/refur_market_banner.gif" />
      <RefurMenu
        imagePath="/assets/images/refur/menu-popular.avif"
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img
        src="/assets/images/refur/refur_market_1.avif"
        ref={popularProductTab}
      />
      <ExhibitionsGrid4Items />
      <img src="/assets/images/refur/refur_market_2.avif" />
      <ExhibitionsGrid4Items />
      <img src="/assets/images/refur/refur_market_3.avif" />
      <ExhibitionsGrid4Items />
      <img src="/assets/images/refur/refur_market_4.avif" />
      <ExhibitionsGrid4Items /> {/* 아이템 2개만 */}
      <div className="more-product-button">
        <img src="/assets/images/refur/refur_market_more.avif" />
        <a href="javscript:;"></a>
      </div>
      <RefurMenu
        imagePath="/assets/images/refur/menu-brand.avif"
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img
        src="/assets/images/refur/refur_market_5.avif"
        ref={brandProductTab}
      />
      <ExhibitionsGrid3Items />
      <RefurMenu
        imagePath="/assets/images/refur/menu-category.avif"
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img
        src="/assets/images/refur/refur_market_6.avif"
        ref={catagoryProductTab}
      />
      <ExhibitionsTags tags={refurTags} />
      <ExhibitionsTagsItems ref={productsRef} />
    </>
  );
};

export default RefurMarket;
