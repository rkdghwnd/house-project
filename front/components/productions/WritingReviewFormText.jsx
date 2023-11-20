import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReview, writeReview } from '../../actions/productions';
import { useLocation } from 'react-router-dom';

const WritingReviewFormText = ({ starCount }) => {
  const dispatch = useDispatch();
  const { writingReviewFormMode } = useSelector((state) => state.modal);
  const { reviewUploadedImage, writingReviewFormData } = useSelector(
    (state) => state.productions
  );
  const { me } = useSelector((state) => state.user);
  const [reviewMessage, setReviewMessage] = useState(
    writingReviewFormData.content || ''
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [isMessageError, setIsMessageError] = useState(false);
  const textareaRef = useRef(null);
  const reviewCount = starCount?.filter((el) => el).length;

  useEffect(() => {
    setReviewMessage(writingReviewFormData.content || '');
  }, [writingReviewFormData]);

  const validateText = (text) => {
    if (text === '') {
      setErrorMessage('필수입력 항목입니다.');
      setIsMessageError(true);
      return false;
    } else if (text.length < 20) {
      setErrorMessage('20자 이상 입력해주세요');
      setIsMessageError(true);
      return false;
    } else if (text.length > 1000) {
      setErrorMessage('1000자 이하로 입력해주세요');
      setIsMessageError(true);
      return false;
    } else {
      setErrorMessage('');
      setIsMessageError(false);
      return true;
    }
  };

  const onChangeReviewMessage = useCallback(
    (e) => {
      setReviewMessage(e.currentTarget.value);
      validateText(e.currentTarget.value);

      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight - 18}px`;
    },
    [textareaRef]
  );

  const onWriteReview = useCallback(() => {
    if (!validateText(reviewMessage)) {
      return;
    }

    const formData = new FormData();
    formData.append('product_id', writingReviewFormData.Product.id || null);
    formData.append('review_star', reviewCount);
    if (reviewUploadedImage) {
      formData.append('review_img', reviewUploadedImage);
    }
    formData.append('content', reviewMessage);
    formData.append('writer_id', me.id);
    formData.append('writer_nickname', me.nickname);
    formData.append(
      'writer_profile_image_url',
      `${import.meta.env.VITE_BACK_END_DOMAIN}/${me.profile_img}`
    );

    if (writingReviewFormMode === 'create') {
      dispatch(
        writeReview({
          data: formData,
          id: writingReviewFormData.Product.id,
        })
      );
    } else if (writingReviewFormMode === 'update') {
      formData.append('review_id', writingReviewFormData.id);
      dispatch(
        updateReview({
          data: formData,
          id: writingReviewFormData.Product.id,
        })
      );
    }
  }, [
    reviewMessage,
    writingReviewFormData,
    reviewCount,
    reviewUploadedImage,
    me,
    writingReviewFormMode,
  ]);

  return (
    <div
      className={`writing-review-form-text${isMessageError ? ' is-error' : ''}`}
    >
      <div className="writing-review-form-text-header">
        <h3>리뷰 작성</h3>
        <p>{errorMessage}</p>
      </div>
      <div className="text-main">
        <textarea
          rows={6}
          name="review-message"
          type="text"
          value={reviewMessage}
          onChange={onChangeReviewMessage}
          placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자 이상)"
          ref={textareaRef}
        ></textarea>
        <span>{reviewMessage.length || 0}</span>
      </div>
      <button
        className="btn-40 btn-primary submit-button"
        onClick={onWriteReview}
      >
        완료
      </button>
    </div>
  );
};

export default WritingReviewFormText;
