import { Dispatch, MouseEvent, RefObject, UIEvent } from 'react';
import { TOP_HEADER_DESKTOP, TOP_HEADER_MOBILE } from '../datas/constant';

export let disableUpdating = false;

export const activeTabOnClick = (
  currentActiveTab: HTMLDivElement | HTMLBaseElement | any,
  e: MouseEvent<HTMLButtonElement>,
  setCurrentActiveTab: Dispatch<React.SetStateAction<ParentNode | null>>
) => {
  if (!e.currentTarget.parentNode) {
    return;
  }
  if (currentActiveTab !== e.currentTarget.parentNode) {
    disableUpdating = true;

    if (currentActiveTab) {
      (e.currentTarget.parentNode as Element).classList.add('is-active');
      currentActiveTab.classList.remove('is-active');
    }
    setCurrentActiveTab(e.currentTarget.parentNode);

    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
  }
};

export const scrollByProductPosition = (
  e: UIEvent,
  panelRefs: {
    [key in string]: RefObject<HTMLBaseElement | HTMLDivElement>;
  }
) => {
  if (
    !e.currentTarget ||
    !panelRefs.productSpecRef.current ||
    !panelRefs.productReviewRef.current ||
    !panelRefs.productInquiryRef.current ||
    !panelRefs.productShipmentRef.current ||
    !panelRefs.productRecommendationRef.current
  ) {
    return;
  }
  const tabPanelId = (e.currentTarget.parentNode as Element).getAttribute(
    'aria-labelledby'
  );
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

  window.scrollBy(option as ScrollToOptions);
};

export const getProductPosition = (panelRefs: {
  [key in string]: RefObject<HTMLBaseElement | HTMLDivElement>;
}) => {
  if (
    !panelRefs.productSpecRef ||
    !panelRefs.productReviewRef ||
    !panelRefs.productInquiryRef ||
    !panelRefs.productShipmentRef ||
    !panelRefs.productRecommendationRef
  ) {
    return;
  }

  const productPositionMap: {
    [key in string]: number;
  } = {};

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
  productTabPanelPositionMap: { [key in string]: number } | undefined,
  tabRefs: { [key in string]: RefObject<HTMLLIElement> },
  currentActiveTab: ParentNode,
  setCurrentActiveTab: Dispatch<React.SetStateAction<ParentNode | null>>
) => {
  if (!productTabPanelPositionMap) {
    return;
  }
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
        (currentActiveTab as HTMLBaseElement).classList.remove('is-active');
      }
      setCurrentActiveTab(newActiveTab);
    }
  }
};

export const createDetectPositionFunc =
  (
    panelRefs: { [key in string]: RefObject<HTMLBaseElement | HTMLDivElement> },
    tabRefs: { [key in string]: RefObject<HTMLLIElement> },
    currentActiveTab: ParentNode,
    setCurrentActiveTab: Dispatch<React.SetStateAction<ParentNode | null>>
  ) =>
  () => {
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
