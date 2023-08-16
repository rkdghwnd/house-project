import React, { useCallback } from 'react';
import { TOP_HEADER_DESKTOP, TOP_HEADER_MOBILE } from '../../hooks/constant';

const RefurMenu = ({
  imagePath,
  popularProductTab,
  brandProductTab,
  catagoryProductTab,
}) => {
  const scrollIntoTab = useCallback(
    (element) => () => {
      const responsiveHeight =
        window.innerWidth >= 768
          ? TOP_HEADER_DESKTOP + 62
          : TOP_HEADER_MOBILE + 31;
      const top =
        element.current.getBoundingClientRect().top - responsiveHeight;
      const option = { behavior: 'smooth', top };
      window.scrollBy(option);
    },
    []
  );

  return (
    <div className="refur-menu">
      <img src={imagePath} />
      <a href="javascript:;" onClick={scrollIntoTab(popularProductTab)}></a>
      <a href="javascript:;" onClick={scrollIntoTab(brandProductTab)}></a>
      <a href="javascript:;" onClick={scrollIntoTab(catagoryProductTab)}></a>
    </div>
  );
};

export default RefurMenu;
