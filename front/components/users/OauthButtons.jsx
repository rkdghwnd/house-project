import React from 'react';
import { useLocation } from 'react-router-dom';

const OauthButtons = () => {
  const location = useLocation();

  return (
    <div className="oauth-buttons">
      <a
        href={`${
          import.meta.env.VITE_BACK_END_DOMAIN
        }/user/facebook/auth?redir=${location.pathname}`}
      >
        <img
          src="/assets/oauthlogos/facebook-auth-image.png"
          alt="fackbook-logo"
        />
      </a>
      <a
        href={`${import.meta.env.VITE_BACK_END_DOMAIN}/user/kakao/auth?redir=${
          location.pathname
        }`}
      >
        <img src="/assets/oauthlogos/kakao-auth-image.png" alt="kakao-logo" />
      </a>
      <a
        href={`${import.meta.env.VITE_BACK_END_DOMAIN}/user/google/auth?redir=${
          location.pathname
        }`}
      >
        <img src="/assets/oauthlogos/google-auth-image.png" alt="google-logo" />
      </a>
    </div>
  );
};

export default OauthButtons;
