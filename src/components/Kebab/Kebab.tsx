import React, { useRef, useCallback } from 'react';
import { Button, Popover } from '@jp-olvera/jp-viaducto-components';
import { EllypsisVertical } from 'react-ikonate';
import { useState } from 'react';

const Kebab = ({ children, ...rest }: { children: React.ReactNode }) => {
  const ref = useRef<any>(null);
  const [active, setActive] = useState(false);
  const handleClose = useCallback(() => {
    setActive((d) => !d);
  }, []);
  return (
    <>
      <Button
        radius='sm'
        icon={<EllypsisVertical />}
        ref={ref}
        onClick={handleClose}
        {...rest}
        variant='outline'
        leftSpacing='xs'
        rightSpacing='xs'
        height='30px'
        style={{ color: '#595959' }}
        shapeColor='secondary'
      />
      <Popover
        target={ref}
        content={<div style={{ maxWidth: '130px' }}>{children}</div>}
        active={active}
        handleClose={handleClose}
        elevation={1}
        elevationDirection='bottom'
      />
    </>
  );
};

export default Kebab;
