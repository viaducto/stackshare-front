import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarSection, MenuItem } from '@jp-olvera/jp-viaducto-components';
import { Container } from '../../Container';
import { Chart, Suitcase, Grid, Settings } from 'react-ikonate';
import { AppContext } from '../../../providers';

interface StyledStackMenuProps {
  active: boolean;
}

const StyledStackMenu = styled.div<StyledStackMenuProps>`
  width: 12.5rem;
  /* width: ${(p) => (p.active ? '12.5rem' : '0rem')}; */
  transform: ${(p) => (p.active ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 230ms ease-out;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  overflow-y: auto;
  background-color: white;
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
const StackMenu = () => {
  const { isMenuActive } = useContext(AppContext);
  return (
    <StyledStackMenu active={isMenuActive}>
      <Container vertical='md' horizontal='md'>
        <div style={{ width: '8.375rem', height: '1.5rem', backgroundColor: 'gray' }} />
      </Container>
      <Container vertical='md' style={{ position: 'relative' }}>
        <MenuItem label='Dashboard' isDropdown lead icon={<Chart />} />
        <SidebarSection title='Auctions' isDropdown icon={<Suitcase />}>
          <Link to='/buy' className='link-router'>
            <MenuItem label='Buy parameters' nested />
          </Link>
          <Link to='/' className='link-router'>
            <MenuItem label='Sell parameters' nested />
          </Link>
          <Link to='/b2b' className='link-router'>
            <MenuItem label='B2B' nested />
          </Link>
        </SidebarSection>
        <SidebarSection title='Navigation Four' isMenu lead icon={<Grid />}>
          <MenuItem label='Option 1' nested />
          <MenuItem label='Option 2' nested />
        </SidebarSection>
        <SidebarSection title='Settings' icon={<Settings />} isDropdown>
          <MenuItem label='Menu Group Title' />
          <MenuItem label='Option' nested />
          <MenuItem label='Option' nested />
          <MenuItem label='Menu Group Title' />
          <MenuItem label='Option' nested />
          <MenuItem label='Option' nested />
        </SidebarSection>
        <Link to='/shop' className='link-router'>
          <MenuItem label='Bytebroker shop' lead icon={<Grid />} />
        </Link>
      </Container>
    </StyledStackMenu>
  );
};
export default StackMenu;
