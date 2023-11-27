import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import ProductShow from '../components/productions/ProductShow';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductions } from '../actions/productions';
import { Helmet } from 'react-helmet-async';

const Productions = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { productions } = useSelector((state) => state.productions);

  useEffect(() => {
    dispatch(getProductions({ productId: params.id }));
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <>
      <Helmet>
        <title>내일의집 - 제품 상세 페이지</title>
      </Helmet>
      <AppLayout>
        <ProductShow />
      </AppLayout>
    </>
  );
};

export default Productions;
