import { ConfigProps } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';

interface OFI {
  off: boolean;
  configuration: ConfigProps;
}

export const Offset = styled.div<OFI>`
  .hide {
    transition: opacity 0.4s ease;
    opacity: ${(p) => (p.off ? 0 : 1)};
    max-height: ${(p) => (p.off ? '0' : '400px')};
  }
  .center {
    background-color: ${(p) => p.configuration.colors.background};
    transition: all 0.4s ease;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > img {
        transform: scale(0.8);
      }
    }
    z-index: 9999;
  }
  .no-center {
    position: relative;
    background-color: ${(p) => p.configuration.colors.background};
  }
`;
