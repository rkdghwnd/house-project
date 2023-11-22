import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInquiry, writeInquiry } from '../../actions/productions';

const ApplyInquiryButton = ({ validateText, inquiryType, text, isSecret }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { writingInquiryFormData } = useSelector((state) => state.productions);
  const { writingInquiryFormMode } = useSelector((state) => state.modal);

  const applyInquiry = useCallback(() => {
    if (!validateText(text)) {
      return;
    }
    if (writingInquiryFormMode === 'create') {
      dispatch(
        writeInquiry({
          question_type: inquiryType,
          question: text,
          is_secret: isSecret,
          question_nickname: me.nickname,
          is_buyer: false,
          productId: writingInquiryFormData.productId,
        })
      );
    } else if (writingInquiryFormMode === 'update') {
      dispatch(
        updateInquiry({
          inquiryId: writingInquiryFormData.inquiryId,
          question_type: inquiryType,
          question: text,
          is_secret: isSecret,
          productId: writingInquiryFormData.productId,
        })
      );
    }
  }, [
    inquiryType,
    text,
    isSecret,
    me,
    writingInquiryFormMode,
    writingInquiryFormData,
  ]);

  return (
    <button className="btn-primary btn-48" onClick={applyInquiry}>
      완료
    </button>
  );
};

export default ApplyInquiryButton;
