import React from 'react';
import Spinner from '../../loading/spinner';
import { LOADING } from '../../datas/statusConstants';

const Loading = ({ loadProductsStatus }) => {
  return (
    <div className="loading">
      {loadProductsStatus === LOADING && <Spinner fontSize={24} />}
    </div>
  );
};

export default Loading;
