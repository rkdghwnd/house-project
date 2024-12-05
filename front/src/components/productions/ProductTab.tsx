import {
  LegacyRef,
  MouseEvent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import _ from 'underscore';
import {
  activeTabOnClick,
  createDetectPositionFunc,
  scrollByProductPosition,
} from '../../hooks/productTabPanel';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

type ProductTabPropsType = {
  productSpecRef: RefObject<HTMLBaseElement>;
  productReviewRef: RefObject<HTMLBaseElement>;
  productInquiryRef: RefObject<HTMLBaseElement>;
  productShipmentRef: RefObject<HTMLDivElement>;
  productRecommendationRef: RefObject<HTMLBaseElement>;
};

const ProductTab = (props: ProductTabPropsType) => {
  const productionReviews = useSelector(
    (state: RootState) => state.productions.productionReviews
  );
  const productionInquiry = useSelector(
    (state: RootState) => state.productions.productionInquiry
  );
  const [currentActiveTab, setCurrentActiveTab] = useState<ParentNode | null>(
    null
  );

  const specTab = useRef<HTMLLIElement>(null);
  const reviewTab = useRef<HTMLLIElement>(null);
  const inquiryTab = useRef<HTMLLIElement>(null);
  const shipmentTab = useRef<HTMLLIElement>(null);
  const recommendationTab = useRef<HTMLLIElement>(null);

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
    (e: MouseEvent<HTMLButtonElement>) => {
      activeTabOnClick(currentActiveTab, e, setCurrentActiveTab);
      scrollByProductPosition(e, panelRefs);
    },
    [currentActiveTab, panelRefs]
  );

  useEffect(() => {
    if (panelRefs.productShipmentRef) {
      setCurrentActiveTab(panelRefs.productShipmentRef.current);
    }
  }, [panelRefs.productShipmentRef]);

  useEffect(() => {
    const detectTabPanelPosition = createDetectPositionFunc(
      panelRefs,
      tabRefs,
      currentActiveTab!,
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
