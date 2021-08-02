import { Paragraph, Spacer } from '@jp-olvera/jp-viaducto-components';
import CloseButton from '../../components/CloseButton/CloseButton';
import RolesPermissions from './RolesPermissions';

const Roles = ({ setOpen }: { setOpen: Function }) => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
        Organization Owner
      </Paragraph>
      <CloseButton onClick={() => setOpen(false)} />
    </div>
    <Spacer size='lg' />
    <RolesPermissions role='Organization Permission' />
    <Spacer size='md' />
    <RolesPermissions role='User Management Permission' />
    <Spacer size='md' />
    <RolesPermissions role='Billing Permissions' />
    <Spacer size='md' />
    <RolesPermissions role='Auction Permissions' />
  </>
);

export default Roles;
