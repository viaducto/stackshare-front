import React, { useContext } from 'react';
import { Title, Spacer, ConfigContext } from '@jp-olvera/jp-viaducto-components';
import { StyledLogo } from './StyledLogo';

const Logo = () => {
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledLogo configuration={configuration}>
      <div className='figure'>
        <div className='top' />
        <Spacer size='nano' />
        <div className='bottom' />
      </div>
      <Spacer size='nano' direction='horizontal' />
      <Title level='4' lineHeight='1.5rem' color='#595959' weight='600'>
        Stackshare
      </Title>
    </StyledLogo>
  );
};

export default Logo;
