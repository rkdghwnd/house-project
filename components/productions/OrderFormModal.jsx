import React from 'react';
import { useSelector } from 'react-redux';

const OrderFormModal = () => {
  const { orderFormModalVisible } = useSelector((state) => state.modal);
  return (
    <aside
      className={`order-form-modal lg-hidden ${
        orderFormModalVisible ? 'is-open' : ''
      }`}
    >
      <h1 className="visually-hidden">주문창</h1>

      <form className="order-form" action="/" method="POST">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="order-inputs">
                <div className="select-group is-active">
                  <select
                    className="form-select"
                    id="order-form-modal-select-1"
                    required
                  >
                    <option value="">선택</option>
                    <option value="1">선택사항 1</option>
                    <option value="2">선택사항 2</option>
                    <option value="3">선택사항 3</option>
                    <option value="4">선택사항 4</option>
                    <option value="5">선택사항 5</option>
                  </select>
                  <i className="ic-caret" aria-hidden></i>
                </div>
                <div className="select-group">
                  <select
                    className="form-select"
                    id="order-form-modal-select-2"
                  >
                    <option value="">추가상품 (선택)</option>
                    <option value="1">선택사항 1</option>
                    <option value="2">선택사항 2</option>
                    <option value="3">선택사항 3</option>
                    <option value="4">선택사항 4</option>
                    <option value="5">선택사항 5</option>
                  </select>
                  <i className="ic-caret" aria-hidden></i>
                </div>
              </div>

              <div className="order-checkouts">
                <ul className="checkout-list">
                  <li className="checkout-item">
                    <div className="checkout-card">
                      <header className="checkout-header">
                        <h4 className="checkout-title">화이트</h4>
                        <button
                          className="delete-button"
                          type="button"
                          aria-label="해당 상품을 삭제하기"
                        >
                          <i className="ic-close" aria-hidden></i>
                        </button>
                      </header>

                      <footer className="checkout-footer">
                        <div className="checkout-select">
                          <select id="order-form-modal-checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <i className="ic-caret" aria-hidden></i>
                        </div>

                        <output
                          className="checkout-output"
                          htmlFor="order-form-modal-checkout-item-1"
                        >
                          <div className="price-16">
                            <strong className="amount">32,900</strong>
                            <span className="currency">원</span>
                          </div>
                        </output>
                      </footer>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="checkout-card">
                      <header className="checkout-header">
                        <h4 className="checkout-title">
                          추가상품 - 귤무덤 패키지 / 제주감귤 3kg / 온라인 감귤
                          판매 1위
                        </h4>
                        <button
                          className="delete-button"
                          type="button"
                          aria-label="해당 상품을 삭제하기"
                        >
                          <i className="ic-close" aria-hidden></i>
                        </button>
                      </header>

                      <footer className="checkout-footer">
                        <div className="checkout-select">
                          <select id="order-form-modal-checkout-item-2">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <i className="ic-caret" aria-hidden></i>
                        </div>

                        <output
                          className="checkout-output"
                          htmlFor="order-form-modal-checkout-item-2"
                        >
                          <div className="price-16">
                            <strong className="amount">30,000</strong>
                            <span className="currency">원</span>
                          </div>
                        </output>
                      </footer>
                    </div>
                  </li>
                </ul>
              </div>

              <dl className="order-summary">
                <dt>주문금액</dt>
                <dd>
                  <output htmlFor="order-form-modal-select-1 order-form-modal-select-2">
                    <div className="price-20">
                      <strong className="amount">62,900</strong>
                      <span className="currency">원</span>
                    </div>
                  </output>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="btn-secondary btn-48" type="button">
            장바구니
          </button>
          <button className="btn-primary btn-48" type="submit">
            구매하기
          </button>
        </div>
      </form>
    </aside>
  );
};

export default OrderFormModal;
