import { ChangeEvent, Dispatch, useCallback, useState } from 'react';
import FinalOrdererEmailInput from './FinalOrdererEmailInput';
import FinalOrdererPhoneInput from './FinalOrdererPhoneInput';

type FinalOrdererFormPropsType = {
  orderer: string;
  setOrderer: Dispatch<React.SetStateAction<string>>;
  emailName: string;
  setEmailName: Dispatch<React.SetStateAction<string>>;
  domain: string;
  setDomain: Dispatch<React.SetStateAction<string>>;
  ordererFirstPhoneNumber: string;
  setOrdererFirstPhoneNumber: Dispatch<React.SetStateAction<string>>;
  ordererLastPhoneNumber: string;
  setOrdererLastPhoneNumber: Dispatch<React.SetStateAction<string>>;
  ordererError: boolean;
  setOrdererError: Dispatch<React.SetStateAction<boolean>>;
  emailNameError: boolean;
  setEmailNameError: Dispatch<React.SetStateAction<boolean>>;
  domainError: boolean;
  setDomainError: Dispatch<React.SetStateAction<boolean>>;
  ordererPhoneNumberError: boolean;
  setOrdererPhoneNumberError: Dispatch<React.SetStateAction<boolean>>;
};

const FinalOrdererForm = ({
  orderer,
  setOrderer,
  emailName,
  setEmailName,
  domain,
  setDomain,
  ordererFirstPhoneNumber,
  setOrdererFirstPhoneNumber,
  ordererLastPhoneNumber,
  setOrdererLastPhoneNumber,
  ordererError,
  setOrdererError,
  emailNameError,
  setEmailNameError,
  domainError,
  setDomainError,
  ordererPhoneNumberError,
  setOrdererPhoneNumberError,
}: FinalOrdererFormPropsType) => {
  const [short, setShort] = useState(false);

  const onChangeOrderer = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setOrderer(e.currentTarget.value);
    if (e.currentTarget.value) {
      setOrdererError(false);
    } else {
      setOrdererError(true);
    }
  }, []);

  const onShortForm = useCallback(() => {
    setShort((state) => !state);
  }, []);

  return (
    <section className={`final-orderer-form ${short ? 'short' : ''}`}>
      <ul>
        <li className="final-orderer-form-header" onClick={onShortForm}>
          <h2>주문자</h2>
          <i className={`ic-chevron lg-hidden ${short ? 'short' : ''}`}></i>
        </li>
        <li>
          <div className="orderer-input">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              value={orderer}
              onChange={onChangeOrderer}
            />
          </div>
          {ordererError && (
            <div className="input-error">주문자 이름을 입력하세요</div>
          )}
        </li>
        <li>
          <FinalOrdererEmailInput
            emailName={emailName}
            setEmailName={setEmailName}
            domain={domain}
            setDomain={setDomain}
            emailNameError={emailNameError}
            setEmailNameError={setEmailNameError}
            domainError={domainError}
            setDomainError={setDomainError}
          />
        </li>
        <li>
          <FinalOrdererPhoneInput
            ordererFirstPhoneNumber={ordererFirstPhoneNumber}
            setOrdererFirstPhoneNumber={setOrdererFirstPhoneNumber}
            ordererLastPhoneNumber={ordererLastPhoneNumber}
            setOrdererLastPhoneNumber={setOrdererLastPhoneNumber}
            ordererPhoneNumberError={ordererPhoneNumberError}
            setOrdererPhoneNumberError={setOrdererPhoneNumberError}
          />
        </li>
      </ul>
    </section>
  );
};

export default FinalOrdererForm;
