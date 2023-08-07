import React from 'react';
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
      <ProductTab />
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <UserGalleryDesktop />
            <ProductSpec />
            <ProductTable />
            <ProductReview />
            <ProductInquiry />
            <ProductShipment />
            <ProductRecommendation />
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
