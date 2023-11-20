import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import modalSlice from '../../reducers/modalSlice';
import { getProductFormData } from '../../actions/productions';

const MyReviewItem = ({
  id,
  content,
  review_star,
  review_img,
  praise_count,
  review_type,
  writer_id,
  writer_nickname,
  writer_profile_image_url,
  writer_thumnail_profile_image_url,
  createdAt,
  updatedAt,
  ProductId,
  UserId,
  Product,
}) => {
  const dispatch = useDispatch();
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
        productId: ProductId,
      })
    );
  }, [id, ProductId]);

  return (
    <article className="my-review-item">
      <div className="my-review-item-content">
        <div className="my-review-item-content-left">
          <h4>
            <Link to={`/productions/${Product.id}`}>
              {Product.product_name}
            </Link>
          </h4>
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
