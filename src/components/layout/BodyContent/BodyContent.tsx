import React from 'react';

const BodyContent = ({ children, ...rest }: BodyContentProps) => {
  return <div {...rest}>{children}</div>;
};

/** The container for the content of each new page */
interface BodyContentProps {
  children: any;
  style?: any | null | undefined;
}

export default BodyContent;
