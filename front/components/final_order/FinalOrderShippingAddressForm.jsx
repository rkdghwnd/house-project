import React, { useCallback, useState } from 'react';
import FinalOrderRecipientPhoneInput from './FinalOrderRecipientPhoneInput';
import FinalOrderDestinationInput from './FinalOrderDestinationInput';
import FinalOrderRecipientInput from './FinalOrderRecipientInput';
import FinalOrderCustomAsk from './FinalOrderCustomAsk';
import useInput from '../../hooks/useInput';
import FinalOrderAskSelect from './FInalOrderAskSelect';
import { callDaumPostCode } from '../../hooks/callDaumPostCode';

const FinalOrderShippingAddressForm = ({
  destination,
  setDestination,
  recipient,
  setRecipient,
  recipientFirstPhoneNumber,
  setRecipientFirstPhoneNumber,
  recipientLastPhoneNumber,
  setRecipientLastPhoneNumber,
  zonecode,
  address,
  addressDetail,
  setZoneCode,
  setAddress,
  setAddressDetail,
  additionalAsk,
  setAdditionalAsk,
  orderer,
  ordererFirstPhoneNumber,
  ordererLastPhoneNumber,
  addressError,
  setAddressError,
  destinationError,
  setDestinationError,
  recipientError,
  setRecipientError,
  recipientPhoneNumberError,
  setRecipientPhoneNumberError,
}) => {
  const [customAskVisible, setCustomAskVisible] = useState(false);

  const applyOrdererInfo = useCallback(() => {
    setRecipient(orderer);
    setRecipientFirstPhoneNumber(ordererFirstPhoneNumber);
    setRecipientLastPhoneNumber(ordererLastPhoneNumber);
  }, [orderer, ordererFirstPhoneNumber, ordererLastPhoneNumber]);

  const openAddressSearchWindow = useCallback(() => {
    callDaumPostCode(setZoneCode, setAddress, setAddressError);
  }, []);

  const onChangeAddressDetail = useCallback(
    (e) => {
      setAddressDetail(e.currentTarget.value);
      if (e.currentTarget.value && zonecode) {
        setAddressError(false);
      } else {
        setAddressError(true);
      }
    },
    [zonecode]
  );

  return (
    <section className="final-order-shipping-address-form">
      <ul>
        <li>
          <h2>배송지</h2>
          <button className="btn-ghost" onClick={applyOrdererInfo}>
            위와 동일하게 채우기
          </button>
        </li>
        <li>
          <FinalOrderDestinationInput
            destination={destination}
            setDestination={setDestination}
            destinationError={destinationError}
            setDestinationError={setDestinationError}
          />
        </li>
        <li>
          <FinalOrderRecipientInput
            recipient={recipient}
            setRecipient={setRecipient}
            recipientError={recipientError}
            setRecipientError={setRecipientError}
          />
        </li>
        <li>
          <FinalOrderRecipientPhoneInput
            recipientFirstPhoneNumber={recipientFirstPhoneNumber}
            recipientLastPhoneNumber={recipientLastPhoneNumber}
            setRecipientFirstPhoneNumber={setRecipientFirstPhoneNumber}
            setRecipientLastPhoneNumber={setRecipientLastPhoneNumber}
            recipientPhoneNumberError={recipientPhoneNumberError}
            setRecipientPhoneNumberError={setRecipientPhoneNumberError}
          />
        </li>
        <li>
          <label>주소</label>
          <button
            className="btn-40 btn-outlined"
            onClick={openAddressSearchWindow}
          >
            주소찾기
          </button>
          <input type="text" disabled value={zonecode} />
        </li>
        <li>
          <label></label>
          <input type="text" disabled value={address} />
        </li>
        <li>
          <label></label>
          <input
            type="text"
            placeholder="상세주소 입력"
            value={addressDetail}
            onChange={onChangeAddressDetail}
          />
        </li>
        <li>
          <label></label>
          <input type="checkbox" />
          <p>기본 배송지로 저장</p>
        </li>
        <li>
          {addressError && <div className="input-error">주소를 입력하세요</div>}
        </li>
        {customAskVisible && (
          <FinalOrderCustomAsk
            additionalAsk={additionalAsk}
            setAdditionalAsk={setAdditionalAsk}
          />
        )}
        <li className="ask-select">
          <FinalOrderAskSelect
            setCustomAskVisible={setCustomAskVisible}
            setAdditionalAsk={setAdditionalAsk}
          />
        </li>
      </ul>
    </section>
  );
};

export default FinalOrderShippingAddressForm;
