import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  SidebarSection,
  MenuItem,
  Container,
  Switch,
  ConfigContext,
  ConfigProps,
} from '@jp-olvera/jp-viaducto-components';
import { Suitcase, Grid, Activity } from 'react-ikonate';
import { AppContext, StackShareThemeContext } from '../../../providers';
import Logo from '../../Logo/Logo';
import MenuTitle from '../../MenuTitle/MenuTitle';

interface StyledStackMenuProps {
  active: boolean;
  configuration: ConfigProps;
}

const StyledStackMenu = styled.div<StyledStackMenuProps>`
  * {
    font-family: inherit !important;
  }
  width: 100%;
  @media (min-width: ${(p) => p.configuration.breakpoints.sm}) {
    width: 17.313rem;
  }
  transform: ${(p) => (p.active ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 230ms ease-out;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow-y: auto;
  background-color: ${(p) => p.theme.mainBackground};
  color: ${(p) => p.theme.title};
  border-right: 0.063rem solid #d9d9d9;
  & > div {
    min-width: 0;
    & > div {
      min-width: 0;
    }
  }
  box-shadow: 0.125rem 0 0.313rem -0.125rem rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

/** The sidebar Menu */
const StackMenu = () => {
  const { isMenuActive } = useContext(AppContext);
  const { pathname } = useLocation();
  const { isDarkMode, setDarkMode } = useContext(StackShareThemeContext);
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;

  return (
    <StyledStackMenu active={isMenuActive} configuration={configuration}>
      <Container vertical='md' expandHorizontal horizontal='sm'>
        <Logo />
      </Container>
      <Container vertical='md' style={{ position: 'relative' }}>
        <SidebarSection title='Auctions' isDropdown icon={<Suitcase color={dark} />}>
          <Link to='/buy' className='link-router'>
            <MenuItem label='Buy parameters' nested active={pathname === '/buy'} />
          </Link>
          <Link to='/sell' className='link-router'>
            <MenuItem label='Sell parameters' nested active={pathname === '/'} />
          </Link>
          <Link to='/b2b' className='link-router'>
            <MenuItem label='B2B' nested active={pathname === '/b2b'} />
          </Link>
        </SidebarSection>
        <Link to='/shop' className='link-router'>
          <MenuItem
            label='Bytebroker shop'
            lead
            icon={<Grid color={dark} />}
            active={pathname === '/shop'}
          />
        </Link>
        <Link to='/graphs' className='link-router'>
          <MenuItem
            label='Graphs'
            lead
            icon={<Activity color={dark} />}
            active={pathname === '/graphs'}
          />
        </Link>
      </Container>
      <hr />
      <Container bottom='sm'>
        <MenuTitle title='ORGANIZATIONS' />
        <SidebarSection title='Viaducto Technologies' isMenu>
          <Container bottom='md' className='border-bottom'>
            <MenuTitle title='MENU' />
            <MenuItem label='Applications' />
            <MenuItem label='Devices' />
          </Container>
          <Container style={{ backgroundColor: 'rgba(246,249,253,0.15)' }}>
            <MenuTitle title='SUBSCRIPTIONS AND BILLING' />
            <MenuItem label='Stackshop' />
            <MenuItem label='Billing Management' />
            <Container horizontal='sm' top='sm'>
              <div className='border-bottom' style={{ width: '100%', height: '1px' }}></div>
            </Container>
            <MenuTitle title='HARDWARE MANAGEMENT' />
            <MenuItem label='End User Devices' />
            <MenuItem label='Infrastructure Devices' />
            <Container horizontal='sm' top='sm'>
              <div className='border-bottom' style={{ width: '100%', height: '1px' }}></div>
            </Container>
            <MenuTitle title='BYTEBROKER' />
            <MenuItem label='Metrics' />
            <MenuItem label='Sell Parameters' />
            <MenuItem label='Buy Parameters' />
            <Container horizontal='sm' top='sm'>
              <div className='border-bottom' style={{ width: '100%', height: '1px' }}></div>
            </Container>
            <MenuTitle title='ORGANIZATION MANAGEMENT' />
            <MenuItem label='Users' />
            <MenuItem label='Access Groups' />
            <MenuItem label='Roles and Permissions' />
            <MenuItem label='Audit Logs' />
          </Container>
        </SidebarSection>
        <SidebarSection title='NFL' isMenu />
        <SidebarSection title='Televisa Deportes' isMenu />
      </Container>
      <hr />
      <Container top='sm'>
        <MenuTitle title='Dark mode' />
        <Container left='sm'>
          <Switch change={setDarkMode} defaultChecked={isDarkMode} inputSize='xsmall' />
        </Container>
      </Container>
    </StyledStackMenu>
  );
};
export default StackMenu;
