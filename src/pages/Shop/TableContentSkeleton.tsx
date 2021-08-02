import { Container, Hideable, Spacer } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useWindowResize } from '../../hooks/useWindowSize';

const ContentSkeleton = () => {
  const { offset } = useWindowResize();
  return (
    <div>
      <Container
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        expandHorizontal
        horizontal='md'
      >
        <div
          style={{
            display: 'flex',
            justifyContent: offset ? 'center' : 'flex-start',
            alignItems: 'center',
            width: offset ? '100%' : 'auto',
          }}
        >
          <Skeleton width='3rem' height='3rem' circle />
          <div>
            <Spacer direction='horizontal' size='md' />
            <Skeleton width='7rem' />
          </div>
        </div>
        <Hideable visibleOn='sm'>
          <Skeleton width='6rem' height='2rem' />
          <Skeleton width='6rem' height='2rem' />
        </Hideable>
      </Container>
    </div>
  );
};

const ContentBidding = () => (
  <Container
    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    horizontal='md'
    expandVertical
  >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Skeleton width='3rem' height='3rem' circle />
      <div>
        <Spacer direction='horizontal' size='md' />
        <Skeleton width='7rem' />
      </div>
    </div>
    <Hideable visibleOn='sm'>
      <Skeleton width='3rem' height='2rem' />
    </Hideable>
  </Container>
);

export const TableContentSkeletonBidding = () => (
  <>
    <ContentBidding />
    <Spacer size='xs' />
    <ContentBidding />
    <Spacer size='xs' />
    <ContentBidding />
    <Spacer size='xs' />
    <ContentBidding />
  </>
);

const TableContentSkeleton = () => (
  <>
    <ContentSkeleton />
    <Spacer size='xs' />
    <ContentSkeleton />
    <Spacer size='xs' />
    <ContentSkeleton />
    <Spacer size='xs' />
    <ContentSkeleton />
    <Spacer size='xs' />
    <ContentSkeleton />
    <Spacer size='xs' />
    <ContentSkeleton />
    <Spacer size='xs' />
    <ContentSkeleton />
    <Spacer size='xs' />
    <ContentSkeleton />
  </>
);

export default TableContentSkeleton;
