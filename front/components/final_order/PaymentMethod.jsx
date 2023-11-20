import React, { useCallback, useRef, useState } from 'react';
import shortid from 'shortid';
import { payments } from '../../datas/paymentsList';

const PaymentMethod = () => {
  const [prevTarget, setPrevTarget] = useState(0);
  const [isCardSelect, setIsCardSelect] = useState(true);
  const toggleActive = useCallback(
    (i) => () => {
      setPrevTarget(i);
      if (i === 0) {
        setIsCardSelect(true);
      } else {
        setIsCardSelect(false);
      }
    },
    []
  );

  return (
    <section className="payment-method">
      <div className="payment-method-header">
        <h2>결제 수단</h2>
      </div>
      <div className="payment-method-main">
        {payments.map(({ name, src, discountBlue, discountGray }, i) => (
          <button
            value={i}
            key={shortid.generate()}
            className={`payment-method-main-item${
              i === prevTarget ? ' is-active' : ''
            }`}
            onClick={toggleActive(i)}
          >
            <span>{name}</span>
            <img src={src} alt={`${name}-payment`} />
            <div>
              <p className="discount-blue">{discountBlue}</p>
              <p className="discount-gray">{discountGray}</p>
            </div>
          </button>
        ))}
      </div>
      {isCardSelect && (
        <div className="payment-method-option">
          <select>
            <option value="" disabled>
              카드를 선택해주세요
            </option>
            <option value="">신한카드</option>
            <option value="">비씨카드</option>
            <option value="">우리카드</option>
            <option value="">롯데카드</option>
            <option value="">현대카드</option>
            <option value="">KB국민카드</option>
            <option value="">하나카드</option>
            <option value="">NH농협카드</option>
            <option value="">삼성카드</option>
            <option value="">카카오뱅크카드</option>
            <option value="">씨티카드</option>
          </select>
          <select disabled>
            <option value="">일시불</option>
          </select>
        </div>
      )}
    </section>
  );
};

export default PaymentMethod;
