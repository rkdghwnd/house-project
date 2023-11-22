import React from 'react';

const DeliveryStatus = () => {
  return (
    <section className="delivery-status">
      <ul>
        <li>
          <span>입금대기</span>
          <span>0</span>
        </li>
        <li>
          <span>결제완료</span>
          <span>0</span>
        </li>
        <li>
          <span>배송준비</span>
          <span>0</span>
        </li>
        <li>
          <span>배송중</span>
          <span>0</span>
        </li>
        <li>
          <span>배송완료</span>
          <span>0</span>
        </li>
        <li>
          <span>구매확정</span>
          <span>0</span>
        </li>
      </ul>
    </section>
  );
};

export default DeliveryStatus;
