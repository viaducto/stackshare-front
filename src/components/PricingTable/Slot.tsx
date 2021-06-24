import { useState, useRef } from 'react';
import { Drawer, Tab, Container, Paragraph, Popover } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
const StyledSlot = styled.button<any>`
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
  const ref = useRef();
  const [activePopover, setActivePopover] = useState(false);
  const onClose = () => {
    setActivePopover(!activePopover);
  };
  const showInfo = () => {
    setActivePopover(!activePopover);
  };
  return (
    <>
      <StyledSlot type='button' ref={ref} style={{ top, height }} onClick={showInfo} {...rest}>
        <span style={{ fontSize: '1rem', textTransform: 'capitalize' }}>{title} </span>
        <span style={{ fontSize: '0.8rem', marginLeft: 'auto' }}>{timeLapse}</span>
      </StyledSlot>
      <Popover
        target={ref}
        active={activePopover}
        position='right'
        elevation={3}
        elevationDirection='bottom'
        content={
          <Container expandVertical expandHorizontal vertical='lg' horizontal='sm'>
            <Container horizontal='sm'>
              <Paragraph weight='bold'>Mondays 9:00 AM(EST)</Paragraph>
            </Container>
            <div style={{ display: 'flex' }}>
              <Tab text='Bandwidth' />
              <Tab text='Packages' />
              <Tab text='Secure channels' />
            </div>
            <div style={{ display: 'flex' }}>
              <Container vertical='sm' horizontal='sm'>
                <Paragraph>Expires by</Paragraph>
                <Paragraph weight='bold'>March 4, 2021. 4:00 am</Paragraph>
              </Container>
              <Container vertical='sm' horizontal='sm'>
                <Paragraph>Expires by</Paragraph>
                <Paragraph weight='bold'>March 4, 2021. 4:00 am</Paragraph>
              </Container>
            </div>
          </Container>
        }
        handleClose={onClose}
      />
    </>
  );
};

export default Slot;
