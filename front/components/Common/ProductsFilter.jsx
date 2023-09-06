import React from 'react';

const ProductsFilter = () => {
  return (
    <section className="products-filter">
      <div className="products-filter-header sm-only">
        <span>전체 42,431개</span>
      </div>
      <div className="products-filter-buttons">
        <button className="btn-32 btn-outlined is-active">
          <i className="ic-check"></i>빠른가구배송
        </button>
        <button className="btn-32 btn-outlined">
          <i className="ic-check"></i>2인
        </button>
        <button className="btn-32 btn-outlined">
          사용인원<i className="ic-chevron"></i>
        </button>
        <button className="btn-32 btn-outlined">
          프레임소재<i className="ic-chevron"></i>
        </button>
        <button className="btn-32 btn-outlined">
          색상<i className="ic-chevron"></i>
        </button>
        <button className="btn-32 btn-outlined">
          우드톤<i className="ic-chevron"></i>
        </button>
        <button className="btn-32 btn-outlined">
          상판 사이즈<i className="ic-chevron"></i>
        </button>
        <button className="btn-32 btn-outlined">
          높이<i className="ic-chevron"></i>
        </button>
        <button className="btn-32 btn-outlined">
          특가<i className="ic-chevron"></i>
        </button>
        <button className="btn-32 btn-outlined">
          상판 소재<i className="ic-chevron"></i>
        </button>
      </div>
    </section>
  );
};

export default ProductsFilter;
