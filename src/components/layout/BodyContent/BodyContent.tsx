import React from 'react';
import styled from 'styled-components';

const StyledBodyContent = styled.div`
  /* overflow-y: auto; */
  box-sizing: border-box;
  height: 100%;
`;
const BodyContent = ({ children, ...rest }: BodyContentProps) => {
  return <StyledBodyContent {...rest}>{children}</StyledBodyContent>;
};

/** The container for the content of each new page */
interface BodyContentProps {
  children: any;
  style?: any | null | undefined;
}

export default BodyContent;
