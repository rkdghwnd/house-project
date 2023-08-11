import React, { useCallback, useEffect, useRef, useState } from 'react';
import _ from 'underscore';

const ProductTab = ({
  productSpecRef,
  productReviewRef,
  productInquiryRef,
  productShipmentRef,
  productRecommendationRef,
}) => {
  const [currentActiveTab, setCurrentActiveTab] = useState(null);

  const specTab = useRef();
  const reviewTab = useRef();
  const inquiryTab = useRef();
  const shipmentTab = useRef();
  const recommendationTab = useRef();

  const TOP_HEADER_DESKTOP = 80 + 50 + 54;
  const TOP_HEADER_MOBILE = 50 + 40 + 40;

  const onClickTab = useCallback(
    (e) => {
      // active
      // if (currentActiveTab !== e.currentTarget.parentNode) {
      //   if (currentActiveTab) {
      //     e.currentTarget.parentNode.classList.add('is-active');
      //     currentActiveTab.classList.remove('is-active');
      //   }
      //   setCurrentActiveTab(e.currentTarget.parentNode);
      // }

      // scrollTo
      const tabPanelId =
        e.currentTarget.parentNode.getAttribute('aria-labelledby');
      const option = { top: 0, behavior: 'smooth' };

      const headerHeight =
        window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE;

      if (tabPanelId === 'product-spec') {
        option.top =
          productSpecRef.current.getBoundingClientRect().top - headerHeight;
      } else if (tabPanelId === 'product-review') {
        option.top =
          productReviewRef.current.getBoundingClientRect().top - headerHeight;
      } else if (tabPanelId === 'product-inquiry') {
        option.top =
          productInquiryRef.current.getBoundingClientRect().top - headerHeight;
      } else if (tabPanelId === 'product-shipment') {
        option.top =
          productShipmentRef.current.getBoundingClientRect().top - headerHeight;
      } else if (tabPanelId === 'product-recommendation') {
        option.top =
          productRecommendationRef.current.getBoundingClientRect().top -
          headerHeight;
      }

      window.scrollBy(option);
    },
    [currentActiveTab]
  );

  useEffect(() => {
    setCurrentActiveTab(productShipmentRef.current);
  }, []);

  useEffect(() => {
    const detectTabPanelPosition = () => {
      const productTabPanelPositionMap = {};
      if (
        productSpecRef.current &&
        productReviewRef.current &&
        productInquiryRef.current &&
        productShipmentRef.current &&
        productRecommendationRef.current
      ) {
        productTabPanelPositionMap['product-spec'] =
          window.scrollY + productSpecRef.current.getBoundingClientRect().top;
        productTabPanelPositionMap['product-review'] =
          window.scrollY + productReviewRef.current.getBoundingClientRect().top;
        productTabPanelPositionMap['product-inquiry'] =
          window.scrollY +
          productInquiryRef.current.getBoundingClientRect().top;
        productTabPanelPositionMap['product-shipment'] =
          window.scrollY +
          productShipmentRef.current.getBoundingClientRect().top;
        productTabPanelPositionMap['product-recommendation'] =
          window.scrollY +
          productRecommendationRef.current.getBoundingClientRect().top;

        updateActiveTabOnScroll(productTabPanelPositionMap);
      }
    };

    const updateActiveTabOnScroll = (productTabPanelPositionMap) => {
      // 현재 뷰포트의 Y축 위치
      const scrolledAmount =
        window.scrollY +
        (window.innerWidth >= 768
          ? TOP_HEADER_DESKTOP + 80
          : TOP_HEADER_MOBILE + 8);

      let newActiveTab;

      if (
        scrolledAmount >= productTabPanelPositionMap['product-recommendation']
      ) {
        newActiveTab = recommendationTab.current;
      } else if (
        scrolledAmount >= productTabPanelPositionMap['product-shipment']
      ) {
        newActiveTab = shipmentTab.current;
      } else if (
        scrolledAmount >= productTabPanelPositionMap['product-inquiry']
      ) {
        newActiveTab = inquiryTab.current;
      } else if (
        scrolledAmount >= productTabPanelPositionMap['product-review']
      ) {
        newActiveTab = reviewTab.current;
      } else {
        newActiveTab = specTab.current;
      }

      // const bodyHeight =
      //   document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0);
      // console.log(window.scrollY + window.innerHeight - bodyHeight);

      // if (window.scrollY + window.innerHeight === bodyHeight) {
      //   newActiveTab = recommendationTab.current;
      // }

      if (newActiveTab) {
        if (newActiveTab !== currentActiveTab) {
          newActiveTab.classList.add('is-active');
          if (currentActiveTab) {
            currentActiveTab.classList.remove('is-active');
          }
          setCurrentActiveTab(newActiveTab);
        }
      }
    };

    window.addEventListener('load', detectTabPanelPosition);
    window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000));
    window.addEventListener('scroll', _.throttle(detectTabPanelPosition, 300));

    return () => {
      window.removeEventListener('load', detectTabPanelPosition);
      window.removeEventListener('resize', detectTabPanelPosition);
      window.removeEventListener('scroll', detectTabPanelPosition);
    };
  }, [
    currentActiveTab,
    recommendationTab,
    shipmentTab,
    inquiryTab,
    reviewTab,
    specTab,
  ]);

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
                ref={specTab}
              >
                <button type="button" onClick={onClickTab}>
                  상품정보
                </button>
              </li>
              <li
                className="product-tab-item"
                role="tab"
                aria-labelledby="product-review"
                ref={reviewTab}
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
                ref={inquiryTab}
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
                ref={shipmentTab}
              >
                <button type="button" onClick={onClickTab}>
                  배송/환불
                </button>
              </li>
              <li
                className="product-tab-item"
                role="tab"
                aria-labelledby="product-recommendation"
                ref={recommendationTab}
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
