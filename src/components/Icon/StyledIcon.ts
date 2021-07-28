import styled from 'styled-components';

export const StyledIcon = styled.div<any>`
  width: 100%;
  margin: 0;
  position: relative;
  cursor: pointer;
  display: inline-block;
  &.open {
    transform: scale(0.7);
    & span:nth-child(1) {
      width: 80%;
      transform: rotate(145deg);
    }
    & span:nth-child(2) {
      left: 0.063rem;
      width: 150%;
    }
    & span:nth-child(3) {
      width: 80%;
      transform: rotate(35deg);
    }
  }
  & span {
    background-color: ${(p) => p.configuration.colors.text.dark};
    position: absolute;
    border-radius: 0.126rem;
    transition: all 0.2s ease;
    height: 0.188rem;
    width: 100%;
    left: 0;
    display: block;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 0.4rem;
    }
    &:nth-child(3) {
      top: 0.8rem;
    }
  }
`;
