import React, { useCallback, useState, forwardRef, LegacyRef } from 'react';

const Toggle = (
  {
    defaultChecked = false,
    onToggle = () => {},
  }: {
    defaultChecked: boolean;
    onToggle: (checked: boolean) => void;
  },
  ref: LegacyRef<HTMLButtonElement>
) => {
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
