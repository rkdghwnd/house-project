import React, { useCallback } from 'react';
import OrderInputs from './OrderInputs';
import OrderCheckouts from './OrderCheckouts';
import ProductBookmark from './ProductBookmark';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import OrderSummary from './OrderSummary';
import { useNavigate } from 'react-router-dom';
import { addFinalOrder } from '../../actions/finalorder';
import productSlice from '../../reducers/productSlice';

const OrderForm = ({ float }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  const { selectedOptions, productions } = useSelector(
    (state) => state.productions
  );

  const addInCart = useCallback(() => {
    const cartOptionDatas = selectedOptions
      .filter((option) => option.optionCount)
      .map((option) => {
        return {
          optionName: option.optionName,
          optionCount: option.optionCount,
          productId: productions.id,
        };
      });
    if (cartOptionDatas.length === 0) {
      dispatch(
        modalSlice.actions.openMessageModal({
          message: '상품을 선택해주세요',
        })
      );
    } else {
      dispatch(
        productSlice.actions.addProductInBrowserCart({
          cartOptionDatas,
          productions,
        })
      );
      dispatch(modalSlice.actions.openCartModal());
      dispatch(productSlice.actions.updateBroswerCartProductCount());
    }
  }, [selectedOptions, productions.id, me]);

  const buyNow = useCallback(() => {
    if (me) {
      // 로그인 했을 때
      const countedOptions = selectedOptions.filter(
        (option) => option.optionCount > 0
      );
      if (countedOptions.length === 0) {
        // 상품을 선택하지 않은 경우
        dispatch(
          modalSlice.actions.openMessageModal({
            message: '상품을 선택해주세요',
          })
        );
      } else {
        const selectedProduct = {
          id: productions.id,
          product_name: productions.product_name,
          brand_name: productions.brand_name,
          image_url: productions.image_url,
          free_delivery: productions.free_delivery,
          selling_price: productions.selling_price,
        };
        // 선택한 상품을 final_order에 추가하고 navigate('/final_order')
        const optionData = selectedOptions
          .filter((option) => option.optionCount > 0)
          .map(({ id, optionCount, optionName }) => {
            return {
              id: id,
              product_count: optionCount,
              product_option: optionName,
              UserId: me.id,
              ProductId: productions.id,
            };
          });
        selectedProduct.Cart_product = optionData;

        dispatch(
          addFinalOrder({
            cart: [selectedProduct],
          })
        ).then((result) => {
          if (addFinalOrder.fulfilled.match(result)) {
            navigate('/final_order');
          }
        });
      }
    } else {
      // 로그인 안 했을 때
      dispatch(modalSlice.actions.openLogInModal());
    }
  }, [me, selectedOptions, productions]);

  return (
    <section
      className={`${float ? 'floating-order-form' : ''} order-form lg-only `}
    >
      <OrderInputs />
      <OrderCheckouts />
      <OrderSummary />
      <div className="button-group">
        {float && <ProductBookmark isInForm={true} />}
        <button
          className="btn-outlined btn-55"
          type="button"
          onClick={addInCart}
        >
          장바구니
        </button>
        <button className="btn-primary btn-55" type="submit" onClick={buyNow}>
          바로구매
        </button>
      </div>
    </section>
  );
};

export default OrderForm;
