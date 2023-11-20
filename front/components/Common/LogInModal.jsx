import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import OauthButtons from '../users/OauthButtons';

const LogInModal = () => {
  const { logInModalVisibile } = useSelector((state) => state.modal);

  return (
    <section
      className={`log-in-modal${logInModalVisibile ? ' is-active' : ''}`}
    >
      <article className="log-in-modal-form">
        <div className="log-in-modal-form-header">
          <img src="/favicon.ico" alt="아이콘" />
          <img src="/assets/images/logo.svg" alt="로고" />
        </div>
        <OauthButtons />
      </article>
    </section>
  );
};

export default LogInModal;
