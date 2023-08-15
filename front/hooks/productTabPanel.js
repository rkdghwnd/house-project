import { TOP_HEADER_DESKTOP, TOP_HEADER_MOBILE } from './constant';

export let disableUpdating = false;

export const activeTabOnClick = (currentActiveTab, e, setCurrentActiveTab) => {
  if (currentActiveTab !== e.currentTarget.parentNode) {
    disableUpdating = true;

    if (currentActiveTab) {
      e.currentTarget.parentNode.classList.add('is-active');
      currentActiveTab.classList.remove('is-active');
    }
    setCurrentActiveTab(e.currentTarget.parentNode);

    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
  }
};

export const scrollByProductPosition = (e, panelRefs) => {
  const tabPanelId = e.currentTarget.parentNode.getAttribute('aria-labelledby');
  const option = { top: 0, behavior: 'smooth' };

  const headerHeight =
    window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE;

  if (tabPanelId === 'product-spec') {
    option.top =
      panelRefs.productSpecRef.current.getBoundingClientRect().top -
      headerHeight;
  } else if (tabPanelId === 'product-review') {
    option.top =
      panelRefs.productReviewRef.current.getBoundingClientRect().top -
      headerHeight;
  } else if (tabPanelId === 'product-inquiry') {
    option.top =
      panelRefs.productInquiryRef.current.getBoundingClientRect().top -
      headerHeight;
  } else if (tabPanelId === 'product-shipment') {
    option.top =
      panelRefs.productShipmentRef.current.getBoundingClientRect().top -
      headerHeight;
  } else if (tabPanelId === 'product-recommendation') {
    option.top =
      panelRefs.productRecommendationRef.current.getBoundingClientRect().top -
      headerHeight;
  }

  window.scrollBy(option);
};

export const getProductPosition = (panelRefs) => {
  const productPositionMap = {};
  if (
    panelRefs.productSpecRef.current &&
    panelRefs.productReviewRef.current &&
    panelRefs.productInquiryRef.current &&
    panelRefs.productShipmentRef.current &&
    panelRefs.productRecommendationRef.current
  ) {
    productPositionMap['product-spec'] =
      window.scrollY +
      panelRefs.productSpecRef.current.getBoundingClientRect().top;
    productPositionMap['product-review'] =
      window.scrollY +
      panelRefs.productReviewRef.current.getBoundingClientRect().top;
    productPositionMap['product-inquiry'] =
      window.scrollY +
      panelRefs.productInquiryRef.current.getBoundingClientRect().top;
    productPositionMap['product-shipment'] =
      window.scrollY +
      panelRefs.productShipmentRef.current.getBoundingClientRect().top;
    productPositionMap['product-recommendation'] =
      window.scrollY +
      panelRefs.productRecommendationRef.current.getBoundingClientRect().top;

    return productPositionMap;
  }
};

export const updateActiveTabOnScroll = (
  productTabPanelPositionMap,
  tabRefs,
  currentActiveTab,
  setCurrentActiveTab
) => {
  // 현재 뷰포트의 Y축 위치
  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768
      ? TOP_HEADER_DESKTOP + 80
      : TOP_HEADER_MOBILE + 8);

  let newActiveTab;

  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = tabRefs.recommendationTab.current;
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = tabRefs.shipmentTab.current;
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = tabRefs.inquiryTab.current;
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = tabRefs.reviewTab.current;
  } else {
    newActiveTab = tabRefs.specTab.current;
  }

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

export const createDetectPositionFunc =
  (panelRefs, tabRefs, currentActiveTab, setCurrentActiveTab) => () => {
    if (disableUpdating) {
      return;
    }

    const productTabPanelPositionMap = getProductPosition(panelRefs);

    updateActiveTabOnScroll(
      productTabPanelPositionMap,
      tabRefs,
      currentActiveTab,
      setCurrentActiveTab
    );
  };

export const createtabList = (tabRefs) => [
  {
    ref: tabRefs.specTab,
    ariaLabelledBy: 'product-spec',
    title: '상품정보',
    isCount: false,
  },
  {
    ref: tabRefs.reviewTab,
    ariaLabelledBy: 'product-review',
    title: '리뷰',
    isCount: true,
    count: 566,
  },
  {
    ref: tabRefs.inquiryTab,
    ariaLabelledBy: 'product-inquiry',
    title: '문의',
    isCount: true,
    count: 96,
  },
  {
    ref: tabRefs.shipmentTab,
    ariaLabelledBy: 'product-shipment',
    title: '배송/환불',
    isCount: false,
  },
  {
    ref: tabRefs.recommendationTab,
    ariaLabelledBy: 'product-recommendation',
    title: '추천',
    isCount: false,
  },
];
