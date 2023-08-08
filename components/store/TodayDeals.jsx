import Link from 'next/link';
import React from 'react';
import StoreItems from './StoreItem';

const TodayDeals = () => {
  return (
    <section className="today-deals">
      <div className="today-deals-header">
        <h3>오늘의 딜</h3> <Link href="/">더보기</Link>
      </div>
      <div className="today-deals-items">
        <StoreItems />
        <StoreItems />
        <StoreItems />
        <StoreItems />
      </div>
      <button className="btn-48 btn-secondary">오늘의딜 더보기 {'>'}</button>
    </section>
  );
};

export default TodayDeals;
