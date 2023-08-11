import React, { useCallback, forwardRef } from 'react';

const ProductShipment = (props, ref) => {
  const openShipment = useCallback((e) => {
    e.currentTarget.parentNode.parentNode.classList.add('is-open');
  }, []);

  return (
    <div
      className="product-shipment"
      id="product-shipment"
      role="tabpanel"
      ref={ref}
    >
      <header className="product-section-header sm-only">
        <h1 className="title">배송/교환/환불</h1>

        <button
          className="icon-button"
          type="button"
          aria-label="더보기"
          onClick={openShipment}
        >
          <i className="ic-chevron" aria-hidden></i>
        </button>
      </header>

      <section className="product-section">
        <header className="product-section-header">
          <h1 className="title">배송</h1>
        </header>

        <div className="product-section-content">
          <table className="product-table">
            <tbody>
              <tr>
                <th scope="row">배송</th>
                <td>일반택배</td>
              </tr>
              <tr>
                <th scope="row">배송비</th>
                <td>무료 배송</td>
              </tr>
              <tr>
                <th scope="row">배송불가 지역</th>
                <td>배송불가 지역이 없습니다</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="product-section-divider sm-only" aria-hidden></div>

      <section className="product-section">
        <header className="product-section-header">
          <h1 className="title">교환/환불</h1>
        </header>

        <div className="product-section-content">
          <table className="product-table">
            <tbody>
              <tr>
                <th scope="row">반품배송비</th>
                <td>2,500원 (최초 배송비가 무료인 경우 5,000원 부과)</td>
              </tr>
              <tr>
                <th scope="row">교환배송비</th>
                <td>5,000원</td>
              </tr>
              <tr>
                <th scope="row">보내실 곳</th>
                <td>(00000) 서울 종로구 누하동</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="product-section-divider sm-only" aria-hidden></div>
    </div>
  );
};

export default forwardRef(ProductShipment);
