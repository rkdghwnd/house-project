import React, { useCallback, useRef, useState } from 'react';

const FinalOrdererForm = () => {
  const [domainCustom, setDomainCustom] = useState(false);
  const [short, setShort] = useState(false);

  const onChangeDomain = useCallback((e) => {
    const isSelected =
      e.currentTarget.options[e.currentTarget.options.selectedIndex].value ===
      '직접입력';

    if (isSelected) {
      setDomainCustom(true);
    } else {
      setDomainCustom(false);
    }
  }, []);

  const onShortForm = useCallback(() => {
    setShort((state) => !state);
  }, []);

  return (
    <section className={`final-orderer-form ${short ? 'short' : ''}`}>
      <ul>
        <li className="final-orderer-form-header" onClick={onShortForm}>
          <h2>주문자</h2>
          <i className={`ic-chevron lg-hidden ${short ? 'short' : ''}`}></i>
        </li>
        <li>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" />
        </li>
        <li>
          <div className="phone-row-1">
            <label htmlFor="email">이메일</label>
            <input type="text" placeholder="이메일" />
            <span>@</span>
          </div>
          <div className="phone-row-2">
            {domainCustom && (
              <div className="custom-domain">
                <label className="lg-hidden"></label>
                <input type="text" />
              </div>
            )}
            <div className="select-domain">
              <label className="lg-hidden"></label>
              <select name="domain" onChange={onChangeDomain}>
                <option value="선택해주세요">선택해주세요</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="kakao.com">kakao.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="icloud.com">icloud.com</option>
                <option value="직접입력">직접입력</option>
              </select>
            </div>
          </div>
        </li>
        <li>
          <label htmlFor="phone">휴대전화</label>
          <select name="phone" className="phone-number-select">
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <input type="text" placeholder="입력해주세요" />
        </li>
        <li>
          <label></label>
          <button className="btn-primary btn-48">인증번호 발송</button>
        </li>
      </ul>
    </section>
  );
};

export default FinalOrdererForm;
