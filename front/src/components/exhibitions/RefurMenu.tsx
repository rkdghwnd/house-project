import React, { RefObject, useCallback } from 'react';
import { TOP_HEADER_DESKTOP, TOP_HEADER_MOBILE } from '../../datas/constant';

type RefurMenuPropsType = {
  imagePath: string;
  popularProductTab: RefObject<HTMLImageElement>;
  brandProductTab: RefObject<HTMLImageElement>;
  catagoryProductTab: RefObject<HTMLImageElement>;
};

const RefurMenu = ({
  imagePath,
  popularProductTab,
  brandProductTab,
  catagoryProductTab,
}: RefurMenuPropsType) => {
  const scrollIntoTab = useCallback(
    (element: RefObject<HTMLImageElement>) => () => {
      if (!element.current) {
        return;
      }
      const responsiveHeight =
        window.innerWidth >= 768
          ? TOP_HEADER_DESKTOP + 62
          : TOP_HEADER_MOBILE + 31;
      const top =
        element.current.getBoundingClientRect().top - responsiveHeight;
      const option: ScrollToOptions = { behavior: 'smooth', top };
      window.scrollBy(option);
    },
    []
  );

  return (
    <div className="refur-menu">
      <img src={imagePath} alt="refur-menu-image" />
      <a onClick={scrollIntoTab(popularProductTab)}></a>
      <a onClick={scrollIntoTab(brandProductTab)}></a>
      <a onClick={scrollIntoTab(catagoryProductTab)}></a>
    </div>
  );
};

export default RefurMenu;
