import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInquiry, writeInquiry } from '../../actions/productions';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const ApplyInquiryButton = ({
  validateText,
  inquiryType,
  text,
  isSecret,
}: {
  validateText: (text: string) => boolean;
  inquiryType: string;
  text: string;
  isSecret: boolean;
}) => {
  const dispatch = useAppDispatch();
  const me = useSelector((state: RootState) => state.user.me);
  const writingInquiryFormData = useSelector(
    (state: RootState) => state.productions.writingInquiryFormData
  );
  const writingInquiryFormMode = useSelector(
    (state: RootState) => state.modal.writingInquiryFormMode
  );

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
          question_nickname: me!.nickname,
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
