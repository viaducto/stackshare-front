import { useState, useEffect } from 'react';

const useWindowResize = ({ size = 576, offset = false }: { size?: number; offset?: boolean }) => {
  const [off, setOffset] = useState(offset);
  useEffect(() => {
    window.addEventListener('resize', (el: UIEvent) => {
      const element = el.target as Window;
      if (element.innerWidth <= size) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    });
    return function cleanup() {
      window.removeEventListener('resize', (el: UIEvent) => {
        const element = el.target as Window;
        if (element.innerWidth <= size) {
          setOffset(true);
        } else {
          setOffset(false);
        }
      });
    };
  }, [off, size, setOffset]);
  return { offset: off, setOffset };
};

export { useWindowResize };
