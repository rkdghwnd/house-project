import { ChangeEvent, Dispatch, useCallback } from 'react';

type FinalOrderRecipientInputPropsType = {
  recipient: string;
  setRecipient: Dispatch<React.SetStateAction<string>>;
  recipientError: boolean;
  setRecipientError: Dispatch<React.SetStateAction<boolean>>;
};

const FinalOrderRecipientInput = ({
  recipient,
  setRecipient,
  recipientError,
  setRecipientError,
}: FinalOrderRecipientInputPropsType) => {
  const onChangeRecipient = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRecipient(e.currentTarget.value);
    if (e.currentTarget.value) {
      setRecipientError(false);
    } else {
      setRecipientError(true);
    }
  }, []);

  return (
    <>
      <div className="recipient-input">
        <label htmlFor="recipient">받는사람</label>
        <input type="text" onChange={onChangeRecipient} value={recipient} />
      </div>
      {recipientError && (
        <div className="input-error">받는사람을 입력하세요</div>
      )}
    </>
  );
};

export default FinalOrderRecipientInput;
