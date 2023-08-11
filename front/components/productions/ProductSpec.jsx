import React, { forwardRef } from 'react';

const ProductSpec = (props, ref) => {
  return (
    <section
      className="product-section product-spec is-open"
      id="product-spec"
      role="tabpanel"
      ref={ref}
    >
      <header className="product-section-header sm-hidden">
        <h1 className="title">상품 정보</h1>
      </header>

      <div className="product-section-content">
        <div className="button-wrapper sm-only">
          <button className="btn-primary btn-55" type="button">
            펼치기
          </button>
        </div>

        <figure>
          <img src="/assets/images/img-detail-01.jpg" alt="" />
          <figcaption className="visually-hidden">
            보아르 전기 히터 상세 이미지 01
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/images/img-detail-02.jpg" alt="" />
          <figcaption className="visually-hidden">
            보아르 전기 히터 상세 이미지 02
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/images/img-detail-03.jpg" alt="" />
          <figcaption className="visually-hidden">
            보아르 전기 히터 상세 이미지 03
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/images/img-detail-04.jpg" alt="" />
          <figcaption className="visually-hidden">
            보아르 전기 히터 상세 이미지 04
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/images/img-detail-05.jpg" alt="" />
          <figcaption className="visually-hidden">
            보아르 전기 히터 상세 이미지 05
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/images/img-detail-06.jpg" alt="" />
          <figcaption className="visually-hidden">
            보아르 전기 히터 상세 이미지 06
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default forwardRef(ProductSpec);
