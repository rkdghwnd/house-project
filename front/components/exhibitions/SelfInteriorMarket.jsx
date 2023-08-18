import React from 'react';
import ExhibitionsGrid4Items from './ExhibitionsGrid4Items';
import ExhibitionsTags from './ExhibitionsTags';
import { selfInteriorTags } from '../../hooks/exhibitions';
import ExhibitionsTagsItems from './ExhibitionsTagsItems';

const SelfInteriorMarket = ({ productsRef }) => {
  return (
    <div className="self-interior-market">
      <img src="/assets/images/selfinterior/self_interior_banner.webp" />
      <img src="/assets/images/selfinterior/self_interior_1.webp" />
      <img src="/assets/images/selfinterior/self_interior_2.avif" />
      <ExhibitionsGrid4Items />
      <img src="/assets/images/selfinterior/self_interior_3.avif" />
      <ExhibitionsTags tags={selfInteriorTags} />
      <ExhibitionsTagsItems ref={productsRef} />
    </div>
  );
};

export default SelfInteriorMarket;
