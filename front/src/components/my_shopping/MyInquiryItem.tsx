import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import productionsSlice from '../../reducers/productionsSlice';

type MyInquiryItemType = {
  id: number;
  question_type: string;
  is_buyer: boolean;
  question_nickname: string;
  question: string;
  is_secret: boolean;
  createdAt: string;
  updatedAt: string;
  ProductId: number;
  UserId: number;
  Product_answer: null | {
    id: number;
    answer_nickname: string;
    is_secret: boolean;
    answer: string;
  };
};

const MyInquiryItem = ({
  id,
  question_type,
  is_buyer,
  question_nickname,
  question,
  is_secret,
  createdAt,
  updatedAt,
  ProductId,
  UserId,
  Product_answer,
}: MyInquiryItemType) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const createdTime = Intl.DateTimeFormat('kr')
    .format(new Date(createdAt))
    .slice(0, -1);

  const onChangeOpen = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const updateMyInquiry = useCallback(() => {
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
  }, [id, question_type, question, is_secret, ProductId]);

  const removeMyInquiry = useCallback(() => {
    dispatch(
      modalSlice.actions.openRemoveInquiryConfirmModal({
        inquiryId: id,
        productId: ProductId,
      })
    );
  }, [id, ProductId]);

  return (
    <article className="my-inquiry-item">
      <header className="my-inquiry-header">
        <div className={`tag-${Product_answer ? 'green' : 'gray'}`}>
          {Product_answer ? '답변완료' : '답변대기'}
        </div>
        <h3>{question_type}</h3>
        <span>{createdTime}</span>
      </header>
      <div className="my-inquiry-product-name">
        <span>|</span>
        <span>상품</span>
        <p>[최대 209만] 트롬 오브제컬렉션 워시타워 W20WANQ</p>
      </div>
      <div className="my-inquiry-question">
        <div className="question-icon">
          <span>Q</span>
        </div>
        <p>{question}</p>
      </div>
      {Product_answer?.id && (
        <div className="my-inquiry-answer">
          <p className={`answer${open ? ' is-open' : ''}`}>
            {Product_answer.answer}
          </p>
          <div className="view-all-button">
            <button className="btn-32 btn-ghost" onClick={onChangeOpen}>
              <i className={`ic-chevron${open ? ' is-open' : ''}`}></i>
              {open ? '접기' : '답변 전체보기'}
            </button>
          </div>
        </div>
      )}
      {!!Product_answer?.id || (
        <button
          className="btn-32 btn-outlined update-button"
          onClick={updateMyInquiry}
        >
          수정
        </button>
      )}
      <button
        className="btn-32 btn-outlined remove-button"
        onClick={removeMyInquiry}
      >
        삭제
      </button>
    </article>
  );
};

export default MyInquiryItem;
