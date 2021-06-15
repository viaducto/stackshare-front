import React from 'react';
import { Container } from '../../Container';
const BodyMain = ({ children, ...rest }: BodyMainProps) => {
  return (
    <div {...rest}>
      <Container vertical='md' horizontal='sm' expandHorizontal>
        {children}
      </Container>
    </div>
  );
};
interface BodyMainProps {
  children: any;
  style?: any | null | undefined;
}
export default BodyMain;
