import React, { useRef } from 'react';
import BreadCrumb from './BreadCrumb';
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';
import OrderForm from './OrderForm';
import ProductTab from './ProductTab';
import UserGalleryMobile from './UserGalleryMobile';
import UserGalleryDesktop from './UserGalleryDesktop';
import ProductSpec from './ProductSpec';
import ProductReview from './ProductReview';
import ProductInquiry from './ProductInquiry';
import ProductShipment from './ProductShipment';
import ProductRecommendation from './ProductRecommendation';
import ProductTable from './ProductTable';
import OrderCTA from './OrderCTA';

const ProductShow = () => {
  const productSpecRef = useRef();
  const productReviewRef = useRef();
  const productInquiryRef = useRef();
  const productShipmentRef = useRef();
  const productRecommendationRef = useRef();

  return (
    <main className="product-show">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <BreadCrumb />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-6 col-lg-7">
            <ProductCarousel />
          </div>
          <div className="col-sm-4 col-md-6 col-lg-5">
            <ProductInfo />
            <OrderForm float={false} />
          </div>
        </div>
        <div className="row sm-only">
          <div className="col-sm-4">
            <UserGalleryMobile />
          </div>
        </div>
      </div>
      <ProductTab
        productSpecRef={productSpecRef}
        productReviewRef={productReviewRef}
        productInquiryRef={productInquiryRef}
        productShipmentRef={productShipmentRef}
        productRecommendationRef={productRecommendationRef}
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <UserGalleryDesktop />
            <ProductSpec ref={productSpecRef} />
            <ProductTable />
            <ProductReview ref={productReviewRef} />
            <ProductInquiry ref={productInquiryRef} />
            <ProductShipment ref={productShipmentRef} />
            <ProductRecommendation ref={productRecommendationRef} />
          </div>
          <div className="col-lg-4 lg-only">
            <OrderForm float={true} />
          </div>
        </div>
      </div>
      <OrderCTA />
    </main>
  );
};

export default ProductShow;
