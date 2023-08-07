import React from 'react';

const ReviewCard = () => {
  return (
    <article className="review-card">
      <header className="review-card-header">
        <h3 className="visually-hidden">김버그 님이 작성한 리뷰</h3>

        <a className="avatar-24" href="/">
          <img src="./assets/images/img-user-02.jpg" alt="김버그" />
        </a>

        <div className="info">
          <a className="username" href="/">
            <strong>김버그</strong>
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
        <p>
          집 전체를 데운다기보다는 틀어놓고 앞에 앉아있으면 따땃해지는 정도예요.
          불 꺼놓고 난로 켜고 담요 덮은 채로 커피 마시면 아주 좋아요. 고양이도
          좋아해요
        </p>
      </div>

      <footer className="review-card-footer">
        <button className="btn-outlined btn-32" type="button">
          도움이 돼요
        </button>

        <p>
          <strong>
            <span>3</span>명
          </strong>
          에게 도움이 되었습니다.
        </p>
      </footer>
    </article>
  );
};

export default ReviewCard;
