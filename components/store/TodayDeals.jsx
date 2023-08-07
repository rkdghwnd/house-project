import Link from 'next/link';
import React from 'react';
import StoreItems from './StoreItems';

const TodayDeals = () => {
  return (
    <section className="today-deals">
      <div className="today-deals-header">
        <h3>오늘의 딜</h3> <Link href="/">더보기</Link>
      </div>
      <StoreItems />
      <StoreItems />
      <StoreItems />
      <StoreItems />
    </section>
  );
};

export default TodayDeals;
