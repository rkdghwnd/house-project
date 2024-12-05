import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import modalSlice from '../../reducers/modalSlice';
import { getProductFormData } from '../../actions/productions';
import { useAppDispatch } from '../../../reduxToolkitStore';

const MyReviewItem = ({
  id,
  content,
  review_star,
  review_img,
  // praise_count,
  // review_type,
  // writer_id,
  // writer_nickname,
  // writer_profile_image_url,
  // writer_thumnail_profile_image_url,
  createdAt,
  // updatedAt,
  ProductId,
  // UserId,
  Product,
}: {
  id: number;
  content: string;
  review_star: number;
  review_img: string;
  praise_count: number;
  review_type: string;
  writer_id: number;
  writer_nickname: string;
  writer_profile_image_url: string;
  writer_thumnail_profile_image_url: null | string;
  createdAt: string;
  updatedAt: string;
  ProductId: number;
  UserId: number;
  Product: {
    id: number;
    product_name: string;
    image_url: string;
    brand_name: string;
  };
}) => {
  const dispatch = useAppDispatch();
  const createdTime = Intl.DateTimeFormat('kr')
    .format(new Date(createdAt))
    .slice(0, -1);

  const onClickRemoveReviewButton = useCallback(() => {
    dispatch(
      modalSlice.actions.openRemoveReviewConfirmModal({
        reviewId: id,
        productId: ProductId,
      })
    );
  }, [id, ProductId]);

  const onClickUpdateReviewButton = useCallback(() => {
    dispatch(
      modalSlice.actions.openWritingReviewForm({
        mode: 'update',
      })
    );
    dispatch(
      getProductFormData({
        reviewId: id,
        page: 1,
      })
    );
  }, [id, ProductId]);

  return (
    <article className="my-review-item">
      <div className="my-review-item-content">
        <div className="my-review-item-content-left">
          <span className="my-review-item-content-left-span">
            <Link to={`/productions/${Product.id}`}>
              {Product.product_name}
            </Link>
          </span>
          <div className="review-average">
            <div className="star-rating-24">
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
            <span>{createdTime}</span>
            <span>&nbsp;|&nbsp;</span>
            <span>쇼핑몰 리뷰</span>
          </div>
          <p>{content}</p>
        </div>
        <div className="my-review-item-content-right">
          <div className="update-remove-buttons">
            <button
              className="btn-32 btn-ghost"
              onClick={onClickUpdateReviewButton}
            >
              수정
            </button>
            <button
              className="btn-32 btn-ghost"
              onClick={onClickRemoveReviewButton}
            >
              삭제
            </button>
          </div>
          <div className="remive-image-box">
            {review_img && <img src={review_img} alt="review-image" />}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MyReviewItem;
