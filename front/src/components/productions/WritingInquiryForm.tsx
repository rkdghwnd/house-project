import React, {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import modalSlice from '../../reducers/modalSlice';
import WritingInquiryFormNotice from './WritingInquiryFormNotice';
import ApplyInquiryButton from './ApplyInquiryButton';
import { RootState } from '../../reducers';

const WritingInquiryForm = () => {
  const dispatch = useDispatch();

  const writingInquiryFormVisible = useSelector(
    (state: RootState) => state.modal.writingInquiryFormVisible
  );
  const writingInquiryFormMode = useSelector(
    (state: RootState) => state.modal.writingInquiryFormMode
  );
  const writingInquiryFormData = useSelector(
    (state: RootState) => state.productions.writingInquiryFormData
  );
  const [inquiryType, setInquiryType] = useState<string>(
    writingInquiryFormData?.question_type || '상품'
  );
  const [text, setText] = useState(writingInquiryFormData?.question);
  const [isTextError, setIsTextError] = useState(false);
  const [isSecret, setIsSecret] = useState(writingInquiryFormData?.is_secret);
  const inquiryTypes = ['상품', '배송', '반품', '교환', '환불', '기타'];
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setInquiryType(writingInquiryFormData?.question_type);
    setText(writingInquiryFormData?.question);
    setIsSecret(writingInquiryFormData?.is_secret);
  }, [writingInquiryFormData]);

  const onCloseInquiryForm = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
  }, []);

  const validateText = (text: string) => {
    if (text === '') {
      setIsTextError(true);
      return false;
    }
    setIsTextError(false);
    return true;
  };

  const onClickTypeButton = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setInquiryType(e.currentTarget.textContent || '');
  }, []);

  const onChangeInquiryText = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.currentTarget.value);
      validateText(e.currentTarget.value);

      const textarea = textareaRef.current;
      if (!textarea) {
        return;
      }
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight - 18}px`;
    },
    [textareaRef]
  );

  const onClickSecretCheckBox = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      setIsSecret(e.currentTarget.checked);
    },
    []
  );

  return (
    <section
      className={`writing-inquiry-form${
        writingInquiryFormVisible ? ' is-open' : ''
      }`}
    >
      <div className="writing-inquiry-form-close">
        <i className="ic-close sm-hidden" onClick={onCloseInquiryForm}></i>
      </div>
      <h3 className="writing-inquiry-form-header">
        상품 문의하기 {writingInquiryFormMode === 'update' && '수정'}
      </h3>
      <h4>문의유형</h4>

      <div className="writing-inquiry-form-type">
        {inquiryTypes.map((type) => {
          return (
            <button
              key={shortid.generate()}
              className={`btn-48 ${
                type === inquiryType ? 'btn-primary' : 'btn-ghost'
              } inquiry-type-button`}
              onClick={onClickTypeButton}
            >
              {type}
            </button>
          );
        })}
      </div>

      <div
        className={`writing-inquiry-form-content${
          isTextError ? ' is-error' : ''
        }`}
      >
        <h4>문의내용</h4>
        <textarea
          name="inquiry-content-input"
          rows={6}
          placeholder="문의 내용을 입력하세요"
          ref={textareaRef}
          onChange={onChangeInquiryText}
          value={text}
        ></textarea>
      </div>

      <WritingInquiryFormNotice />

      <div className="writing-inquiry-form-secret-check">
        <input
          type="checkbox"
          onClick={onClickSecretCheckBox}
          defaultChecked={isSecret}
        ></input>
        <label>비밀글로 문의하기</label>
      </div>

      <div className="writing-inquiry-form-buttons">
        <button
          className="btn-secondary btn-48 sm-only"
          onClick={onCloseInquiryForm}
        >
          취소
        </button>
        <ApplyInquiryButton
          validateText={validateText}
          inquiryType={inquiryType}
          text={text}
          isSecret={isSecret}
        />
      </div>
    </section>
  );
};

export default WritingInquiryForm;
