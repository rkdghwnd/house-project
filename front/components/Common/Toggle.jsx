import React, { useCallback, useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';

const Toggle = ({ defaultChecked = false, onToggle = () => {} }, ref) => {
  const [on, setOn] = useState(defaultChecked);

  const onClickToggle = useCallback(() => {
    setOn((state) => {
      onToggle(!state);
      return !state;
    });
  }, []);

  return (
    <button
      className={`toggle${on ? ' is-active' : ''}`}
      onClick={onClickToggle}
      ref={ref}
    >
      <div className={`inner${on ? ' is-active' : ''}`}></div>
    </button>
  );
};

export default forwardRef(Toggle);
