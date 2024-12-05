import { useState, useCallback, ChangeEvent } from 'react';

export default (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(e.currentTarget.value);
    if (typeof targetValue === 'number' && isFinite(targetValue)) {
      setValue(e.currentTarget.value);
    }
  }, []);

  return { value, handler, setValue };
};
