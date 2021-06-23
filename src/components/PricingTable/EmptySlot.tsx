import { useState } from 'react';
import styled from 'styled-components';
import {
  Drawer,
  Container,
  Paragraph,
  Input,
  Button,
  Spacer,
} from '@jp-olvera/jp-viaducto-components';

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 28px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px 0px 0px 3px rgb(24, 144, 255);
  }
`;
const EmptySlot = () => {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const onCloseDrawer = () => {
    setActiveDrawer(!activeDrawer);
  };
  const showDrawer = () => {
    setActiveDrawer(!activeDrawer);
  };

  return (
    <>
      <StyledButton type='button' onClick={showDrawer}></StyledButton>
      <Drawer active={activeDrawer} onClose={onCloseDrawer}>
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container
              vertical='md'
              left='xl'
              right='md'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                Time preset
              </Paragraph>
            </Container>
          </div>
          <Container vertical='lg' horizontal='md' border='outside'>
            <Input type='text' label='Name the time preset' />
            <Spacer size='sm' />
            <Button label='Save' onClick={onCloseDrawer} />
          </Container>
        </div>
      </Drawer>
    </>
  );
};

export default EmptySlot;
