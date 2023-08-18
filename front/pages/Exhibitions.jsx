import { useMemo } from 'react';
import AppLayout from '../components/common/AppLayout';
import ExhibitionsLayout from '../components/exhibitions/ExhibitionsLayout';
import { useParams } from 'react-router-dom';
import RefurMarket from '../components/exhibitions/RefurMarket';
import FastDeliveryMarket from '../components/exhibitions/FastDeliveryMarket';

const Exhibitions = () => {
  const params = useParams();

  const content = useMemo(() => {
    if (params.id === '1') {
      return <RefurMarket />;
    } else if (params.id === '2') {
      return <FastDeliveryMarket />;
    }
  }, [params.id]);

  return (
    <AppLayout>
      <ExhibitionsLayout>{content}</ExhibitionsLayout>
    </AppLayout>
  );
};

export default Exhibitions;
