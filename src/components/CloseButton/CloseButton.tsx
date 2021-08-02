import styled from 'styled-components';
import { Close } from 'react-ikonate';
const StyledButton = styled.button`
  appearance: none;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${(p) => p.theme.title};
  background-color: transparent;
`;
const CloseButton = ({ ...rest }) => {
  return (
    <StyledButton type='submit' {...rest}>
      {' '}
      <Close fontSize={20} />
    </StyledButton>
  );
};

export default CloseButton;
