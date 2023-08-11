import React from 'react';
import AppLayout from '../components/Common/AppLayout';
import ExhibitionsMenu from '../components/exhibitions/exhibitionsMenu';
import ExhibitionsGrid4Items from '../components/exhibitions/ExhibitionsGrid4Items';
import ExhibitionsGrid3Items from '../components/exhibitions/ExhibitionsGrid3Items';
import ExhibitionsLayout from '../components/exhibitions/ExhibitionsLayout';
import ExhibitionsTags from '../components/exhibitions/ExhibitionsTags';
import ExhibitionsTagsItems from '../components/exhibitions/ExhibitionsTagsItems';

const refurTags = [
  '전체',
  '추천',
  '거실/침실가구',
  '가전',
  'PC/휴대폰',
  '주방/서재가구',
  '쿡웨어/키친툴',
  '테이블웨어/잡화',
  '패브릭',
  '캠핑/레저/반려',
  '유아동/생필품',
  '프리미엄',
];

const refur_market = () => {
  return (
    <AppLayout>
      <ExhibitionsLayout>
        <img src="/assets/images/refur/refur_market_banner.gif" />
        <ExhibitionsMenu imagePath={'assets/images/refur/menu-popular.avif'} />
        <img src="/assets/images/refur/refur_market_1.avif" />
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
        <ExhibitionsMenu imagePath={'/assets/images/refur/menu-brand.avif'} />
        <img src="/assets/images/refur/refur_market_5.avif" />
        <ExhibitionsGrid3Items />
        <ExhibitionsMenu
          imagePath={'/assets/images/refur/menu-category.avif'}
        />
        <img src="/assets/images/refur/refur_market_6.avif" />
        <ExhibitionsTags tags={refurTags} />
        <ExhibitionsTagsItems />
      </ExhibitionsLayout>
    </AppLayout>
  );
};

export default refur_market;
