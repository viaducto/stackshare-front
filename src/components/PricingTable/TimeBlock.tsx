import styled from 'styled-components';

const StyledDiv = styled.div`
  box-sizing: border-box;
  height: 56px;
  border-right: 1px solid #ebebeb;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0px;
    height: 1px;
    width: 1.125rem;
    background-color: #ebebeb;
  }

  span {
    position: absolute;
    bottom: -8px;
    right: 1.13rem;
    z-index: 1;
  }
`;

interface TimeBlockProps {
  hora: string | number;
}
const TimeBlock = ({ hora, ...rest }: TimeBlockProps) => {
  return (
    <StyledDiv {...rest}>
      <span>{hora}hrs</span>
    </StyledDiv>
  );
};

export default TimeBlock;
