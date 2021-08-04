import { ConfigProps } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';

interface OFI {
  off: boolean;
  configuration: ConfigProps;
}

export const Offset = styled.div<OFI>`
  height: 100%;
  overflow: hidden;

  .ref {
    height: 100%;
    overflow: auto;
  }
  .margin-top-scroll {
    margin-top: 100%;
  }
  .absolute-top {
    position: absolute;
    top: 0;
    background-color: ${(p) => p.configuration.colors.background};
  }
  .hide {
    transition: opacity 200ms ease;
    opacity: ${(p) => (p.off ? 0 : 1)};
    max-height: ${(p) => (p.off ? '0' : '400px')};
  }
  .center {
    background-color: ${(p) => p.configuration.colors.background};
    transition: all 200ms ease;
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
