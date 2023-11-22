import React, { useCallback } from 'react';

const FinalOrderAskSelect = ({ setCustomAskVisible, setAdditionalAsk }) => {
  const onChangeAskSelect = useCallback((e) => {
    if (e.currentTarget.value === 'custom') {
      setCustomAskVisible(true);
      setAdditionalAsk('');
      return;
    } else {
      setCustomAskVisible(false);
      setAdditionalAsk(e.currentTarget.value);
    }
  }, []);
  return (
    <select onChange={onChangeAskSelect}>
      <option>배송시 요청사향을 선택해주세요</option>
      <option value="부재시 문앞에 놓아주세요">부재시 문앞에 놓아주세요</option>
      <option value="배송전에 미리 연락주세요">배송전에 미리 연락주세요</option>
      <option value="부재시 경비실에 맡겨주세요">
        부재시 경비실에 맡겨주세요
      </option>
      <option value="부재시 전화주시거나 문자 남겨 주세요">
        부재시 전화주시거나 문자 남겨 주세요
      </option>
      <option value="custom">직접입력</option>
    </select>
  );
};

export default FinalOrderAskSelect;
