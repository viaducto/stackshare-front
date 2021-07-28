import {
  Button,
  ConfigContext,
  Container,
  Drawer,
  GroupTab,
  Spacer,
  Tab,
  WrapperTable,
} from '@jp-olvera/jp-viaducto-components';
import { useContext, useState } from 'react';
import { EllypsisVertical, Filter, Plus } from 'react-ikonate';
import { Center } from '../../components/Center';
import Kebab from '../../components/Kebab/Kebab';
import { BodyContent, BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Table from '../../components/Table/Table';
import { columnsInfrastructure, dataInfrastructure } from './DataInfrastructure';
import InfrastructureDrawer from './InfrastructureDrawer';

const Infrastructure = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>('Type');
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;
  return (
    <BodyContent>
      <HeaderSell
        title='General Preferences'
        breadcrums={[
          { label: 'Home', href: '#', active: false },
          { label: 'Documents', href: '#', active: false },
          { label: 'Invoices', href: '#', active: true },
        ]}
      >
        <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none' base={14}>
          <Tab text='All Items' active />
          <Tab text='Backbone' />
          <Tab text='Points of Presence' />
          <Tab text='Network Access Points' />
          <Tab text='Routers' />
        </GroupTab>
      </HeaderSell>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <BodyMain horizontal='md' expandVertical className='overflow'>
          <Container vertical='md' horizontal='md' style={{ height: '95%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                label='Create New Device'
                icon={<Plus />}
                lead
                onClick={() => {
                  setOpen(true);
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  leftSpacing='sm'
                  iconSpacing='none'
                  rightSpacing='sm'
                  icon={<Filter color={dark} fontSize='1rem' />}
                  type='button'
                  onClick={() => {}}
                  variant='outline'
                  height='2.063rem'
                  size='small'
                />
                <Spacer direction='horizontal' size='sm' />
                <Button
                  leftSpacing='sm'
                  iconSpacing='none'
                  rightSpacing='sm'
                  icon={<EllypsisVertical color={dark} fontSize='1rem' />}
                  type='button'
                  onClick={() => {}}
                  variant='outline'
                  height='2.063rem'
                  size='small'
                />
              </div>
            </div>
            <Container className='overflow'>
              <WrapperTable
                fontSize='md'
                zebra={false}
                verticalSpacing='md'
                border='horizontal'
                borderColor='#E8E8E8'
                horizontalSpacing='sm'
              >
                <Table
                  filter={false}
                  cols={[
                    ...columnsInfrastructure,
                    {
                      Header: 'Action',
                      accessor: 'action',
                      Filter: () => null,
                      width: 180,
                      maxWidth: 250,
                      minWidth: 150,
                      Cell: (props: any) => {
                        const { deleteBtn, action }: { deleteBtn: boolean; action: string } =
                          props.data[props.row.index].action;
                        const cellType = props.data[props.row.index].type;
                        return (
                          <Center>
                            <Kebab>
                              {deleteBtn && (
                                <Button variant='ghost' label='Delete' shapeColor='danger' block />
                              )}
                              <Button
                                variant='ghost'
                                label={action}
                                onClick={() => {
                                  setType(cellType);
                                  setOpen(true);
                                }}
                                block
                              />
                            </Kebab>
                          </Center>
                        );
                      },
                    },
                  ]}
                  dataTable={dataInfrastructure}
                />
              </WrapperTable>
            </Container>
          </Container>
        </BodyMain>
      </div>

      <Drawer active={open} onClose={() => setOpen(!open)} size='lg'>
        <InfrastructureDrawer type={type} setOpen={setOpen} />
      </Drawer>
    </BodyContent>
  );
};

export default Infrastructure;
