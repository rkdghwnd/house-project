import React, { Dispatch, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  isCorrectDomain,
  isCorrectEmailName,
  isCorrectPhoneNumber,
} from '../../hooks/validate';
import { getTOSSPayment } from '../../actions/payment';
import { LOADING } from '../../datas/statusConstants';
import Loading from '../common/Loading';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

type FinalOrderSideBarType = {
  mobileVisible: boolean;
  finalOrderInfo: {
    [key in string]: string;
  };
  errorStateFunctions: {
    [key in string]: Dispatch<React.SetStateAction<boolean>>;
  };
};

const FinalOrderSideBar = ({
  mobileVisible,
  finalOrderInfo,
  errorStateFunctions,
}: FinalOrderSideBarType) => {
  const dispatch = useAppDispatch();
  const finalOrders = useSelector(
    (state: RootState) => state.finalorder.finalOrders
  );
  const getTOSSPaymentStatus = useSelector(
    (state: RootState) => state.payment.getTOSSPaymentStatus
  );
  const [termsAgree, setTermsAgree] = useState(false);

  const productsPrice = finalOrders
    .map((product) => {
      // 각 product 의 가격 * 개수
      const optionCount = product.Final_cart_products.reduce((acc, cur) => {
        return acc + cur.product_count;
      }, 0);
      const totalOptionPrice = product.selling_price * optionCount;
      return totalOptionPrice;
    })
    .reduce((acc, cur) => acc + cur, 0); // 총합

  const deliveryFee = finalOrders.reduce((acc, cur) => {
    const fee = cur.free_delivery ? 0 : 3000;
    return acc + fee;
  }, 0);

  const agreeTermsOfUse = useCallback(() => {
    setTermsAgree((state) => !state);
  }, []);

  const moveToPaymentPage = useCallback(() => {
    // 모든 input 유효성 검증
    if (
      finalOrderInfo.orderer &&
      isCorrectEmailName(finalOrderInfo.emailName) &&
      isCorrectDomain(finalOrderInfo.domain) &&
      isCorrectPhoneNumber(finalOrderInfo.ordererPhoneNumber) &&
      finalOrderInfo.destination &&
      finalOrderInfo.recipient &&
      isCorrectPhoneNumber(finalOrderInfo.recipientPhoneNumber) &&
      finalOrderInfo.address &&
      finalOrderInfo.zonecode &&
      termsAgree
    ) {
      // 통과했을 때 결제창으로 넘어가기
      dispatch(getTOSSPayment());
    } else {
      // 통과 못하면 못한부분 setError
      errorStateFunctions.setOrdererError(!finalOrderInfo.orderer);
      errorStateFunctions.setEmailNameError(
        !isCorrectEmailName(finalOrderInfo.emailName)
      );
      errorStateFunctions.setDomainError(
        !isCorrectDomain(finalOrderInfo.domain)
      );
      errorStateFunctions.setOrdererPhoneNumberError(
        !isCorrectPhoneNumber(finalOrderInfo.ordererPhoneNumber)
      );
      errorStateFunctions.setAddressError(
        !(finalOrderInfo.address && finalOrderInfo.zonecode)
      );
      errorStateFunctions.setDestinationError(!finalOrderInfo.destination);
      errorStateFunctions.setRecipientError(!finalOrderInfo.recipient);
      errorStateFunctions.setRecipientPhoneNumberError(
        !isCorrectPhoneNumber(finalOrderInfo.recipientPhoneNumber)
      );
    }
  }, [finalOrderInfo, errorStateFunctions, termsAgree]);

  return (
    <section
      className={`final-order-sidebar${
        mobileVisible ? ' lg-hidden' : ' lg-only'
      }`}
    >
      <div className="final-order-sidebar-bill">
        <h2>결제금액</h2>
        <div>
          <dd>총 상품 금액</dd>
          <dt>{productsPrice.toLocaleString()}원</dt>
        </div>
        <div>
          <dd>배송비</dd>
          <dt>{deliveryFee.toLocaleString()}원</dt>
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
            <span>최종 결제 금액</span>
          </div>
          <div className="total-cost-right">
            <strong>
              <span>{(productsPrice + deliveryFee).toLocaleString()}</span>
              &nbsp;원
            </strong>
            <div>
              <span>40 P</span>&nbsp;적립 예정
            </div>
          </div>
        </div>
        <label className="full-agreement">
          <div className={`check-box${termsAgree ? '' : ' not-agree'}`}>
            <input type="checkbox" onClick={agreeTermsOfUse} />
            <span></span>
          </div>
          <div className="full-agreement-description">
            결제 사항에 모두 동의합니다. (필수)
          </div>
        </label>
        {termsAgree || (
          <div className="not-agreement-description">
            결제 진행 필수사항을 동의해주세요
          </div>
        )}
      </div>
      <div className="pay-button">
        <button className="btn-primary btn-48" onClick={moveToPaymentPage}>
          <Loading loadProductsStatus={getTOSSPaymentStatus} />
          {getTOSSPaymentStatus !== LOADING &&
            `${(productsPrice + deliveryFee).toLocaleString()}원 결제하기`}
        </button>
      </div>
    </section>
  );
};

export default FinalOrderSideBar;
