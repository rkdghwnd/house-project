import React, { useEffect } from 'react';
import ExhibitionsGrid4Items from './ExhibitionsGrid4Items';
import ExhibitionsTags from './ExhibitionsTags';
import { selfInteriorTags } from '../../hooks/exhibitions';
import ExhibitionsTagsItems from './ExhibitionsTagsItems';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryExhibitions,
  getExhibitions,
} from '../../actions/exhibitions';
import { useParams } from 'react-router-dom';

const SelfInteriorMarket = ({ productsRef }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { exhibitions, categoryExhibitions } = useSelector(
    (state) => state.exhibitions
  );

  useEffect(() => {
    dispatch(
      getExhibitions({
        exhibitionsId: params.id,
      })
    );

    dispatch(
      getCategoryExhibitions({
        exhibitionsId: params.id,
        categoryId: -1,
      })
    );
  }, [params.id]);

  return (
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
  );
};

export default SelfInteriorMarket;
