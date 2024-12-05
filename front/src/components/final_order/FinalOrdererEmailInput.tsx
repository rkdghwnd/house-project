import React, { ChangeEvent, Dispatch, useCallback, useState } from 'react';
import { isCorrectDomain, isCorrectEmailName } from '../../hooks/validate';

type FinalOrdererEmailInputPropsTypes = {
  emailName: string;
  setEmailName: Dispatch<React.SetStateAction<string>>;
  domain: string;
  setDomain: Dispatch<React.SetStateAction<string>>;
  emailNameError: boolean;
  setEmailNameError: Dispatch<React.SetStateAction<boolean>>;
  domainError: boolean;
  setDomainError: Dispatch<React.SetStateAction<boolean>>;
};

const FinalOrdererEmailInput = ({
  emailName,
  setEmailName,
  domain,
  setDomain,
  emailNameError,
  setEmailNameError,
  domainError,
  setDomainError,
}: FinalOrdererEmailInputPropsTypes) => {
  const [customInputVisible, setCustomInputVisible] = useState(false);

  const onChangeEmailName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmailName(e.currentTarget.value);
    setEmailNameError(!isCorrectEmailName(e.currentTarget.value));
  }, []);

  const onChangeDomain = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === 'custom') {
      setCustomInputVisible(true);
      setDomain('');
      return;
    }
    setDomain(e.currentTarget.value);
    setDomainError(!isCorrectDomain(e.currentTarget.value));
  }, []);

  const onChangeCustomDomain = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setDomain(e.currentTarget.value);
      setDomainError(!isCorrectDomain(e.currentTarget.value));
    },
    []
  );

  return (
    <>
      <div className="email-input">
        <div className="email-input-row-1">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            placeholder="이메일"
            value={emailName}
            onChange={onChangeEmailName}
          />
          <span>@</span>
        </div>

        <div className="email-input-row-2">
          {customInputVisible ? (
            <div className="custom-domain">
              <input
                type="text"
                value={domain}
                onChange={onChangeCustomDomain}
              />
            </div>
          ) : (
            <div className="select-domain">
              <label className="lg-hidden"></label>
              <select name="domain" onChange={onChangeDomain}>
                <option>선택해주세요</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="kakao.com">kakao.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="icloud.com">icloud.com</option>
                <option value="custom">직접입력</option>
              </select>
            </div>
          )}
        </div>
      </div>
      {(domainError || emailNameError) && (
        <div className="input-error">이메일 형식이 올바르지 않습니다.</div>
      )}
    </>
  );
};

export default FinalOrdererEmailInput;
