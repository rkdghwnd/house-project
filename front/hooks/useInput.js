import { useState, useCallback } from 'react';

export default (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);

  return [value, handler, setValue];
};
