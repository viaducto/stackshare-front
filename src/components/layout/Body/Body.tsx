import React from 'react';
import styled from 'styled-components';

const StyledStackBody = styled.div`
  width: calc(100% - 12.5rem);
  margin-left: 12.5rem;
  float: left;
  overflow: hidden;
  background-color: #f0f2f5;
  box-sizing: border-box;
`;
const StackBody = ({ children }: StackBodyProps) => {
  return <StyledStackBody>{children}</StyledStackBody>;
};

interface StackBodyProps {
  children: any;
}
export default StackBody;
