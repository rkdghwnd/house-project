import React, { useCallback, useState } from 'react';
import { isCorrectPhoneNumber } from '../../hooks/validate';

const FinalOrdererPhoneInput = ({
  ordererFirstPhoneNumber,
  setOrdererFirstPhoneNumber,
  ordererLastPhoneNumber,
  setOrdererLastPhoneNumber,
  ordererPhoneNumberError,
  setOrdererPhoneNumberError,
}) => {
  const onChangeFirstPhoneNumber = useCallback(
    (e) => {
      setOrdererFirstPhoneNumber(e.currentTarget.value);
      // 검증
      setOrdererPhoneNumberError(
        !isCorrectPhoneNumber(
          `${e.currentTarget.value}-${ordererLastPhoneNumber}`
        )
      );
    },
    [ordererLastPhoneNumber]
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

      setOrdererLastPhoneNumber(changedValue);
      setOrdererPhoneNumberError(
        !isCorrectPhoneNumber(`${ordererFirstPhoneNumber}-${changedValue}`)
      );
    },
    [ordererFirstPhoneNumber]
  );
  return (
    <>
      <div className="phone-input">
        <label htmlFor="phone">휴대전화</label>
        <select
          name="phone"
          className="phone-number-select"
          value={ordererFirstPhoneNumber}
          onChange={onChangeFirstPhoneNumber}
        >
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
        </select>
        <input
          maxLength={9}
          type="tel"
          placeholder="입력해주세요"
          onChange={onChangeLastPhoneNumber}
          value={ordererLastPhoneNumber}
        />
      </div>
      {ordererPhoneNumberError && (
        <div className="input-error">전화번호 형식이 맞지 않습니다.</div>
      )}
    </>
  );
};

export default FinalOrdererPhoneInput;
