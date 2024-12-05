import { MouseEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import productSlice from '../../reducers/productSlice';

const BrowserCartItemOption = ({
  product_count,
  product_option,
  sellingPrice,
}: {
  product_count: number;
  product_option: string;
  sellingPrice: number;
}) => {
  const dispatch = useDispatch();
  const removeProductOption = useCallback(() => {
    dispatch(
      productSlice.actions.removeProductOptionInBrowserCart({
        optionName: product_option,
      })
    );
  }, [product_option]);

  const updateProductOptionCount = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      dispatch(
        productSlice.actions.updateProductOptionCountInBrowserCart({
          count: parseInt(e.currentTarget.value),
          optionName: product_option,
        })
      );
    },
    [product_option]
  );

  return (
    <div className="cart-item-option">
      <div className="cart-item-option-title">
        <h2>{product_option}</h2>
        <button className="btn-ghost" onClick={removeProductOption}>
          <i className="ic-close"></i>
        </button>
      </div>
      <div className="cart-item-option-cost">
        <div className="item-quantity">
          <button onClick={updateProductOptionCount} value={-1}>
            <span>ㅡ</span>
          </button>
          <button>
            <span>{product_count}</span>
          </button>
          <button onClick={updateProductOptionCount} value={1}>
            <span>+</span>
          </button>
        </div>
        <div className="item-price">
          <span>{(sellingPrice * product_count).toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
};

export default BrowserCartItemOption;
