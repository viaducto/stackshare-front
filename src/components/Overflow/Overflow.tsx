import React, { useEffect, useState } from 'react';
interface OverflowProps {
  target: React.RefObject<HTMLElement>;
  children: React.ReactNode;
}
const Overflow = ({ target, children }: OverflowProps) => {
  const [isOverflowed, setisOverflowed] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (target.current && target.current.offsetWidth < target.current.scrollWidth) {
        setisOverflowed(true);
        return;
      }
      setisOverflowed(false);
    };
    checkOverflow();
    if (target && target.current) {
      window.addEventListener('resize', checkOverflow);
    }
    return function cleanup() {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [target]);

  return <div className={isOverflowed ? 'blurred-border' : ''}>{children}</div>;
};

export default Overflow;
