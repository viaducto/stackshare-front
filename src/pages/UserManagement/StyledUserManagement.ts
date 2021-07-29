import { ConfigProps } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';

interface OFI {
  off: boolean;
  configuration: ConfigProps;
}

export const Offset = styled.div<OFI>`
  .hide {
    transition: 0.4s ease;
    opacity: ${(p) => (p.off ? 0 : 1)};
    ${(p) => p.off && 'height: 0;'};
  }
  .center {
    * {
      transition: 0.4s ease;
    }
    background-color: ${(p) => p.configuration.colors.background};
    & > div {
      & > img {
        transform: scale(0.8);
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .no-center {
    position: relative;
  }
`;