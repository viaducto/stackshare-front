import { ConfigContext, ConfigProps } from '@jp-olvera/jp-viaducto-components';
import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../providers';

interface StyledBodyProps {
  active: boolean;
  configuration: ConfigProps;
}
const StyledBody = styled.div<StyledBodyProps>`
  width: ${(p) => (p.active ? '0' : '100%')};
  @media (min-width: ${(p) => p.configuration.breakpoints.sm}) {
    width: ${(p) => (p.active ? 'calc(100% - 17.313rem)' : '100%')};
    transition: width 235ms linear, margin 235ms linear;
  }
  margin-left: ${(p) => (p.active ? '17.313rem' : '0')};
  float: left;
  overflow: hidden;
  background-color: ${(p) => p.theme.secondaryBackground};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

/** Body component */
const Body = ({ children }: StackBodyProps) => {
  const { isMenuActive } = useContext(AppContext);
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledBody configuration={configuration} active={isMenuActive}>
      {children}
    </StyledBody>
  );
};

interface StackBodyProps {
  children: any;
}
export default Body;
