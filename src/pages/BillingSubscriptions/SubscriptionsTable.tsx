import { Column, Container, Spacer, WrapperTable } from '@jp-olvera/jp-viaducto-components';
import Table from '../../components/Table/Table';
import Kebab from '../../components/Kebab/Kebab';
import { columns, data } from './DataBilling';

const SubscriptionsTable = () => {
  return (
    <Column style={{ overflow: 'auto' }}>
      <WrapperTable align='center' zebra={false} border='horizontal'>
        <Table
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
                <div style={{ width: '100%' }}>
                  <Kebab>
                    <Container vertical='md' horizontal='md'>
                      Table action
                    </Container>
                  </Kebab>
                </div>
              ),
            },
          ]}
          dataTable={data}
        />
      </WrapperTable>
      <Spacer size='xl' />
    </Column>
  );
};

export default SubscriptionsTable;
