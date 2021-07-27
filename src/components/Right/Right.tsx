import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import { useContext } from 'react';

const Center = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text.dark;
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: `${dark}`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Center;
