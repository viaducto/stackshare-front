import styled from 'styled-components';

export const StyledVerticalSteps = styled.div<any>`
  .v-line {
    width: 0.063rem;
    background-color: #e8e8e8;
    position: absolute;
    margin-top: 3.1rem;
    margin-left: 0.7rem;
    height: 2.5rem;
  }
  & .finished {
    background-color: #1890ff;
  }
`;
export const Step = styled.div<any>`
  padding: 1.2rem 0;
  position: relative;
  & .index {
    position: absolute;
    font-size: 1rem !important;
    margin-left: 0.56rem;
    margin-top: 0.15rem;
    color: ${(p) => (!p.actual ? '#BFBFBF' : 'white')};
  }
  & .step-finished {
    position: absolute;
    font-size: 1rem !important;
    margin-left: 0.4rem;
    margin-top: 0.3rem;
    color: #1890ff;
  }
  &:before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.25rem;
    border: 1px solid ${(p) => (p.finished || p.actual ? '#1890ff' : '#BFBFBF')};
    background-color: ${(p) => (p.actual ? '#1890ff' : 'inherit')};
    position: absolute;
  }
  & .step-title {
    margin-left: 2.5rem;
  }
`;
