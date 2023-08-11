import React from 'react';
import StoreItems from './StoreItem';
import { Link } from 'react-router-dom';

const TodayDealsSummary = () => {
  return (
    <section className="today-deals-summary">
      <div className="today-deals-summary-header">
        <h3>오늘의 딜</h3> <Link to="/">더보기</Link>
      </div>
      <div className="today-deals-summary-items">
        <StoreItems />
        <StoreItems />
        <StoreItems />
        <StoreItems />
      </div>
      <button className="btn-48 btn-secondary">오늘의딜 더보기 {'>'}</button>
    </section>
  );
};

export default TodayDealsSummary;
