import React, { useCallback, useEffect, useRef } from 'react';
import {
  fastDeliveryImageTag1,
  fastDeliveryImageTag2,
  fastDeliveryTags,
} from '../../datas/exhibitions';
import ExhibitionsTags from './ExhibitionsTags';
import { TOP_HEADER_DESKTOP, TOP_HEADER_MOBILE } from '../../datas/constant';
import ExhibitionsTagsItems from './ExhibitionsTagsItems';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryExhibitions } from '../../actions/exhibitions';
import { useParams } from 'react-router-dom/dist';
import exhibitionsSlice from '../../reducers/exhibitionsSlice';
import shortid from 'shortid';
import { Helmet } from 'react-helmet-async';

const FastDeliveryMarket = ({ productsRef }) => {
  const dispatch = useDispatch();
  const exhibitionsTagsRef = useRef();
  const params = useParams();
  const { categoryExhibitions } = useSelector((state) => state.exhibitions);

  const moveToTags = useCallback(
    (categoryId, tagName) => () => {
      // 카테고리 위치로 이동
      const top =
        exhibitionsTagsRef.current.getBoundingClientRect().top -
        (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);
      window.scrollBy({ top });
      // 비동기로 받아오기
      dispatch(
        getCategoryExhibitions({
          exhibitionsId: params.id,
          categoryId,
        })
      );
      dispatch(exhibitionsSlice.actions.updateCategoryTag({ tag: tagName }));
    },
    [exhibitionsTagsRef, params]
  );

  useEffect(() => {
    dispatch(
      getCategoryExhibitions({
        exhibitionsId: params.id,
        categoryId: -1,
      })
    );
  }, [params.id]);

  return (
    <>
      <Helmet>
        <title>내일의집 - 빠른배송</title>
      </Helmet>
      <div className="fast-delivery-market">
        <img
          src="/assets/images/fastdelivery/delivery_banner.avif"
          alt="무료배송 배너"
        />
        <img
          src="/assets/images/fastdelivery/delivery_image_1.avif"
          alt="무료배송 이미지1"
        />
        <img
          src="/assets/images/fastdelivery/delivery_image_2.avif"
          alt="무료배송 이미지2"
        />
        <img
          src="/assets/images/fastdelivery/delivery_image_3.avif"
          alt="무료배송 이미지3"
        />
        <div className="fast-delivery-market-category">
          <div className="fast-delivery-market-category-row">
            {fastDeliveryImageTag1.map(({ src, alt, id, title }) => {
              return (
                <div className="image-tag" key={shortid.generate()}>
                  <img src={src} alt={alt} />
                  <a onClick={moveToTags(id, title)}></a>
                </div>
              );
            })}
          </div>
          <div className="fast-delivery-market-category-row">
            {fastDeliveryImageTag2.map(({ src, alt, id, title }) => {
              return (
                <div className="image-tag" key={shortid.generate()}>
                  <img src={src} alt={alt} />
                  <a onClick={moveToTags(id, title)}></a>
                </div>
              );
            })}
          </div>
        </div>
        <ExhibitionsTags tags={fastDeliveryTags} ref={exhibitionsTagsRef} />
        <ExhibitionsTagsItems
          ref={productsRef}
          categoryExhibitions={categoryExhibitions}
        />
      </div>
    </>
  );
};

export default FastDeliveryMarket;
