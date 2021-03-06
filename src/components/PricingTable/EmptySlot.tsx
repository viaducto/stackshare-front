import { useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Container,
  Column,
  Drawer,
  Grid,
  Input,
  Paragraph,
  Row,
} from '@jp-olvera/jp-viaducto-components';
import CloseButton from '../CloseButton/CloseButton';

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 28px;
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.pricingTableBorder};
  background-color: inherit;
  cursor: pointer;
  background-color: transparent;
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
        <Grid expanded className='border-bottom'>
          <Row>
            <Column>
              <Container
                vertical='md'
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                  Time preset
                </Paragraph>
                <CloseButton onClick={onCloseDrawer} />
              </Container>
            </Column>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Column>
              <Container vertical='sm'>
                <div className='form-control'>
                  <Input
                    type='text'
                    inputSize='small'
                    label='Name the time preset'
                    border='outside'
                  />
                </div>
                <Button label='Save' onClick={onCloseDrawer} />
              </Container>
            </Column>
          </Row>
        </Grid>
      </Drawer>
    </>
  );
};

export default EmptySlot;
