import { useState, useRef } from 'react';
import {
  Tab,
  Container,
  Paragraph,
  Popover,
  Anchor,
  GroupTab,
} from '@jp-olvera/jp-viaducto-components';
import { XYPlot, LineSeries } from 'react-vis';
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
  /* z-index: 1; */

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
  const ref = useRef(null);
  const [activePopover, setActivePopover] = useState(false);
  const onClose = () => {
    setActivePopover(!activePopover);
  };
  const showInfo = () => {
    setActivePopover(!activePopover);
  };
  const myData = [
    {
      x: 0,
      y: 5.3,
    },
    {
      x: 2,
      y: 4,
    },
    {
      x: 3,
      y: 5,
    },
    {
      x: 4,
      y: 6.5,
    },
    {
      x: 5,
      y: 5.5,
    },
    {
      x: 6,
      y: 3,
    },
    {
      x: 7,
      y: 4.5,
    },
    {
      x: 8,
      y: 3,
    },
    {
      x: 9,
      y: 5,
    },
    {
      x: 10,
      y: 4.7,
    },
  ];
  return (
    <>
      <StyledSlot type='button' ref={ref} style={{ top, height }} onClick={showInfo} {...rest}>
        <span style={{ fontSize: '1rem', textTransform: 'capitalize' }}>{title} </span>
        <span style={{ fontSize: '0.8rem', marginLeft: 'auto' }}>{timeLapse}</span>
      </StyledSlot>
      <Popover
        target={ref}
        active={activePopover}
        position='left'
        elevation={1}
        zIndex={9999}
        content={
          <Container expandVertical expandHorizontal vertical='lg' horizontal='lg'>
            <Container>
              <Paragraph weight='bold' size='lg'>
                Mondays 9:00 AM(EST)
              </Paragraph>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none'>
                <Tab text='Bandwidth' />
                <Tab text='Packages' />
                <Tab text='Secure channels' />
              </GroupTab>
            </div>
            <Container vertical='sm'>
              <XYPlot height={100} width={300} style={{ fill: 'none', strokeWidth: 3 }}>
                <LineSeries data={myData} color='#1665D8' />
              </XYPlot>
            </Container>
            <div style={{ display: 'flex' }}>
              <Container vertical='sm' right='sm'>
                <Paragraph color='darkGray'>Expires by</Paragraph>
                <Paragraph size='lg'>March 4, 2021. 4:00 am</Paragraph>
              </Container>
              <Container vertical='sm'>
                <Paragraph color='darkGray'>Expires by</Paragraph>
                <Paragraph size='lg'>March 4, 2021. 4:00 am</Paragraph>
                <Anchor color='#1665D8' href='#' label='See all' size='lg' />
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
