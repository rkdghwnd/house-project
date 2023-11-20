import React, { useCallback, forwardRef } from 'react';
import { useSelector } from 'react-redux';

const ProductShipment = (props, ref) => {
  const { productions } = useSelector((state) => state.productions);
  const openShipment = useCallback((e) => {
    e.currentTarget.parentNode.parentNode.classList.add('is-open');
  }, []);
  const {
    free_delivery,
    delivery_restrict,
    refund_fee,
    exchange_fee,
    refund_address,
  } = productions;

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
                <td>{free_delivery ? '무료 배송' : '3,000원'}</td>
              </tr>
              <tr>
                <th scope="row">배송불가 지역</th>
                <td>{delivery_restrict || '배송불가 지역이 없습니다'}</td>
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
                <td>{refund_fee?.toLocaleString()}원</td>
              </tr>
              <tr>
                <th scope="row">교환배송비</th>
                <td>{exchange_fee?.toLocaleString()}원</td>
              </tr>
              <tr>
                <th scope="row">보내실 곳</th>
                <td>{refund_address}</td>
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
