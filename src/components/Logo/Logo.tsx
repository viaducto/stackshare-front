import React, { useContext } from 'react';
import { Title, Spacer, ConfigContext } from '@jp-olvera/jp-viaducto-components';
import { StyledLogo } from './StyledLogo';
import { useWindowResize } from '../../hooks/useWindowSize';

interface LogoI {
  title?: boolean;
}

const Logo = ({ title = true }: LogoI) => {
  const { configuration } = useContext(ConfigContext);
  const { offset } = useWindowResize();
  return (
    <StyledLogo configuration={configuration} onClick={() => (window.location.href = '/')}>
      <div className='figure'>
        <div className='top' />
        <Spacer size='nano' />
        <div className='bottom' />
      </div>
      {title && (
        <>
          <Spacer size='nano' direction='horizontal' />
          <Title level={offset ? 'D4' : '4'} weight='600'>
            Stackshare
          </Title>
        </>
      )}
    </StyledLogo>
  );
};

export default Logo;
