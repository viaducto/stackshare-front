import styled from 'styled-components';

export const StyledPalette = styled.div<any>`
  height: 100%;
  width: 100%;
  display: flex;
  div.main {
    height: 100%;
    flex-grow: 1;
    flex-basis: 53.82%;
    background-color: ${(p) => p.main};
  }
  div.secondary {
    height: 100%;
    flex-grow: 1;
    flex-basis: 23.09%;
    background-color: ${(p) => p.secondary};
  }
  div.terciary {
    height: 100%;
    flex-grow: 1;
    flex-basis: 23.09%;
    background-color: ${(p) => p.terciary};
  }
`;
