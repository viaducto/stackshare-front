import { Container, Input, Paragraph, Pill, Spacer } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import RolesPermissions from './RolesPermissions';

const CreateRoles = ({ setOpen }: { setOpen: Function }) => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
        Create User Role
      </Paragraph>
      <Pill background='transparent' color='#000' handleAction={() => setOpen(false)} />
    </div>
    <Spacer size='lg' />
    <Container right='lg'>
      <div className='form-control'>
        <Input label='EIN:' inputSize='small' defaultValue='New secure role' />
      </div>
    </Container>
    <Spacer size='md' />
    <RolesPermissions role='Organization Permission' />
    <Spacer size='md' />
    <RolesPermissions role='User Management Permission' />
    <Spacer size='md' />
    <RolesPermissions role='Billing Permissions' />
    <Spacer size='md' />
    <RolesPermissions role='Auction Permissions' />
  </>
);

export default CreateRoles;
