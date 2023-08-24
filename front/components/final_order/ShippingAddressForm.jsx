import React, { useCallback, useState } from 'react';

const ShippingAddressForm = () => {
  const [input, setInput] = useState('');
  const onChangeInput = useCallback((e) => {
    setInput(e.currentTarget.value.slice(0, 50));
    e.currentTarget.style.height = 'auto'; //height 초기화
    e.currentTarget.style.height = e.currentTarget.scrollHeight - 18 + 'px';
  }, []);

  const [customRequirement, setCustomRequirement] = useState(false);
  const onChangeSelect = useCallback((e) => {
    const isSelected =
      e.currentTarget.options[e.currentTarget.options.selectedIndex].value ===
      '직접입력';

    if (isSelected) {
      setCustomRequirement(true);
    } else {
      setCustomRequirement(false);
    }
  }, []);
  return (
    <section className="shipping-address-form">
      <ul>
        <li>
          <h2>배송지</h2>
          <button className="btn-ghost">위와 동일하게 채우기</button>
        </li>
        <li>
          <label htmlFor="destination">배송지명</label>
          <input type="text" id="destination" />
        </li>
        <li>
          <label htmlFor="recipient">받는사람</label>
          <input type="text" />
        </li>
        <li>
          <label htmlFor="phone">연락처</label>
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
          <label>주소</label>
          <button className="btn-40 btn-outlined">주소찾기</button>
          <input type="text" disabled />
        </li>
        <li>
          <label></label>
          <input type="text" disabled />
        </li>
        <li>
          <label></label>
          <input type="text" placeholder="상세주소 입력" />
        </li>
        <li>
          <label></label>
          <input type="checkbox" />
          <p>기본 배송지로 저장</p>
        </li>
        {customRequirement && (
          <li>
            <textarea
              type="text"
              rows={1}
              placeholder="배송 요청사항을 입력해주세요"
              maxLength={50}
              onChange={onChangeInput}
            >
              {input}
            </textarea>
            <span>{input.length}&nbsp;/&nbsp;50</span>
          </li>
        )}
        <li>
          <select onChange={onChangeSelect}>
            <option value="n/a">배송시 요청사향을 선택해주세요</option>
            <option value="option1">부재시 문앞에 놓아주세요</option>
            <option value="option2">배송전에 미리 연락주세요</option>
            <option value="option3">부재시 경비실에 맡겨주세요</option>
            <option value="option4">
              부재시 전화주시거나 문자 남겨 주세요
            </option>
            <option value="직접입력">직접입력</option>
          </select>
        </li>
      </ul>
    </section>
  );
};

export default ShippingAddressForm;
