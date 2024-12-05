import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ReviewUpdateRemoveButtons from './ReviewUpdateRemoveButtons';
import ReviewCardFooter from './ReviewCardFooter';
import { RootState } from '../../reducers';

type ReviewCardType = {
  id: number;
  content: string;
  writer_nickname: string;
  writer_profile_image_url: string;
  review_img: string;
  review_star: number;
  createdAt: string | number;
  ProductId: number;
  UserId: number | null;
  Likers?: { id: number }[];
  page: number;
};

const ReviewCard = ({
  id,
  content,
  writer_nickname,
  writer_profile_image_url,
  review_img,
  review_star,
  createdAt = 0,
  ProductId,
  UserId,
  Likers,
  page,
}: ReviewCardType) => {
  const me = useSelector((state: RootState) => state.user.me);
  const location = useLocation();
  const createdTime = Intl?.DateTimeFormat('kr')
    ?.format(new Date(+createdAt | 0))
    ?.slice(0, -1);
  const isMyLikePage = location?.pathname === `/users/${me?.id}/like`;
  const userIsMe = UserId === me?.id;

  return (
    <article className="review-card">
      <header className="review-card-header">
        <h3 className="visually-hidden">{writer_nickname} 님이 작성한 리뷰</h3>
        <NavLink className="avatar-24" to={`/users/${UserId}`}>
          <img src={writer_profile_image_url} alt={writer_nickname} />
        </NavLink>

        <div className="info">
          <NavLink className="username" to={`/users/${UserId}`}>
            <strong>{writer_nickname}</strong>
          </NavLink>
          <div className="detail">
            <div className="star-rating-13" aria-label="5.0점 / 5.0점">
              <i
                className={`ic-star${review_star >= 1 ? ' is-active' : ''}`}
              ></i>
              <i
                className={`ic-star${review_star >= 2 ? ' is-active' : ''}`}
              ></i>
              <i
                className={`ic-star${review_star >= 3 ? ' is-active' : ''}`}
              ></i>
              <i
                className={`ic-star${review_star >= 4 ? ' is-active' : ''}`}
              ></i>
              <i
                className={`ic-star${review_star >= 5 ? ' is-active' : ''}`}
              ></i>
            </div>

            <div className="misc">
              <time dateTime={createdTime}>{createdTime}&nbsp;</time>
              <span>&nbsp;내일의집 구매</span>
            </div>
          </div>
        </div>
        {userIsMe && (
          <ReviewUpdateRemoveButtons
            id={id}
            productId={ProductId}
            page={page}
          />
        )}
      </header>

      <div className="review-card-body">
        {/* 이미지를 첨부한경우 */}
        {review_img && (
          <div className="review-image">
            <img src={review_img} alt="리뷰 사진" />
          </div>
        )}
        {isMyLikePage ? (
          <Link to={`/productions/${ProductId}`}>
            <p>{content}</p>
          </Link>
        ) : (
          <p>{content}</p>
        )}
      </div>

      <ReviewCardFooter id={id} Likers={Likers} />
    </article>
  );
};

export default ReviewCard;
