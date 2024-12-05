import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import ProductShow from '../components/productions/ProductShow';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductions } from '../actions/productions';
import { Helmet } from 'react-helmet-async';
import { RootState } from '../reducers';
import { useAppDispatch } from '../../reduxToolkitStore';

const Productions = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getProductions({ productId: parseInt(params.id || '') }));
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
