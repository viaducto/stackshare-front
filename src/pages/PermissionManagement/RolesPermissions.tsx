import React from 'react';
import { Checkbox, Paragraph, Spacer } from '@jp-olvera/jp-viaducto-components';

const RolesPermissions = ({ role }: { role: string }) => (
  <div>
    <Paragraph color='#262626' lineHeight='1.375rem' weight='600'>
      {role}
    </Paragraph>
    <Spacer size='sm' />
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Checkbox checkSize='sm' label='Permission 1' spacing='sm' color='#1890FF' />
      <Checkbox checkSize='sm' label='Permission 1' spacing='sm' color='#1890FF' />
      <Checkbox checkSize='sm' label='Permission 1' spacing='sm' color='#1890FF' />
      <Checkbox checkSize='sm' label='Permission 1' spacing='sm' color='#1890FF' />
      <Checkbox checkSize='sm' label='Permission 1' spacing='sm' color='#1890FF' />
      <Checkbox checkSize='sm' label='Permission 1' spacing='sm' color='#1890FF' />
    </div>
  </div>
);

export default RolesPermissions;
