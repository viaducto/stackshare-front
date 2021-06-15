import React from 'react';

const BodyContent = ({ children, ...rest }: BodyContentProps) => {
  return <div {...rest}>{children}</div>;
};

interface BodyContentProps {
  children: any;
  style?: any | null | undefined;
}

export default BodyContent;
