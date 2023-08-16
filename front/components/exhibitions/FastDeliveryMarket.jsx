import React, { useCallback, useRef } from 'react';
import { fastDeliveryTags } from '../../hooks/exhibitions';
import ExhibitionsTags from './ExhibitionsTags';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';
import { TOP_HEADER_DESKTOP, TOP_HEADER_MOBILE } from '../../hooks/constant';

const FastDeliveryMarket = () => {
  const exhibitionstags = useRef();
  const moveToTags = useCallback(() => {
    // 카테고리 위치로 이동
    const top =
      exhibitionstags.current.getBoundingClientRect().top -
      (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);
    window.scrollBy({ top });
    // 비동기로 받아오기(보류)
  }, [exhibitionstags]);

  return (
    <div className="fast-delivery-market">
      <img src="/assets/images/fastdelivery/delivery_banner.avif" />
      <img src="/assets/images/fastdelivery/delivery_image_1.avif" />
      <img src="/assets/images/fastdelivery/delivery_image_2.avif" />
      <img src="/assets/images/fastdelivery/delivery_image_3.avif" />
      <div className="fast-delivery-market-category">
        <div className="fast-delivery-market-category-row">
          <img
            src="/assets/images/fastdelivery/category1.avif"
            alt="bad/mattress"
          />
          <img src="/assets/images/fastdelivery/category2.avif" alt="sofa" />
          <img
            src="/assets/images/fastdelivery/category3.avif"
            alt="storage furniture"
          />
          <img
            src="/assets/images/fastdelivery/category4.avif"
            alt="home office"
          />
          <a href="javascript:;" onClick={moveToTags}></a>
          <a href="javascript:;" onClick={moveToTags}></a>
          <a href="javascript:;" onClick={moveToTags}></a>
          <a href="javascript:;" onClick={moveToTags}></a>
        </div>
        <div className="fast-delivery-market-category-row">
          <img src="/assets/images/fastdelivery/category5.avif" alt="table" />
          <img
            src="/assets/images/fastdelivery/category6.avif"
            alt="dressroom"
          />
          <img
            src="/assets/images/fastdelivery/category7.avif"
            alt="overseas brand"
          />
          <img
            src="/assets/images/fastdelivery/category8.avif"
            alt="home appliances"
          />
          <a href="javascript:;" onClick={moveToTags}></a>
          <a href="javascript:;" onClick={moveToTags}></a>
          <a href="javascript:;" onClick={moveToTags}></a>
          <a href="javascript:;" onClick={moveToTags}></a>
        </div>
      </div>
      <ExhibitionsTags tags={fastDeliveryTags} ref={exhibitionstags} />
      <ExhibitionsGrid3Items />
    </div>
  );
};

export default FastDeliveryMarket;
