import React, { useCallback, useReducer, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

// toggleActiveTab
// 버튼 클릭하면(onClick) 버튼의 부모요소에 is-active 추가
// 기존의 li 요소에 is-active 삭제

// scrollToTabPanel
// 버튼 클릭하면(onClick) 버튼의 부모요소의 aria-labelledby 요소값 가져오기
// aria-labelledby 값으로 id값 querySelector -> tabPanel 정의
// element.scrollIntoView(element2)

const ProductTab = () => {
  const [prevTab, setPrevTab] = useState();
  const {
    productSpecScrollY,
    productReviewScrollY,
    productInquiryScrollY,
    productShipmentScrollY,
    productRecommendationScrollY,
  } = useSelector((state) => state.scroll);

  const onClickTab = useCallback(
    (e) => {
      // active
      if (prevTab) {
        prevTab.classList.remove('is-active');
      }
      e.currentTarget.parentNode.classList.add('is-active');
      setPrevTab(e.currentTarget.parentNode);

      // scroll
      const tabPanelId =
        e.currentTarget.parentNode.getAttribute('aria-labelledby');

      const option = { top: 0, behavior: 'smooth' };

      if (tabPanelId === 'product-spec') {
        option.top = productSpecScrollY;
      } else if (tabPanelId === 'product-review') {
        option.top = productReviewScrollY;
      } else if (tabPanelId === 'product-inquiry') {
        option.top = productInquiryScrollY;
      } else if (tabPanelId === 'product-shipment') {
        option.top = productShipmentScrollY;
      } else if (tabPanelId === 'product-recommendation') {
        option.top = productRecommendationScrollY;
      }
      window.scrollTo(option);
    },
    [
      prevTab,
      productSpecScrollY,
      productReviewScrollY,
      productInquiryScrollY,
      productShipmentScrollY,
      productRecommendationScrollY,
    ]
  );

  return (
    <div className="product-tab">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <ul className="product-tab-list" role="tablist">
              <li
                className="product-tab-item"
                role="tab"
                aria-labelledby="product-spec"
              >
                <button type="button" onClick={onClickTab}>
                  상품정보
                </button>
              </li>
              <li
                className="product-tab-item"
                role="tab"
                aria-labelledby="product-review"
              >
                <button type="button" onClick={onClickTab}>
                  리뷰
                  <strong className="badge" aria-label="566개 리뷰">
                    566
                  </strong>
                </button>
              </li>
              <li
                className="product-tab-item"
                role="tab"
                aria-labelledby="product-inquiry"
              >
                <button type="button" onClick={onClickTab}>
                  문의
                  <strong className="badge" aria-label="96개 문의">
                    96
                  </strong>
                </button>
              </li>
              <li
                className="product-tab-item"
                role="tab"
                aria-labelledby="product-shipment"
              >
                <button type="button" onClick={onClickTab}>
                  배송/환불
                </button>
              </li>
              <li
                className="product-tab-item"
                role="tab"
                aria-labelledby="product-recommendation"
              >
                <button type="button" onClick={onClickTab}>
                  추천
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
