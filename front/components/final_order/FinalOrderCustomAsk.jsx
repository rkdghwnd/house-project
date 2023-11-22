import React, { useCallback } from 'react';

const FinalOrderCustomAsk = ({ additionalAsk, setAdditionalAsk }) => {
  const onChangeCustomAsk = useCallback((e) => {
    setAdditionalAsk(e.currentTarget.value.slice(0, 50));
    e.currentTarget.style.height = 'auto'; //height 초기화
    e.currentTarget.style.height = e.currentTarget.scrollHeight - 18 + 'px';
  }, []);

  return (
    <li className="ask-custom">
      <textarea
        type="text"
        rows={1}
        placeholder="배송 요청사항을 입력해주세요"
        maxLength={50}
        onChange={onChangeCustomAsk}
        value={additionalAsk}
      >
        {additionalAsk}
      </textarea>
      <span>{additionalAsk.length}&nbsp;/&nbsp;50</span>
    </li>
  );
};

export default FinalOrderCustomAsk;
