import React from 'react';
import { Container } from '../../Container';
const BodyHeader = ({ children, ...rest }: BodyHeaderProps) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'white',
        position: 'sticky',
        top: '0',
        boxShadow: '0 0.125rem 0.313rem -0.125rem rgba(0, 0, 0, 0.2)',
      }}
      {...rest}
    >
      <Container vertical='sm' horizontal='md'>
        {children}
      </Container>
    </div>
  );
};

interface BodyHeaderProps {
  children: any;
  style?: any | null | undefined;
}

export default BodyHeader;
