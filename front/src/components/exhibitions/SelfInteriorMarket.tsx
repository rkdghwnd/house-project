import React, { LegacyRef, Ref, RefObject, useEffect } from 'react';
import ExhibitionsGrid4Items from './ExhibitionsGrid4Items';
import ExhibitionsTags from './ExhibitionsTags';
import { selfInteriorTags } from '../../datas/exhibitions';
import ExhibitionsTagsItems from './ExhibitionsTagsItems';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryExhibitions,
  getExhibitions,
} from '../../actions/exhibitions';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const SelfInteriorMarket = ({
  productsRef,
}: {
  productsRef: RefObject<HTMLBaseElement>;
}) => {
  const dispatch = useAppDispatch();
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
        <title>내일의집 - 셀프인테리어</title>
      </Helmet>
      <div className="self-interior-market">
        <img
          src="/assets/images/selfinterior/self_interior_banner.webp"
          alt="셀프인테리어 배너"
        />
        <img
          src="/assets/images/selfinterior/self_interior_1.webp"
          alt="셀프인테리어 이미지1"
        />
        <img
          src="/assets/images/selfinterior/self_interior_2.avif"
          alt="셀프인테리어 이미지2"
        />
        <ExhibitionsGrid4Items products={exhibitions.selfInterior} />
        <img
          src="/assets/images/selfinterior/self_interior_3.avif"
          alt="셀프인테리어 이미지3"
        />
        <ExhibitionsTags tags={selfInteriorTags} />
        <ExhibitionsTagsItems
          ref={productsRef}
          categoryExhibitions={categoryExhibitions}
        />
      </div>
    </>
  );
};

export default SelfInteriorMarket;
