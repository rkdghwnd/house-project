import React from 'react';

const OrderInputs = () => {
  return (
    <div className="order-inputs">
      <div className="select-group is-active">
        <select className="form-select" id="select-1" required>
          <option value="">선택</option>
          <option value="1">선택사항 1</option>
          <option value="2">선택사항 2</option>
          <option value="3">선택사항 3</option>
          <option value="4">선택사항 4</option>
          <option value="5">선택사항 5</option>
        </select>
        <i className="ic-caret" aria-hidden></i>
      </div>
      <div className="select-group">
        <select className="form-select" id="select-2">
          <option value="">추가상품 (선택)</option>
          <option value="1">선택사항 1</option>
          <option value="2">선택사항 2</option>
          <option value="3">선택사항 3</option>
          <option value="4">선택사항 4</option>
          <option value="5">선택사항 5</option>
        </select>
        <i className="ic-caret" aria-hidden></i>
      </div>
    </div>
  );
};

export default OrderInputs;
