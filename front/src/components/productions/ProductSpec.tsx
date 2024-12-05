import { forwardRef, LegacyRef } from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { RootState } from '../../reducers';

const ProductSpec = (props: {}, ref: LegacyRef<HTMLBaseElement>) => {
  const productDescriptionImages = useSelector(
    (state: RootState) => state.productions.productDescriptionImages
  );
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
        {productDescriptionImages.map((src, index) => {
          return (
            <figure key={shortid.generate()}>
              <img src={src} alt="상품 상세 이미지" />
              <figcaption className="visually-hidden">
                상품 상세 이미지 {index + 1}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default forwardRef(ProductSpec);
