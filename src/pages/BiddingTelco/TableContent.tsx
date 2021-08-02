import React from 'react';
import { Container, Hideable, Spacer } from '@jp-olvera/jp-viaducto-components';
import Skeleton from 'react-loading-skeleton';
import { useWindowResize } from '../../hooks/useWindowSize';

const TableContent = ({
  withCircular = false,
  columns3 = false,
}: {
  withCircular?: boolean;
  columns3?: boolean;
}) => {
  const { offset } = useWindowResize();
  return (
    <Container
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      expandHorizontal
      horizontal='xxxl'
    >
      {withCircular ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: offset ? '100%' : 'auto',
          }}
        >
          <Skeleton width='3rem' height='3rem' circle />
          <div style={{ margin: '0 .5rem' }}>
            <Skeleton width='7rem' />
          </div>
        </div>
      ) : (
        <Skeleton width='7.5rem' height='2rem' />
      )}
      <Hideable visibleOn='sm'>
        <Skeleton width='8.25rem' height='2rem' />
        <Skeleton width='6rem' height='2rem' />
        {!columns3 && (
          <>
            <Skeleton width='6rem' height='2rem' />
            <Skeleton width='6rem' height='2rem' />
          </>
        )}
      </Hideable>
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
