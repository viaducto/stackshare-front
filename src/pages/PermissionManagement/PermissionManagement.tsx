import React, { useState } from 'react';
import {
  Button,
  Container,
  Drawer,
  Spacer,
  Tab,
  WrapperTable,
  Grid,
  Row,
  Column,
  GroupTab,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Table from '../../components/Table/Table';
import { permissionColumns, permissionData } from './PermissionData';
import { EllypsisVertical, Filter, Plus } from 'react-ikonate';
import Roles from './Roles';
import CreateRoles from './CreateRole';
import Kebab from '../../components/Kebab/Kebab';

const PermissionManagement = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [create, setCreate] = useState<boolean>(false);
  return (
    <BodyContent
      style={{
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <HeaderSell
        title='Permission Management'
        breadcrums={[
          { label: 'Home', href: '#', active: false },
          { label: 'Organization Management', href: '#', active: false },
          { label: 'User Management', href: '#', active: true },
        ]}
      >
        <GroupTab fontSize='lg' tabType='tab' verticalSpacing='sm'>
          <Tab text='Roles' active />
          <Tab text='Default Roles' />
          <Tab text='Custom Roles' />
        </GroupTab>
      </HeaderSell>
      <div style={{ display: 'flex', height: '77vh', overflow: 'hidden' }}>
        <BodyMain horizontal='md' expandVertical className='overflow'>
          <Container vertical='md' horizontal='md' style={{ height: '95%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1150 }}>
              <Button
                label='Create New Role'
                icon={<Plus />}
                lead
                onClick={() => {
                  setCreate(true);
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
            <Container className='overflow'>
              <WrapperTable hoverColor='#E6F7FF' colorSelected='#FAFAFA'>
                <Table
                  filter={false}
                  cols={[
                    ...permissionColumns,
                    {
                      Header: 'Action',
                      accessor: 'action',
                      Filter: () => null,
                      width: 180,
                      Cell: (props: any) => {
                        const { deleteBtn, action }: { deleteBtn: boolean; action: string } =
                          props.data[props.row.index].action;

                        return (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <Kebab>
                              {deleteBtn && (
                                <Button variant='ghost' label='Delete' shapeColor='danger' block />
                              )}
                              <Button
                                variant='ghost'
                                label={action}
                                onClick={() => {
                                  setCreate(false);
                                  setOpen(true);
                                }}
                                block
                              />
                            </Kebab>
                          </div>
                        );
                      },
                    },
                  ]}
                  dataTable={permissionData}
                />
              </WrapperTable>
            </Container>
          </Container>
        </BodyMain>
      </div>

      <Drawer onClose={() => setOpen(!open)} active={open} size='sm'>
        <Grid expanded>
          <Row>
            <Column>
              <Container expandHorizontal vertical='md'>
                {!create && <Roles setOpen={setOpen} />}
                {create && <CreateRoles setOpen={setOpen} />}
              </Container>
            </Column>
          </Row>
        </Grid>
      </Drawer>
    </BodyContent>
  );
};

export default PermissionManagement;
