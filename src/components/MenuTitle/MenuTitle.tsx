import { Paragraph, Spacer } from '@jp-olvera/jp-viaducto-components';
import React from 'react';

const MenuTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <Spacer size='md' />
      <div className='flex'>
        <Spacer direction='horizontal' size='sm' />
        <Paragraph color='gray' family='Roboto' spacing='1.1px' size='sm'>
          {title}
        </Paragraph>
      </div>
      <Spacer size='sm' />
    </div>
  );
};

export default MenuTitle;
