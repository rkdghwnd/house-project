import React, { useEffect, useState } from 'react';
import StoreItem from '../home/StoreItem';

const hotdealStoreItem = (product) => {
  const timeDifference = new Date(
    new Date(product.hotdeal_end_at) - new Date()
  );
  const remainingTime = new Date(
    timeDifference.setHours(timeDifference.getHours() + 15)
  );
  const [hotdealTime, setHotdealTime] = useState(
    `${remainingTime.getHours()}:${remainingTime.getMinutes()}:${remainingTime.getSeconds()}`
  );

  useEffect(() => {
    const intervalTiming = setInterval(() => {
      const timeDifference = new Date(
        new Date(product.hotdeal_end_at) - new Date()
      );
      const remainingTime = new Date(
        timeDifference.setHours(timeDifference.getHours() + 15)
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
