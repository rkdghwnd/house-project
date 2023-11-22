import React from 'react';
import GnbLeft from './GnbLeft';
import GnbRight from './GnbRight';

const Gnb = () => {
  return (
    <div className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-wrapper">
              <GnbLeft />
              <GnbRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gnb;
