import React, { ChangeEvent, Dispatch, useCallback, useState } from 'react';

const FinalOrderDestinationInput = ({
  destination,
  setDestination,
  destinationError,
  setDestinationError,
}: {
  destination: string;
  setDestination: Dispatch<React.SetStateAction<string>>;
  destinationError: boolean;
  setDestinationError: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onChangeDestination = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setDestination(e.currentTarget.value);
      if (e.currentTarget.value) {
        setDestinationError(false);
      } else {
        setDestinationError(true);
      }
    },
    []
  );

  return (
    <>
      <div className="destination-input">
        <label htmlFor="destination">배송지명</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={onChangeDestination}
        />
      </div>
      {destinationError && (
        <div className="input-error">배송지명을 입력하세요</div>
      )}
    </>
  );
};

export default FinalOrderDestinationInput;
