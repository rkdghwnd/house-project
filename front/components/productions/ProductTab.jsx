import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import _ from 'underscore';
import {
  activeTabOnClick,
  createDetectPositionFunc,
  scrollByProductPosition,
} from '../../hooks/productTabPanel';
import { useSelector } from 'react-redux';

const ProductTab = (props) => {
  const { productionReviews, productionInquiry } = useSelector(
    (state) => state.productions
  );
  const [currentActiveTab, setCurrentActiveTab] = useState(null);

  const specTab = useRef();
  const reviewTab = useRef();
  const inquiryTab = useRef();
  const shipmentTab = useRef();
  const recommendationTab = useRef();

  const panelRefs = {
    ...props,
  };

  const tabRefs = useMemo(
    () => ({
      specTab,
      reviewTab,
      inquiryTab,
      shipmentTab,
      recommendationTab,
    }),
    [specTab, reviewTab, inquiryTab, shipmentTab, recommendationTab]
  );

  const onClickTab = useCallback(
    (e) => {
      activeTabOnClick(currentActiveTab, e, setCurrentActiveTab);
      scrollByProductPosition(e, panelRefs);
    },
    [currentActiveTab, panelRefs]
  );

  useEffect(() => {
    setCurrentActiveTab(panelRefs.productShipmentRef.current);
  }, [panelRefs.productShipmentRef]);

  useEffect(() => {
    const detectTabPanelPosition = createDetectPositionFunc(
      panelRefs,
      tabRefs,
      currentActiveTab,
      setCurrentActiveTab
    );

    window.addEventListener('load', detectTabPanelPosition);
    window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000));
    window.addEventListener('scroll', _.throttle(detectTabPanelPosition, 300));

    return () => {
      window.removeEventListener('load', detectTabPanelPosition);
      window.removeEventListener('resize', detectTabPanelPosition);
      window.removeEventListener('scroll', detectTabPanelPosition);
    };
  }, [panelRefs, tabRefs, currentActiveTab]);

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
                    {productionReviews?.count}
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
                    {productionInquiry?.count}
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
