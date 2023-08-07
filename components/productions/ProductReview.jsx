import React, { useEffect, useRef } from 'react';
import ReviewScoreBoard from './ReviewScoreBoard';
import ReviewCard from './ReviewCard';
import Pagination from './Pagination';
import { useDispatch } from 'react-redux';
import scrollSlice from '../../reducers/scrollSlice';

const ProductReview = () => {
  const dispatch = useDispatch();
  const productReview = useRef();

  useEffect(() => {
    const scrollY = productReview.current.offsetTop + 360;
    dispatch(scrollSlice.actions.updateProductReviewScrollY(scrollY));
  }, [productReview]);

  return (
    <section
      className="product-section product-review"
      id="product-review"
      role="tabpanel"
      ref={productReview}
    >
      <header className="product-section-header">
        <h1 className="title">리뷰</h1>
        <strong className="badge" aria-label="566개">
          566
        </strong>
        <a className="text-button" href="/">
          리뷰쓰기
        </a>
      </header>

      <div className="product-section-content">
        <ReviewScoreBoard />

        <ol className="review-list">
          <li className="review-item">
            <ReviewCard />
          </li>

          {/* <!-- NOTE: 유저 이미지가 없는 경우 --> */}
          <li className="review-item">
            <article className="review-card">
              <header className="review-card-header">
                <h3 className="visually-hidden">우유파이 님이 작성한 리뷰</h3>

                <a
                  className="avatar-24"
                  href="/"
                  aria-label="우유파이 님의 프로필로 이동"
                ></a>

                <div className="info">
                  <a className="username" href="/">
                    <strong>우유파이</strong>
                  </a>

                  <div className="detail">
                    <div className="star-rating-13" aria-label="5.0점 / 5.0점">
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star"></i>
                    </div>

                    <div className="misc">
                      <time dateTime="2021-01-01"> 2021.01.01 </time>
                      <span>오늘의집 구매</span>
                    </div>
                  </div>
                </div>
              </header>

              <div className="review-card-body">
                <p>
                  작업실에서 손이 시려워서 책상 위에 올려서 쓸걸로 골랐습니다!
                  아주아주 뜨듯하고 크기도 적당하고 민트 사고싶엇지만 품절 ㅠㅠ
                </p>
              </div>

              <footer className="review-card-footer">
                <button className="btn-outlined btn-32" type="button">
                  도움이 돼요
                </button>

                <p>
                  <strong>
                    <span>12</span>명
                  </strong>
                  에게 도움이 되었습니다.
                </p>
              </footer>
            </article>
          </li>

          {/* <!-- NOTE: 유저가 리뷰 이미지를 올린 경우 --> */}
          <li className="review-item">
            <article className="review-card">
              <header className="review-card-header">
                <h3 className="visually-hidden">
                  고영희님이좋아합니다 님이 작성한 리뷰
                </h3>

                <a className="avatar-24" href="/">
                  <img
                    src="./assets/images/img-user-03.jpg"
                    alt="고영희님이좋아합니다"
                  />
                </a>

                <div className="info">
                  <a className="username" href="/">
                    <strong>고영희님이좋아합니다</strong>
                  </a>

                  <div className="detail">
                    <div className="star-rating-13" aria-label="5.0점 / 5.0점">
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                    </div>

                    <div className="misc">
                      <time dateTime="2021-01-01"> 2021.01.01 </time>
                      <span>오늘의집 구매</span>
                    </div>
                  </div>
                </div>
              </header>

              <div className="review-card-body">
                <div className="review-image">
                  <img
                    src="./assets/images/img-review-01.jpg"
                    alt="고영희님이좋아합니다 님의 리뷰 사진"
                  />
                </div>
                <p>
                  고양이가 좋아해요 ㅎㅎ 섬세한 온도조절이 안되는게 아쉽지만, 이
                  가격 이 디자인이면 만족할 수 밖에 없어요 :) 좋습니다!
                </p>
              </div>

              <footer className="review-card-footer">
                <button className="btn-outlined btn-32" type="button">
                  도움이 돼요
                </button>

                <p>
                  <strong>
                    <span>7</span>명
                  </strong>
                  에게 도움이 되었습니다.
                </p>
              </footer>
            </article>
          </li>

          {/* <!-- NOTE: 사용자가 도움됨을 체크, 도움됨 1+ --> */}
          <li className="review-item">
            <article className="review-card">
              <header className="review-card-header">
                <h3 className="visually-hidden">쿠쿠 님이 작성한 리뷰</h3>

                <a className="avatar-24" href="/">
                  <img src="./assets/images/img-user-04.jpg" alt="쿠쿠" />
                </a>

                <div className="info">
                  <a className="username" href="/">
                    <strong>쿠쿠</strong>
                  </a>

                  <div className="detail">
                    <div className="star-rating-13" aria-label="5.0점 / 5.0점">
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star"></i>
                      <i className="ic-star"></i>
                    </div>

                    <div className="misc">
                      <time dateTime="2021-01-01"> 2021.01.01 </time>
                      <span>오늘의집 구매</span>
                    </div>
                  </div>
                </div>
              </header>

              <div className="review-card-body">
                <p>
                  오래된 아파트 확장된 방이라 외풍이 너무 심해 급하게
                  구매했습니다! 예약배송이라 10일 가까이 기다렸는데 너무너무
                  만족스러워요~ :) 방이 큰 편이라 전체가 다 따뜻해지길 바라지도
                  않았고, 후기를 먼저 봤던터라 크게 기대를 안햇었는데 기대
                  이상입니다. 틀어놓으면 확실히 방 공기가 달라져요! 후끈!!! 까진
                  아니어도 차가운 공기가 따뜻해집니다~ 만족스러워요!!! 올 겨울
                  덕분에 떨지 않고 보낼 수 있을것 같습니당
                </p>
              </div>

              <footer className="review-card-footer">
                <button className="btn-primary btn-32" type="button">
                  <i className="ic-check" aria-hidden></i>
                  도움됨
                </button>

                <p>
                  <strong>
                    <span>1</span>명
                  </strong>
                  에게 도움이 되었습니다.
                </p>
              </footer>
            </article>
          </li>

          {/* <!-- NOTE: 사용자가 도움됨을 미체크, 도움됨 X --> */}
          <li className="review-item">
            <article className="review-card">
              <header className="review-card-header">
                <h3 className="visually-hidden">빅토리아 님이 작성한 리뷰</h3>

                <a className="avatar-24" href="/">
                  <img src="./assets/images/img-user-05.jpg" alt="빅토리아" />
                </a>

                <div className="info">
                  <a className="username" href="/">
                    <strong>빅토리아</strong>
                  </a>

                  <div className="detail">
                    <div className="star-rating-13" aria-label="5.0점 / 5.0점">
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star"></i>
                      <i className="ic-star"></i>
                      <i className="ic-star"></i>
                    </div>

                    <div className="misc">
                      <time dateTime="2021-01-01"> 2021.01.01 </time>
                      <span>오늘의집 구매</span>
                    </div>
                  </div>
                </div>
              </header>

              <div className="review-card-body">
                <p>가격 대비 만족합니다.</p>
              </div>

              <footer className="review-card-footer">
                <button className="btn-outlined btn-32" type="button">
                  도움이 돼요
                </button>
              </footer>
            </article>
          </li>
        </ol>

        <Pagination />
      </div>
    </section>
    //   {/* <!-- NOTE: 리뷰가 0개일 경우 --> */}
    //   <section
    //   className="product-section product-review"
    //   id="product-review"
    //   role="tabpanel"
    // >
    //   <header className="product-section-header">
    //     <h1 className="title">리뷰</h1>
    //     <strong className="badge" aria-label="0개">
    //       0
    //     </strong>
    //     <a className="text-button" href="/">
    //       리뷰쓰기
    //     </a>
    //   </header>

    //   <div className="product-section-content">
    //     <p className="review-empty">
    //       첫 리뷰를 남겨주세요! <br />
    //       최대 <strong>500P</strong>를 드립니다.
    //     </p>
    //   </div>
    // </section>
  );
};

export default ProductReview;
