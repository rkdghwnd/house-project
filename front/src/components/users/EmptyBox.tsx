import React from 'react';

const EmptyBox = ({ message }: { message: string }) => {
  return (
    <div className="empty-box">
      <p>{message}</p>
    </div>
  );
};

export default EmptyBox;
