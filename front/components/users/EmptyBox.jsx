import React from 'react';

const EmptyBox = ({ message }) => {
  return (
    <div className="empty-box">
      <p>{message}</p>
    </div>
  );
};

export default EmptyBox;
