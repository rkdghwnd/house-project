import React, { useCallback, useState } from 'react';

const FinalOrderSideBar = ({ mobileVisible }) => {
  const [notTotalAgree, setNotTotalAgree] = useState(true);
  const onTotalAgree = useCallback(() => {
    setNotTotalAgree((state) => !state);
  }, []);

  return (
    <section
      className={`final-order-sidebar${
        mobileVisible ? ' lg-hidden' : ' sm-hidden'
      }`}
    >
      <div className="final-order-sidebar-bill">
        <h2>결제금액</h2>
        <div>
          <dd>총 상품 금액</dd>
          <dt>39,900원</dt>
        </div>
        <div>
          <dd>배송비</dd>
          <dt>0원</dt>
        </div>
        <div>
          <dd>쿠폰 사용</dd>
          <dt>0원</dt>
        </div>
        <div>
          <dd>포인트 사용</dd>
          <dt>0원</dt>
        </div>
        <div className="total-cost">
          <div className="total-cost-left">
            <h4>최종 결제 금액</h4>
          </div>
          <div className="total-cost-right">
            <strong>
              <span>39,000</span>&nbsp;원
            </strong>
            <div>
              <span>40 P</span>&nbsp;적립 예정
            </div>
          </div>
        </div>
        <label className="full-agreement">
          <div className={`check-box${notTotalAgree ? ' not-agree' : ''}`}>
            <input type="checkbox" onClick={onTotalAgree} />
            <span></span>
          </div>
          <div className="full-agreement-description">
            결제 사항에 모두 동의합니다. (필수)
          </div>
        </label>
        {notTotalAgree && (
          <div className="not-agreement-description">
            결제 진행 필수사항을 동의해주세요
          </div>
        )}
      </div>
      <div className="pay-button">
        <button className="btn-primary btn-48">39,900원 결제하기</button>
      </div>
    </section>
  );
};

export default FinalOrderSideBar;
