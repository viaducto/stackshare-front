import React, { useContext } from 'react';
import { Bell } from 'react-ikonate';
import { Badge, ConfigContext } from '@jp-olvera/jp-viaducto-components';

const Notification = ({ number }: { number: number }) => {
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <Bell fontSize='1.5rem' color={dark} />
      <div style={{ position: 'absolute', top: -6, left: 7, zIndex: 1 }} className='notification'>
        <Badge
          clipPath='square'
          fontSize='xs'
          size={{ width: '1.2rem', height: '1rem' }}
          content={number >= 51 ? `+50` : number}
          align='center'
          background='#F5222D'
        />
      </div>
    </div>
  );
};

export default Notification;
