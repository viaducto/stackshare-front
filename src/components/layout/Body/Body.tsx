import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../providers';

interface StyledStackBodyProps {
  active: boolean;
}
const StyledStackBody = styled.div<StyledStackBodyProps>`
  width: ${(p) => (p.active ? 'calc(100% - 12.5rem)' : '100%')};
  margin-left: ${(p) => (p.active ? '12.5rem' : '0')};
  float: left;
  overflow: hidden;
  background-color: #f0f2f5;
  box-sizing: border-box;
  transition: width 235ms ease-out, margin 230ms ease-out;
`;
const StackBody = ({ children }: StackBodyProps) => {
  const { isMenuActive } = useContext(AppContext);

  return <StyledStackBody active={isMenuActive}>{children}</StyledStackBody>;
};

interface StackBodyProps {
  children: any;
}
export default StackBody;
