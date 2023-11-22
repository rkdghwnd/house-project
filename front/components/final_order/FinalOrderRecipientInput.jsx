import React, { useCallback, useState } from 'react';

const FinalOrderRecipientInput = ({
  recipient,
  setRecipient,
  recipientError,
  setRecipientError,
}) => {
  const onChangeRecipient = useCallback((e) => {
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
