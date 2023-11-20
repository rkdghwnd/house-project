import React, { useEffect } from 'react';
import HotdealStoreItem from '../common/HotdealStoreItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreHotdeals } from '../../actions/product';
import shortid from 'shortid';

const TodayDealsSummary = () => {
  const dispatch = useDispatch();
  const { storeHotdeals } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getStoreHotdeals());
  }, []);

  return (
    <section className="today-deals-summary">
      <div className="today-deals-summary-header">
        <h3>오늘의 딜</h3> <Link to="/today_deals">더보기</Link>
      </div>
      <div className="today-deals-summary-items">
        {storeHotdeals.map((product) => {
          return <HotdealStoreItem key={shortid.generate()} {...product} />;
        })}
      </div>
      <Link to="/today_deals">
        <button className="btn-48 btn-secondary">
          <span>오늘의딜 더보기</span>&nbsp;
          <i className="ic-chevron"></i>
        </button>
      </Link>
    </section>
  );
};

export default TodayDealsSummary;
