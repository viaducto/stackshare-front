import React from 'react';
import styled from 'styled-components';
import { SidebarSection } from '@jp-olvera/jp-viaducto-components';
import { Container } from '../../Container';

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
      <Container vertical='md' horizontal='md'>
        <SidebarSection title='Dashboard' isDropdown lead icon='⏲' />
        <SidebarSection
          title='Autions'
          isDropdown
          items={[{ label: 'Buy parameters' }, { label: 'Sell parameters' }]}
          lead
          icon='⏲'
        />
        <SidebarSection title='Navigation Four' isDropdown lead icon='⏲' />
        <SidebarSection
          title='Settings'
          lead
          icon='⏲'
          isDropdown
          items={[
            { label: 'Option 1' },
            { label: 'Option 2' },
            { label: 'Option 3 ' },
            { label: 'Option 4' },
          ]}
        />
      </Container>
    </StyledStackMenu>
  );
};
export default StackMenu;
