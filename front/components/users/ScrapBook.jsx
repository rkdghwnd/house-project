import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ScrapBook = () => {
  return (
    <section className="scrap-book">
      <div className="scrap-book-header">
        <h2>스크랩북</h2>
        <button className="btn-40 btn-outlined">
          <AiOutlineShareAlt className="share-icon" />
          <span>공유하기</span>
        </button>
      </div>
      <div className="profile-image">
        <img src="/assets/images/profile-image-basic.png" />
        <h3>강호중6</h3>
      </div>

      <div className="edit-menu">
        <button>편집</button>
      </div>

      <article className="scrap-book-list">
        <div className="scrap-book-list-item">
          <Link to="/productions/1">
            <img src="/assets/images/bookmark/bookmark_sample.avif" />
          </Link>
          <span>상품</span>
        </div>
        <div className="scrap-book-list-item">
          <Link to="/productions/1">
            <img src="/assets/images/bookmark/bookmark_sample.avif" />
          </Link>
          <span>상품</span>
        </div>
        <div className="scrap-book-list-item">
          <Link to="/productions/1">
            <img src="/assets/images/bookmark/bookmark_sample.avif" />
          </Link>
          <span>상품</span>
        </div>
        <div className="scrap-book-list-item">
          <Link to="/productions/1">
            <img src="/assets/images/bookmark/bookmark_sample.avif" />
          </Link>
          <span>상품</span>
        </div>
      </article>
    </section>
  );
};

export default ScrapBook;
