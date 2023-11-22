import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import ProductShow from '../components/productions/ProductShow';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductions } from '../actions/productions';

const Productions = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getProductions({ productId: params.id }));
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <AppLayout>
      <ProductShow />
    </AppLayout>
  );
};

export default Productions;
