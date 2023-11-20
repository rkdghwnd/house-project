import { useEffect, useMemo, useRef } from 'react';
import AppLayout from '../components/common/AppLayout';
import ExhibitionsLayout from '../components/exhibitions/ExhibitionsLayout';
import { useNavigate, useParams } from 'react-router-dom';
import RefurMarket from '../components/exhibitions/RefurMarket';
import FastDeliveryMarket from '../components/exhibitions/FastDeliveryMarket';
import SelfInteriorMarket from '../components/exhibitions/SelfInteriorMarket';

const Exhibitions = () => {
  const params = useParams();
  const productsRef = useRef();
  const navigate = useNavigate();
  const paramsIds = [1, 2, 3];

  useEffect(() => {
    if (!paramsIds.includes(parseInt(params.id))) {
      navigate('/');
    }
  }, [paramsIds, params]);

  const content = useMemo(() => {
    if (params.id === '1') {
      return <RefurMarket productsRef={productsRef} />;
    } else if (params.id === '2') {
      return <FastDeliveryMarket productsRef={productsRef} />;
    } else if (params.id === '3') {
      return <SelfInteriorMarket productsRef={productsRef} />;
    }
  }, [params.id]);

  return (
    <AppLayout>
      <ExhibitionsLayout productsRef={productsRef}>{content}</ExhibitionsLayout>
    </AppLayout>
  );
};

export default Exhibitions;
