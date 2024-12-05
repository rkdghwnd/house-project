import React, { ChangeEvent, Dispatch, useCallback, useState } from 'react';

const UsersEditMainEmail = ({
  username,
  domain,
  setUsername,
  setDomain,
}: {
  username: string;
  domain: string;
  setUsername: Dispatch<React.SetStateAction<string>>;
  setDomain: Dispatch<React.SetStateAction<string>>;
}) => {
  const [customInputVisible, setCustomInputVisible] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [domainError, setDomainError] = useState(false);

  const onChangeUsername = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
    if (/^[a-zA-Z0-9+-_.]+/.test(e.currentTarget.value)) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  }, []);

  const onChangeDomain = useCallback(
    (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      if (e.currentTarget.value === 'custom') {
        setCustomInputVisible(true);
      }
      setDomain(e.currentTarget.value);

      if (/[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.currentTarget.value)) {
        setDomainError(false);
      } else {
        setDomainError(true);
      }
    },
    [username]
  );

  return (
    <>
      <div className="users-edit-main-email">
        <div className="edit-label">
          <label htmlFor="">이메일</label>
          <span>* 필수항목</span>
        </div>
        <div className="edit-input">
          <input
            type="text"
            className={`input-secondary${usernameError ? ' is-error' : ''}`}
            onChange={onChangeUsername}
            value={username}
          />
          <span>&nbsp;@&nbsp;</span>
          {customInputVisible ? (
            <input
              className={`input-secondary${domainError ? ' is-error' : ''}`}
              type="text"
              onChange={onChangeDomain}
            />
          ) : (
            <select value={domain} onChange={onChangeDomain}>
              <option value="">선택해주세요</option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="daum.net">daum.net</option>
              <option value="gmail.com">gmail.com</option>
              <option value="nate.com">nate.com</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="outlook.com">outlook.com</option>
              <option value="icloud.com">icloud.com</option>
              <option value="custom">직접입력</option>
            </select>
          )}
          {(domainError || usernameError) && (
            <div className="email-error">이메일 형식이 올바르지 않습니다.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default UsersEditMainEmail;
