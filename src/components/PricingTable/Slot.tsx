import React from 'react';
import styled from 'styled-components';
const StyledSlot = styled.button`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  background-color: rgba(124, 179, 5, 0.4);
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding-left: 5px;
  border-radius: 0rem;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
    width: 0.229rem;
    background-color: #7cb305;
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
  return (
    <StyledSlot type='button' style={{ top, height }} {...rest}>
      <span style={{ fontSize: '1rem' }}>{title} </span>
      <span style={{ fontSize: '0.8rem' }}>{timeLapse}</span>
    </StyledSlot>
  );
};

export default Slot;
