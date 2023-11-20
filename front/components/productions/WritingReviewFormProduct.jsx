import React from 'react';
import { useSelector } from 'react-redux';

const WritingReviewFormProduct = () => {
  const { writingReviewFormData } = useSelector((state) => state.productions);
  return (
    <div className="writing-review-form-product">
      <img
        src={writingReviewFormData?.Product?.image_url}
        alt="product-image"
      />
      <div className="writing-review-form-product-right">
        <span>{writingReviewFormData?.Product?.brand_name}</span>
        <p>{writingReviewFormData?.Product?.product_name}</p>
      </div>
    </div>
  );
};

export default WritingReviewFormProduct;
