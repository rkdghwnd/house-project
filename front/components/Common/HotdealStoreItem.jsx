import React, { useEffect, useState } from 'react';
import StoreItem from '../home/StoreItem';

const hotdealStoreItem = (product) => {
  const offset = 1000 * 60 * 60 * 9;
  const timeDifference = product.hotdeal_end_at - new Date().getTime() - offset;
  const remainingTime = new Date(
    timeDifference <= -offset ? -offset : timeDifference
  );
  const [hotdealTime, setHotdealTime] = useState(
    `${remainingTime.getHours()}:${remainingTime.getMinutes()}:${remainingTime.getSeconds()}`
  );

  useEffect(() => {
    const intervalTiming = setInterval(() => {
      const offset = 1000 * 60 * 60 * 9;
      const timeDifference =
        product.hotdeal_end_at - new Date().getTime() - offset;
      const remainingTime = new Date(
        timeDifference <= -offset ? -offset : timeDifference
      );
      setHotdealTime(
        `${remainingTime.getHours()}:${remainingTime.getMinutes()}:${remainingTime.getSeconds()}`
      );
    }, 1000);

    return () => {
      clearInterval(intervalTiming);
    };
  }, [product.hotdeal_end_at]);

  return (
    <div className="hotdeal-store-item">
      <div className="hotdeal-timer tag-red">{hotdealTime} 남음</div>
      <StoreItem {...product} />
    </div>
  );
};

export default hotdealStoreItem;
