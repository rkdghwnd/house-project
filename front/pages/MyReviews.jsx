import React from 'react';
import Pagination from '../components/productions/Pagination';
import MyReviewItem from '../components/production_reviews/MyReviewItem';

const MyReviews = () => {
  return (
    <section className="my-reviews">
      <article className="my-reviews-main">
        <div className="my-reviews-main-sort">
          <button className="btn-32 btn-outlined">베스트순</button>
          <button className="btn-32 btn-outlined is-active">최신순</button>
        </div>
        <div className="my-reviews-main-contents">
          <MyReviewItem />
          <MyReviewItem />
          <MyReviewItem />
          <MyReviewItem />
          <Pagination />
        </div>
      </article>
    </section>
  );
};

export default MyReviews;
