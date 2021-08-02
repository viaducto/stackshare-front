import { useEffect, useState } from 'react';

export const useLoading = (loading?: boolean, timeout?: number) => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, timeout || 1500);
  }, [timeout]);
  return { load, setLoad };
};
