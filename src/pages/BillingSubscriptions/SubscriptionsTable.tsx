import { Column, Container, Spacer, WrapperTable } from '@jp-olvera/jp-viaducto-components';
import Table from '../../components/Table/Table';
import Kebab from '../../components/Kebab/Kebab';
import { columns, data } from './DataBilling';
import { Center } from '../../components/Center';

import Skeleton from 'react-loading-skeleton';
import { SkeletonTable } from '../BiddingTelco/TableContent';
import { useWindowResize } from '../../hooks/useWindowSize';

const SubscriptionsTable = ({ load }: { load: boolean }) => {
  const { offset } = useWindowResize();
  return (
    <Column style={{ overflow: 'auto' }}>
      {load ? (
        <>
          <Spacer size='sm' />
          <Container horizontal='sm'>
            <Skeleton height='2rem' />
            <Spacer size='md' />
          </Container>
          <SkeletonTable />
        </>
      ) : (
        <WrapperTable
          fontSize='md'
          zebra={false}
          verticalSpacing='md'
          border='horizontal'
          borderColor='#E8E8E8'
          horizontalSpacing='sm'
        >
          <Table
            hiddenColumns={offset ? ['invoice_id', 'method', 'amount', 'pay'] : []}
            pagination={false}
            filter={false}
            cols={[
              ...columns,
              {
                accessor: 'action',
                Header: 'Action',
                minWidth: 100,
                width: 100,
                maxWidth: 230,
                Cell: () => (
                  <Center>
                    <Kebab>
                      <Container vertical='md' horizontal='md'>
                        Table action
                      </Container>
                    </Kebab>
                  </Center>
                ),
              },
            ]}
            dataTable={data}
          />
        </WrapperTable>
      )}
      <Spacer size='xl' />
    </Column>
  );
};

export default SubscriptionsTable;
