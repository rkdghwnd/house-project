import React, {
  Ref,
  RefObject,
  useDebugValue,
  useEffect,
  useRef,
  useState,
} from 'react';
import ExhibitionsGrid4Items from './ExhibitionsGrid4Items';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';
import ExhibitionsTagsItems from './ExhibitionsTagsItems';
import { refurTags } from '../../datas/exhibitions';
import ExhibitionsTags from './ExhibitionsTags';
import RefurMenu from './RefurMenu';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryExhibitions,
  getExhibitions,
} from '../../actions/exhibitions';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const RefurMarket = ({
  productsRef,
}: {
  productsRef: RefObject<HTMLBaseElement>;
}) => {
  const dispatch = useAppDispatch();
  const popularProductTab = useRef<HTMLImageElement>(null);
  const brandProductTab = useRef<HTMLImageElement>(null);
  const catagoryProductTab = useRef<HTMLImageElement>(null);
  const params = useParams();

  const exhibitions = useSelector(
    (state: RootState) => state.exhibitions.exhibitions
  );
  const categoryExhibitions = useSelector(
    (state: RootState) => state.exhibitions.categoryExhibitions
  );

  useEffect(() => {
    dispatch(
      getExhibitions({
        exhibitionsId: params.id || '',
      })
    );

    dispatch(
      getCategoryExhibitions({
        exhibitionsId: params.id || '',
        categoryId: -1,
      })
    );
  }, [params.id]);

  return (
    <>
      <Helmet>
        <title>내일의집 - 리퍼마켓</title>
      </Helmet>
      <img
        src="/assets/images/refur/refur_market_banner.gif"
        alt="리퍼마켓 배너"
      />
      <RefurMenu
        imagePath="/assets/images/refur/menu-popular.avif"
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img
        src="/assets/images/refur/refur_market_1.avif"
        ref={popularProductTab}
        alt="리퍼마켓 이미지1"
      />
      <ExhibitionsGrid4Items products={exhibitions.popular?.digital} />
      <img
        src="/assets/images/refur/refur_market_2.avif"
        alt="리퍼마켓 이미지2"
      />
      <ExhibitionsGrid4Items products={exhibitions.popular?.digital} />
      <img
        src="/assets/images/refur/refur_market_3.avif"
        alt="리퍼마켓 이미지3"
      />
      <ExhibitionsGrid4Items products={exhibitions.popular?.digital} />
      <img
        src="/assets/images/refur/refur_market_4.avif"
        alt="리퍼마켓 이미지4"
      />
      <ExhibitionsGrid4Items products={exhibitions.popular?.digital} />
      <div className="more-product-button">
        <img
          src="/assets/images/refur/refur_market_more.avif"
          alt="리퍼마켓 이미지5"
        />
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
        alt="리퍼마켓 이미지6"
      />
      <ExhibitionsGrid3Items products={exhibitions?.season} />
      <RefurMenu
        imagePath="/assets/images/refur/menu-category.avif"
        popularProductTab={popularProductTab}
        brandProductTab={brandProductTab}
        catagoryProductTab={catagoryProductTab}
      />
      <img
        src="/assets/images/refur/refur_market_6.avif"
        ref={catagoryProductTab}
        alt="리퍼마켓 이미지7"
      />
      <ExhibitionsTags tags={refurTags} />
      <ExhibitionsTagsItems
        ref={productsRef}
        categoryExhibitions={categoryExhibitions}
      />
    </>
  );
};

export default RefurMarket;
