import { useState } from 'react';
import { Drawer, Tab, Container } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
const StyledSlot = styled.button`
  appearance: none;
  background-color: rgba(124, 179, 5, 0.4);
  box-sizing: border-box;
  border: none;
  border-radius: 0rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
  padding: 0 0.68rem;
  position: absolute;
  width: 100%;
  z-index: 1;

  &::before {
    background-color: #7cb305;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 0.229rem;
  }

  &:hover {
    box-shadow: rgba(124, 179, 5, 0.6) 0px 0px 0px 3px;
  }
`;
interface SlotProps {
  title: string;
  timeLapse: string;
  top: string;
  height: string;
}
const Slot = ({ title, timeLapse, top, height, ...rest }: SlotProps) => {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const onCloseDrawer = () => {
    setActiveDrawer(!activeDrawer);
  };
  const showInfo = () => {
    setActiveDrawer(!activeDrawer);
  };
  return (
    <>
      <StyledSlot type='button' style={{ top, height }} onClick={showInfo} {...rest}>
        <span style={{ fontSize: '1rem', textTransform: 'capitalize' }}>{title} </span>
        <span style={{ fontSize: '0.8rem', marginLeft: 'auto' }}>{timeLapse}</span>
      </StyledSlot>
      <Drawer active={activeDrawer} onClose={onCloseDrawer}>
        <Container expandVertical expandHorizontal vertical='lg' horizontal='sm'>
          <h4>Mondays 9:00 AM(EST)</h4>
          <div style={{ display: 'flex' }}>
            <Tab text='Bandwidth' />
            <Tab text='Packages' />
            <Tab text='Secure channels' />
          </div>
          <div style={{ display: 'flex' }}>
            <Container vertical='sm' horizontal='sm'>
              <p>Expires by</p>
              <p>
                <b>March 4, 2021. 4:00 am</b>
              </p>
            </Container>
            <Container vertical='sm' horizontal='sm'>
              <p>Expires by</p>
              <p>
                <b>March 4, 2021. 4:00 am</b>
              </p>
            </Container>
          </div>
        </Container>
      </Drawer>
    </>
  );
};

export default Slot;
