import React from 'react';
import styled from 'styled-components';
import { SidebarSection, MenuItem } from '@jp-olvera/jp-viaducto-components';
import { Container } from '../../Container';
import { Chart, Suitcase, Grid, Settings } from 'react-ikonate';

const StyledStackMenu = styled.div`
  width: 12.5rem;
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
`;
const StackMenu = () => {
  return (
    <StyledStackMenu>
      <Container vertical='md' horizontal='md'>
        <div style={{ width: '8.375rem', height: '1.5rem', backgroundColor: 'gray' }} />
      </Container>
      <Container vertical='md' horizontal='md' style={{ position: 'relative' }}>
        <MenuItem label='Dashboard' isDropdown lead icon={<Chart />} />
        <SidebarSection title='Auctions' isDropdown icon={<Suitcase />}>
          <MenuItem label='Buy parameters' nested href='/buy' />
          <MenuItem label='Sell parameters' nested href='/' />
          <MenuItem label='B2B' nested href='/b2b' />
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
        <MenuItem label='Bytebroker shop' lead icon={<Grid />} href='/shop' />
      </Container>
    </StyledStackMenu>
  );
};
export default StackMenu;
