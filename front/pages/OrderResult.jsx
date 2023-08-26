import React from 'react';
import AppLayout from '../components/common/AppLayout';

const OrderResult = () => {
  return (
    <AppLayout>
      <div className="container"></div>
      <div className="row">
        <div className="col-sm-4">
          <section className="order-result">
            <div className="order-result-image">
              <img src="/assets/images/order/order_result.webp" alt="" />
            </div>
            <div className="order-result-product">
              <table>
                <tr>
                  <td>주문상품</td>
                  <td>빅토리아 탄산수 500ml*20입 15종 모음전</td>
                </tr>
                <tr>
                  <td>배송지</td>
                  <td>
                    (22735) 인천 서구 청라라임로 109 (청라동, 호반베르디움)
                    252동 2401호
                  </td>
                </tr>
                <tr>
                  <td>결제 금액</td>
                  <td>11,900원</td>
                </tr>
              </table>
            </div>
            <div className="order-result-bank">
              <table>
                <tr>
                  <td>은행명</td>
                  <td>국민은행</td>
                </tr>
                <tr>
                  <td>예금주</td>
                  <td>주식회사 버킷플레이스</td>
                </tr>
                <tr>
                  <td>계좌번호</td>
                  <td>39889013820801</td>
                </tr>
                <tr>
                  <td>입금금액</td>
                  <td>11,900원</td>
                </tr>
                <tr>
                  <td>입금기한</td>
                  <td>2023-08-29 23:59까지</td>
                </tr>
              </table>
            </div>
            <div className="order-result-buttons">
              <button className="btn-outlined btn-48">쇼핑 계속하기</button>
              <button className="btn-primary btn-48">주문현황 보기</button>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default OrderResult;
