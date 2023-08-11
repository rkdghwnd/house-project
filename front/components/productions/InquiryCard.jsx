import React from 'react';

const InquiryCard = () => {
  return (
    <article className="inquiry-card">
      <header className="inquiry-card-header">
        <h3 className="visually-hidden">지* 님이 남기신 문의</h3>

        <dl className="detail">
          <dt className="visually-hidden">구매 여부</dt>
          <dd>구매</dd>
          <dt className="visually-hidden">문의 유형</dt>
          <dd>상품</dd>
          <dt className="visually-hidden">답변 여부</dt>
          <dd>미답변</dd>
        </dl>

        <div className="misc">
          <strong>지*</strong>
          <time dateTime="2021-01-02 21:41">2021년 1월 2일 21시 41분</time>
        </div>
      </header>

      <div className="inquiry-card-body">
        <div className="inquiry-content">
          <span aria-label="문의 내용">Q</span>
          <p>
            상품받았는데 <br />
            사용하면서 보니까 불들어오는곳 옆에
            <br />
            하얀 부분이 갈색으로 얼룩져있는데 불량인가요...?
            <br />
            위험하지는 않겠죠? 다른분들 후기사진에는 다 깨끗한 것 같아서요!
            <br />
            사진첨부가없어서 텍스트로 설명하려 하니 애매하네요ㅠㅠ
          </p>
        </div>
      </div>
    </article>
  );
};

export default InquiryCard;
