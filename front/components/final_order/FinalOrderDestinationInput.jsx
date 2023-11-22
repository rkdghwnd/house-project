import React, { useCallback, useState } from 'react';

const FinalOrderDestinationInput = ({
  destination,
  setDestination,
  destinationError,
  setDestinationError,
}) => {
  const onChangeDestination = useCallback((e) => {
    setDestination(e.currentTarget.value);
    if (e.currentTarget.value) {
      setDestinationError(false);
    } else {
      setDestinationError(true);
    }
  }, []);

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
