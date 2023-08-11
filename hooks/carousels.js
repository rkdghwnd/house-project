const commonOptions = {
  navAsThumbnails: true,
  arrowKeys: true, // 방향키로 슬라이드 이동기능
  mouseDrag: true,
  preventScrollOnTouch: true, // 라이브러리 버그 수정을 위해 추가
};

export const productCarouselOption = {
  ...commonOptions,
  container: '.product-carousel .slider-list',
  controls: false, // prev, next button 비활성화
  navContainer: '.product-carousel .thumbnail-list',
  autoplay: true,
  autoplayHoverPause: true, // hover일때 autoplay 멈추기
  autoplayButtonOutput: false,
};

export const userGalleryMobileOption = {
  ...commonOptions,
  container: '.user-gallery.is-mobile .slider-list',
  gutter: 4,
  edgePadding: 16,
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  loop: false,
};

export const userGalleryDesktopOption = {
  ...commonOptions,
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6,
  edgePadding: 75,
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  loop: false,
};
