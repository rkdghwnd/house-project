import React, { useCallback, useEffect, useRef, useState } from 'react';
import AppLayout from '../components/common/AppLayout';
import FinalOrdererForm from '../components/final_order/FinalOrdererForm';
import FinalOrderSideBar from '../components/final_order/FinalOrderSideBar';
import FinalOrderList from '../components/final_order/FinalOrderList';
import PaymentMethod from '../components/final_order/PaymentMethod';
import FinalOrderShippingAddressForm from '../components/final_order/FinalOrderShippingAddressForm';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCEEDED } from '../datas/statusConstants';
import { useNavigate } from 'react-router-dom';
import { getFinalOrder } from '../actions/finalorder';

const FinalOrder = () => {
  const dispatch = useDispatch();
  const { me, getMyInfoStatus } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [orderer, setOrderer] = useState('');
  const [emailName, setEmailName] = useState('');
  const [domain, setDomain] = useState('');
  const [ordererFirstPhoneNumber, setOrdererFirstPhoneNumber] = useState('010');
  const [ordererLastPhoneNumber, setOrdererLastPhoneNumber] = useState('');
  const [ordererError, setOrdererError] = useState(false);
  const [emailNameError, setEmailNameError] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [ordererPhoneNumberError, setOrdererPhoneNumberError] = useState(false);

  const [destination, setDestination] = useState('');
  const [recipient, setRecipient] = useState('');
  const [recipientFirstPhoneNumber, setRecipientFirstPhoneNumber] =
    useState('010');
  const [recipientLastPhoneNumber, setRecipientLastPhoneNumber] = useState('');
  const [zonecode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [additionalAsk, setAdditionalAsk] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);
  const [recipientError, setRecipientError] = useState(false);
  const [recipientPhoneNumberError, setRecipientPhoneNumberError] =
    useState(false);

  useEffect(() => {
    if (getMyInfoStatus === SUCCEEDED && !me) {
      // 비로그인 접근 불가
      navigate('/');
    } else if (getMyInfoStatus === SUCCEEDED && me) {
      // 장바구니 가져오기
      dispatch(getFinalOrder()).then((res) => {
        if (getFinalOrder.fulfilled.match(res) && res.payload.length === 0) {
          navigate('/');
        }
        console.log(res);
      });
    }
  }, [me, getMyInfoStatus]);

  const finalOrderInfo = {
    orderer,
    emailName,
    domain,
    ordererPhoneNumber: `${ordererFirstPhoneNumber}-${ordererLastPhoneNumber}`,
    destination,
    recipient,
    recipientPhoneNumber: `${recipientFirstPhoneNumber}-${recipientLastPhoneNumber}`,
    zonecode,
    address,
    additionalAsk,
  };

  const errorStateFunctions = {
    setOrdererError,
    setEmailNameError,
    setDomainError,
    setOrdererPhoneNumberError,
    setAddressError,
    setDestinationError,
    setRecipientError,
    setRecipientPhoneNumberError,
  };

  return (
    <AppLayout>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <div className="product-section-divider lg-hidden"></div>
            <FinalOrdererForm
              orderer={orderer}
              setOrderer={setOrderer}
              emailName={emailName}
              setEmailName={setEmailName}
              domain={domain}
              setDomain={setDomain}
              ordererFirstPhoneNumber={ordererFirstPhoneNumber}
              setOrdererFirstPhoneNumber={setOrdererFirstPhoneNumber}
              ordererLastPhoneNumber={ordererLastPhoneNumber}
              setOrdererLastPhoneNumber={setOrdererLastPhoneNumber}
              ordererError={ordererError}
              setOrdererError={setOrdererError}
              emailNameError={emailNameError}
              setEmailNameError={setEmailNameError}
              domainError={domainError}
              setDomainError={setDomainError}
              ordererPhoneNumberError={ordererPhoneNumberError}
              setOrdererPhoneNumberError={setOrdererPhoneNumberError}
            />
            <div className="product-section-divider lg-hidden"></div>
            <FinalOrderShippingAddressForm
              destination={destination}
              setDestination={setDestination}
              recipient={recipient}
              setRecipient={setRecipient}
              recipientFirstPhoneNumber={recipientFirstPhoneNumber}
              setRecipientFirstPhoneNumber={setRecipientFirstPhoneNumber}
              recipientLastPhoneNumber={recipientLastPhoneNumber}
              setRecipientLastPhoneNumber={setRecipientLastPhoneNumber}
              zonecode={zonecode}
              address={address}
              addressDetail={addressDetail}
              setZoneCode={setZoneCode}
              setAddress={setAddress}
              setAddressDetail={setAddressDetail}
              additionalAsk={additionalAsk}
              setAdditionalAsk={setAdditionalAsk}
              orderer={orderer}
              ordererFirstPhoneNumber={ordererFirstPhoneNumber}
              ordererLastPhoneNumber={ordererLastPhoneNumber}
              addressError={addressError}
              setAddressError={setAddressError}
              destinationError={destinationError}
              setDestinationError={setDestinationError}
              recipientError={recipientError}
              setRecipientError={setRecipientError}
              recipientPhoneNumberError={recipientPhoneNumberError}
              setRecipientPhoneNumberError={setRecipientPhoneNumberError}
            />
            <div className="product-section-divider lg-hidden"></div>
            <FinalOrderList />
            <div className="product-section-divider lg-hidden"></div>
            <PaymentMethod />
            <FinalOrderSideBar
              mobileVisible={true}
              finalOrderInfo={finalOrderInfo}
              errorStateFunctions={errorStateFunctions}
            />
          </div>
          <div className="col-lg-4">
            <FinalOrderSideBar
              mobileVisible={false}
              finalOrderInfo={finalOrderInfo}
              errorStateFunctions={errorStateFunctions}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FinalOrder;
