import {
  Button,
  Container,
  Drawer,
  GroupTab,
  Spacer,
  Tab,
  WrapperTable,
} from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import { useState } from 'react';
import { EllypsisVertical, Filter, Plus } from 'react-ikonate';
import { BodyContent, BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Table from '../../components/Table/Table';
import { columnsInfrastructure, dataInfrastructure } from './DataInfrastructure';
import InfrastructureDrawer from './InfrastructureDrawer';

const Infrastructure = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>('Type');
  return (
    <BodyContent
      style={{
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <HeaderSell
        title='General Preferences'
        breadcrums={[
          { label: 'Home', href: '#', active: false },
          { label: 'Documents', href: '#', active: false },
          { label: 'Invoices', href: '#', active: true },
        ]}
      >
        <GroupTab fontSize='lg' tabType='tab' verticalSpacing='sm'>
          <Tab text='All Items' active />
          <Tab text='Backbone' />
          <Tab text='Points of Presence' />
          <Tab text='Network Access Points' />
          <Tab text='Routers' />
        </GroupTab>
      </HeaderSell>
      <div style={{ display: 'flex', height: '77vh', overflow: 'auto' }}>
        <BodyMain horizontal='md' expandVertical>
          <Container
            vertical='md'
            horizontal='md'
            style={{ backgroundColor: 'white', height: '95%', overflow: 'auto' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1150 }}>
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
                  icon={<Filter color='#595959' fontSize='1rem' />}
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
                  icon={<EllypsisVertical color='#595959' fontSize='1rem' />}
                  type='button'
                  onClick={() => {}}
                  variant='outline'
                  height='2.063rem'
                  size='small'
                />
              </div>
            </div>
            <WrapperTable hoverColor='#E6F7FF' colorSelected='#FAFAFA'>
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
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                          }}
                        >
                          {deleteBtn && (
                            <Button variant='ghost' label='Delete' shapeColor='danger' />
                          )}
                          <Spacer direction='horizontal' size='micro' />
                          <div style={{ width: 1, height: '100%', backgroundColor: '#d9d9d9' }} />
                          <Spacer direction='horizontal' size='micro' />
                          <Button
                            variant='ghost'
                            label={action}
                            onClick={() => {
                              setType(cellType);
                              setOpen(true);
                            }}
                          />
                        </div>
                      );
                    },
                  },
                ]}
                dataTable={dataInfrastructure}
              />
            </WrapperTable>
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
