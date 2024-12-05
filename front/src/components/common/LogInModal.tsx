import { useSelector } from 'react-redux';
import OauthButtons from '../users/OauthButtons';
import { RootState } from '../../reducers';

const LogInModal = () => {
  const logInModalVisibile = useSelector(
    (state: RootState) => state.modal.logInModalVisibile
  );

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
