import { Container, Spacer } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TableContent = ({
  withCircular = false,
  columns3 = false,
}: {
  withCircular?: boolean;
  columns3?: boolean;
}) => {
  return (
    <Container
      style={{ display: 'flex', justifyContent: 'space-between' }}
      expandHorizontal
      horizontal='xxxl'
    >
      {withCircular ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Skeleton width='3rem' height='3rem' circle />
          <div>
            <Spacer direction='horizontal' size='md' />
            <Skeleton width='7rem' />
          </div>
        </div>
      ) : (
        <Skeleton width='7.5rem' height='2rem' />
      )}
      <Skeleton width='8.25rem' height='2rem' />
      <Skeleton width='6rem' height='2rem' />
      {!columns3 && (
        <>
          <Skeleton width='6rem' height='2rem' />
          <Skeleton width='6rem' height='2rem' />
        </>
      )}
    </Container>
  );
};

export const SkeletonTable = ({
  withCircular = false,
  columns3 = false,
  large,
}: {
  withCircular?: boolean;
  columns3?: boolean;
  large?: boolean;
}) => (
  <>
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    <Spacer size='sm' />
    <TableContent withCircular={withCircular} columns3={columns3} />
    {large && (
      <>
        <Spacer size='sm' />
        <TableContent withCircular={withCircular} columns3={columns3} />
        <Spacer size='sm' />
        <TableContent withCircular={withCircular} columns3={columns3} />
        <Spacer size='sm' />
        <TableContent withCircular={withCircular} columns3={columns3} />
        <Spacer size='sm' />
        <TableContent withCircular={withCircular} columns3={columns3} />
      </>
    )}
  </>
);

export default TableContent;
