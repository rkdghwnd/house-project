import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import BrowserCartItemOption from './BrowserCartItemOption';
import productSlice from '../../reducers/productSlice';
import { CartItem, CartProductType } from '../../types/stateTypes';
import { RootState } from '../../reducers';

const BrowserCartProduct = ({
  Cart_product,
  brand_name,
  free_delivery,
  id,
  image_url,
  selling_price,
  product_name,
}: CartItem) => {
  const dispatch = useDispatch();
  const checkedBrowserCartIds = useSelector(
    (state: RootState) => state.product.checkedBrowserCartIds
  );
  const productTotalCount = Cart_product.reduce((acc, cur) => {
    return acc + cur.product_count;
  }, 0);
  const ProductTotalCost = (productTotalCount * selling_price).toLocaleString();

  const handleSingleCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        productSlice.actions.handleSingleCheckBrowserCartItems({
          checked: e.currentTarget.checked,
          productId: id,
        })
      );
    },
    [id]
  );

  const removeCartProduct = useCallback(() => {
    dispatch(
      productSlice.actions.removeBrowserCartProduct({
        productIds: [id],
      })
    );
  }, [id]);

  return (
    <article className="browser-cart-product">
      <header className="browser-cart-product-header">{brand_name} 배송</header>
      <div className="browser-cart-product-main">
        <div className="browser-cart-product-item">
          <input
            type="checkbox"
            checked={checkedBrowserCartIds.includes(id)}
            onChange={handleSingleCheck}
          />
          <Link to={`/productions/${id}`}>
            <div className="browser-cart-product-item-content">
              <div className="item-image-container">
                <img src={image_url} alt="상품 이미지" />
              </div>

              <div className="item-desc">
                <p>{product_name}</p>
                <span>
                  {free_delivery ? '무료' : '유료'}
                  배송&nbsp;|&nbsp;일반택배
                </span>
              </div>
            </div>
          </Link>

          <button className="btn-ghost" onClick={removeCartProduct}>
            <i className="ic-close"></i>
          </button>
        </div>
        {Cart_product?.map((option) => {
          return (
            <BrowserCartItemOption
              key={shortid.generate()}
              {...option}
              sellingPrice={selling_price}
            />
          );
        })}

        <div className="browser-cart-product-total">
          <div className="browser-cart-product-total-button"></div>
          <h2>{ProductTotalCost}원</h2>
        </div>
      </div>

      <footer className="browser-cart-product-footer">
        <span>배송비 {free_delivery ? '무료' : '3000원'}</span>
      </footer>
    </article>
  );
};

export default BrowserCartProduct;
