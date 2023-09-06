import React from 'react';
import { useSelector } from 'react-redux';

const LogInModal = () => {
  const { logInModalVisibile } = useSelector((state) => state.modal);
  return (
    <section
      className={`log-in-modal${logInModalVisibile ? ' is-active' : ''}`}
    >
      <article className="log-in-modal-form">
        <div className="log-in-modal-form-header">
          <img src="/favicon.ico" />
          <img src="/assets/images/logo.svg" />
        </div>
        <div className="log-in-modal-form-buttons">
          <a href="/">
            <img src="/assets/oauthlogos/facebook-auth-image.png" alt="" />
          </a>
          <a href="/">
            <img src="/assets/oauthlogos/kakao-auth-image.png" alt="" />
          </a>
          <a href="/">
            <img src="/assets/oauthlogos/google-auth-image.png" alt="" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default LogInModal;
