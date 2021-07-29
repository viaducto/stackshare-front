import { Container, Spacer } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ContentSkeleton = () => (
  <div>
    <Container
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      expandHorizontal
      horizontal='md'
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Skeleton width='3rem' height='3rem' circle />
        <div>
          <Spacer direction='horizontal' size='md' />
          <Skeleton width='7rem' />
        </div>
      </div>
      <Skeleton width='6rem' height='2rem' />
      <Skeleton width='6rem' height='2rem' />
    </Container>
  </div>
);

const ContentBidding = () => (
  <Container
    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    expandHorizontal
    horizontal='md'
  >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Skeleton width='3rem' height='3rem' circle />
      <div>
        <Spacer direction='horizontal' size='md' />
        <Skeleton width='3rem' />
      </div>
    </div>
    <Skeleton width='3rem' height='2rem' />
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
