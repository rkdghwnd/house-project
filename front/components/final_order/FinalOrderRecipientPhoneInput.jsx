import React, { useCallback, useState } from 'react';
import { isCorrectPhoneNumber } from '../../hooks/validate';

const FinalOrderRecipientPhoneInput = ({
  recipientFirstPhoneNumber,
  recipientLastPhoneNumber,
  setRecipientFirstPhoneNumber,
  setRecipientLastPhoneNumber,
  recipientPhoneNumberError,
  setRecipientPhoneNumberError,
}) => {
  const onChangeFirstPhoneNumber = useCallback(
    (e) => {
      setRecipientFirstPhoneNumber(e.currentTarget.value);
      // 검증
      if (
        isCorrectPhoneNumber(
          `${e.currentTarget.value}-${recipientLastPhoneNumber}`
        )
      ) {
        setRecipientPhoneNumberError(false);
      } else {
        setRecipientPhoneNumberError(true);
      }
    },
    [recipientLastPhoneNumber]
  );

  const onChangeLastPhoneNumber = useCallback(
    (e) => {
      const onlyNumberValue = e.currentTarget.value.split('-').join('');

      // 상태 갱신
      if (!/^[0-9]+$/.test(onlyNumberValue) && e.currentTarget.value) {
        return;
      }
      let changedValue = '';
      if (onlyNumberValue.length > 7) {
        changedValue = `${onlyNumberValue.slice(0, 4)}-${onlyNumberValue.slice(
          4
        )}`;
      } else if (onlyNumberValue.length > 3) {
        changedValue = `${onlyNumberValue.slice(0, 3)}-${onlyNumberValue.slice(
          3
        )}`;
      } else {
        changedValue = onlyNumberValue;
      }

      setRecipientLastPhoneNumber(changedValue);
      setRecipientPhoneNumberError(
        !isCorrectPhoneNumber(`${recipientFirstPhoneNumber}-${changedValue}`)
      );
    },
    [recipientFirstPhoneNumber]
  );
  return (
    <>
      <div className="phone-input">
        <label htmlFor="phone">연락처</label>
        <select
          name="phone"
          className="phone-number-select"
          value={recipientFirstPhoneNumber}
          onChange={onChangeFirstPhoneNumber}
        >
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
        </select>
        <input
          type="tel"
          maxLength={9}
          placeholder="입력해주세요"
          value={recipientLastPhoneNumber}
          onChange={onChangeLastPhoneNumber}
        />
      </div>
      {recipientPhoneNumberError && (
        <div className="input-error">전화번호 형식이 맞지 않습니다.</div>
      )}
    </>
  );
};

export default FinalOrderRecipientPhoneInput;
