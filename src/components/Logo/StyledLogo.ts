import styled from 'styled-components';

export const StyledLogo = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  & .figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .top {
      margin-left: ${(p) => p.configuration.spacing.nano};
      width: 1.406rem;
      height: 0.351rem;
      background-color: #40a9ff;
      border-radius: 7.5px 37.5px 1.5px 7.5px;
    }
    & .bottom {
      width: 1.406rem;
      height: 0.351rem;
      background-color: #40a9ff;
      border-radius: 1.5px 7.5px 7.5px 37.5px;
    }
  }
`;
