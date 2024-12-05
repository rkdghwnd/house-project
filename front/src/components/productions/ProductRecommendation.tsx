import { forwardRef, LegacyRef } from 'react';
import StoreItem from '../home/StoreItem';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { RootState } from '../../reducers';

const ProductRecommendation = (props: {}, ref: LegacyRef<HTMLBaseElement>) => {
  const recommendedProducts = useSelector(
    (state: RootState) => state.productions.recommendedProducts
  );

  return (
    <>
      <section
        className="product-section product-recommendation"
        id="product-recommendation"
        role="tabpanel"
        ref={ref}
      >
        <header className="product-section-header">
          <h1 className="title">비슷한 상품</h1>
        </header>

        <div className="product-section-content">
          <ul className="product-list">
            {recommendedProducts.map((product) => {
              return (
                <li key={shortid.generate()} className="product-item">
                  <StoreItem {...product} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div className="product-section-divider sm-only" aria-hidden></div>
    </>
  );
};

export default forwardRef(ProductRecommendation);
