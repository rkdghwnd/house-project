import React, { useRef } from 'react';
import ExhibitionsGrid4Items from './ExhibitionsGrid4Items';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';
import ExhibitionsTagsItems from './ExhibitionsTagsItems';
import { refurMarketImages, refurTags } from '../../hooks/exhibitions';
import ExhibitionsTags from './ExhibitionsTags';
import RefurMenu from './RefurMenu';

const RefurMarket = () => {
  const popularProductTab = useRef();
  const brandProductTab = useRef();
  const catagoryProductTab = useRef();

  return (
    <>
      <img src={refurMarketImages[0]} />
      <RefurMenu
        imagePath={refurMarketImages[1]}
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img src={refurMarketImages[2]} ref={popularProductTab} />
      <ExhibitionsGrid4Items />
      <img src={refurMarketImages[3]} />
      <ExhibitionsGrid4Items />
      <img src={refurMarketImages[4]} />
      <ExhibitionsGrid4Items />
      <img src={refurMarketImages[5]} />
      <ExhibitionsGrid4Items /> {/* 아이템 2개만 */}
      <div className="more-product-button">
        <img src={refurMarketImages[6]} />
        <a href="javscript:;"></a>
      </div>
      <RefurMenu
        imagePath={refurMarketImages[7]}
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img src={refurMarketImages[8]} ref={brandProductTab} />
      <ExhibitionsGrid3Items />
      <RefurMenu
        imagePath={refurMarketImages[9]}
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img src={refurMarketImages[10]} ref={catagoryProductTab} />
      <ExhibitionsTags tags={refurTags} />
      <ExhibitionsTagsItems />
    </>
  );
};

export default RefurMarket;
