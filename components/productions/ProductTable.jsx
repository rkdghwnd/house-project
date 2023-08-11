import React, { forwardRef } from 'react';

const ProductTable = () => {
  return (
    <>
      <table className="product-table">
        <tbody>
          <tr>
            <th scope="row">품명 및 모델명</th>
            <td>VO-HT015</td>
          </tr>
          <tr>
            <th scope="row">KC 인증 필 유무</th>
            <td>SU071586-19003</td>
          </tr>
          <tr>
            <th scope="row">정격전압, 소비전력</th>
            <td>AC220V, 60Hz, 400W</td>
          </tr>
          <tr>
            <th scope="row">에너지소비효율등급</th>
            <td>해당사항없음</td>
          </tr>
          <tr>
            <th scope="row">동일모델의 출시년월</th>
            <td>2019.11</td>
          </tr>
          <tr>
            <th scope="row">제조자, 수입품의 경우 수입자를 함께 표기</th>
            <td>보아르주식회사</td>
          </tr>
          <tr>
            <th scope="row">제조국</th>
            <td>중국</td>
          </tr>
          <tr>
            <th scope="row">크기</th>
            <td>338*122*300 mm</td>
          </tr>
          <tr>
            <th scope="row">냉난방면적</th>
            <td>개인용</td>
          </tr>
          <tr>
            <th scope="row">추가설치비용</th>
            <td>해당사항없음</td>
          </tr>
          <tr>
            <th scope="row">품질보증기준</th>
            <td>구매일로부터 1년 이내 무상 A/S가능</td>
          </tr>
          <tr>
            <th scope="row">A/S 책임자와 전화번호</th>
            <td>1661-4555</td>
          </tr>
        </tbody>
      </table>
      <div className="product-section-divider sm-only" aria-hidden></div>
    </>
  );
};

export default forwardRef(ProductTable);
