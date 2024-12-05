import { useState, useCallback, ChangeEvent } from 'react';

export default (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return { value, handler, setValue };
};
