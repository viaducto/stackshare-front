import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../providers';

interface StyledBodyProps {
  active: boolean;
}
const StyledBody = styled.div<StyledBodyProps>`
  width: ${(p) => (p.active ? 'calc(100% - 12.5rem)' : '100%')};
  margin-left: ${(p) => (p.active ? '12.5rem' : '0')};
  float: left;
  overflow: hidden;
  background-color: #f0f2f5;
  box-sizing: border-box;
  transition: width 235ms ease-out, margin 230ms ease-out;
`;

/** Body component */
const Body = ({ children }: StackBodyProps) => {
  const { isMenuActive } = useContext(AppContext);

  return <StyledBody active={isMenuActive}>{children}</StyledBody>;
};

interface StackBodyProps {
  children: any;
}
export default Body;
