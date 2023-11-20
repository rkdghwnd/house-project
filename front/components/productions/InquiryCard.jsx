import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productionsSlice from '../../reducers/productionsSlice';
import modalSlice from '../../reducers/modalSlice';

const InquiryCard = ({
  id,
  question_type,
  is_buyer,
  question_nickname,
  question,
  is_secret,
  createdAt,
  ProductId,
  UserId,
  Product_answer,
}) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const secretQuestionNickname = question_nickname.slice(0, 1);
  const createdTime = Intl.DateTimeFormat('kr')
    .format(new Date(createdAt))
    .slice(0, -1);

  const onClickUpdateButton = useCallback(() => {
    dispatch(
      productionsSlice.actions.updateWritingInquiryFormData({
        inquiryId: id,
        question_type,
        question,
        is_secret,
        productId: ProductId,
      })
    );
    dispatch(
      modalSlice.actions.openWritingInquiryForm({
        mode: 'update',
      })
    );
  }, [id, question_type, question, is_secret]);

  const onClickRemoveButton = useCallback(() => {
    dispatch(
      modalSlice.actions.openRemoveInquiryConfirmModal({
        inquiryId: id,
        productId: ProductId,
      })
    );
  }, [id, ProductId]);

  return (
    <article className="inquiry-card">
      <header className="inquiry-card-header">
        <h3 className="visually-hidden">
          {secretQuestionNickname}* 님이 남기신 문의
        </h3>
        <dl className="detail">
          <dt className="visually-hidden">구매 여부</dt>
          <dd>{is_buyer ? '구매' : '비구매'}</dd>
          <dt className="visually-hidden">문의 유형</dt>
          <dd>{question_type}</dd>
          <dt className="visually-hidden">답변 여부</dt>
          <dd>{Product_answer ? '답변' : '미답변'}</dd>
        </dl>
        <div className="misc">
          <strong>{secretQuestionNickname}*</strong>
          <time dateTime={createdTime}>{createdTime}</time>
        </div>
        {UserId === me?.id && (
          <div className="update-remove-buttons">
            <button className="btn-32 btn-ghost" onClick={onClickUpdateButton}>
              수정
            </button>
            <button className="btn-32 btn-ghost" onClick={onClickRemoveButton}>
              삭제
            </button>
          </div>
        )}
      </header>

      <div className="inquiry-card-body">
        <div className="inquiry-content">
          <span aria-label="문의 내용">Q</span>
          <p>
            {is_secret ? (
              <>
                <i className="ic-lock" aria-hidden></i>비밀글입니다.
              </>
            ) : (
              question
            )}
          </p>
        </div>
        {/* 답변달린경우 */}
        {Product_answer && (
          <div className="inquiry-content">
            <span aria-label="답변 내용">A</span>
            <div className="seller">
              <strong>{Product_answer?.answer_nickname}</strong>
              <time dateTime="2020-12-24 19:30">
                {/* 2020년 12월 24일 19시 30분 */}
              </time>
            </div>
            <p>
              {Product_answer?.is_secret ? (
                <>
                  <i className="ic-lock" aria-hidden></i>비밀글입니다.
                </>
              ) : (
                Product_answer?.answer
              )}
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

export default InquiryCard;
