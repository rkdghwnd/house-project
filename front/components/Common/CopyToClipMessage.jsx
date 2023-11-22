import React from 'react';
import { useSelector } from 'react-redux';

const CopyToClipMessage = () => {
  const { copyToClipMessageVisible } = useSelector((state) => state.modal);
  return (
    <div className={`copy-to-clip-message`}>
      copy!
      <div className="triangle"></div>
    </div>
  );
};

export default CopyToClipMessage;
