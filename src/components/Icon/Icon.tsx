import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
import React, { useContext } from 'react';
import { AppContext } from '../../providers';
import { StyledIcon } from './StyledIcon';

const Icon = () => {
  const { isMenuActive } = useContext(AppContext);
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledIcon configuration={configuration} className={isMenuActive ? 'open' : ''}>
      <span />
      <span />
      <span />
    </StyledIcon>
  );
};

export default Icon;
