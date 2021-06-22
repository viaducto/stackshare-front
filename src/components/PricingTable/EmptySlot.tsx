import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 28px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(0, 0, 255, 0.3) 0px 0px 0px 3px;
  }
`;
const EmptySlot = () => {
  return <StyledButton type='button'></StyledButton>;
};

export default EmptySlot;
