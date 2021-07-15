import React from 'react';
import { Bell } from 'react-ikonate';
import { Badge } from '@jp-olvera/jp-viaducto-components';

const Notification = ({ number }: { number: number }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <Bell fontSize='1.5rem' color='#595959' />
      <div style={{ position: 'absolute', top: -8, left: 7, zIndex: 1 }} className='notification'>
        <Badge
          clipPath='square'
          size={{ width: '1.8rem', height: '1.375rem' }}
          content={number}
          align='center'
          background='#F5222D'
        />
      </div>
    </div>
  );
};

export default Notification;
