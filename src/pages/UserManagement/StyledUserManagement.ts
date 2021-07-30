import { ConfigProps } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';

interface OFI {
  off: boolean;
  configuration: ConfigProps;
}

export const Offset = styled.div<OFI>`
  .hide {
    transition: 200ms ease;
    opacity: ${(p) => (p.off ? 0 : 1)};
    max-height: ${(p) => (p.off ? '0' : '400px')};
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
    }
    position: sticky;
    top: 0rem;
    z-index: 1;
  }
  .no-center {
    position: relative;
  }
`;
