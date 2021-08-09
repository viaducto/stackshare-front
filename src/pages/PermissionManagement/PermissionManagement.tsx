import React, { useContext, useState } from 'react';
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
  ConfigContext,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Table from '../../components/Table/Table';
import { permissionColumns, permissionData } from './PermissionData';
import { EllypsisVertical, Filter, Plus } from 'react-ikonate';
import Roles from './Roles';
import CreateRoles from './CreateRole';
import Kebab from '../../components/Kebab/Kebab';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTable } from '../BiddingTelco/TableContent';
import { useLoading } from '../../hooks/useLoading';
import { Center } from '../../components/Center';
import { useWindowResize } from '../../hooks/useWindowSize';

const PermissionManagement = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [create, setCreate] = useState<boolean>(false);
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;
  const { load } = useLoading();
  const { offset } = useWindowResize();
  return (
    <BodyContent>
      <HeaderSell
        title='Permission Management'
        breadcrums={[
          { label: 'Home', href: '/', active: false },
          { label: 'Organization Management', href: '#', active: false },
          { label: 'User Management', href: '#', active: true },
        ]}
      >
        <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none'>
          <Tab text='Roles' active />
          <Tab text='Default Roles' />
          <Tab text='Custom Roles' />
        </GroupTab>
      </HeaderSell>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <BodyMain horizontal='sm' expandVertical className='overflow'>
          <Container vertical='md' horizontal='md' style={{ height: '95%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {load ? (
                <Skeleton width='10rem' height='2rem' />
              ) : (
                <Button
                  label='Create New Role'
                  icon={<Plus />}
                  lead
                  onClick={() => {
                    setCreate(true);
                    setOpen(true);
                  }}
                />
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {load ? (
                  <Skeleton width='2rem' height='2rem' />
                ) : (
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
                )}
                <Spacer direction='horizontal' size='sm' />
                {load ? (
                  <Skeleton width='2rem' height='2rem' />
                ) : (
                  <Button
                    aria-label='Actions group'
                    iconSpacing='none'
                    icon={<EllypsisVertical color={dark} fontSize='1rem' />}
                    height='2.063rem'
                    leftSpacing='sm'
                    onClick={() => {}}
                    rightSpacing='sm'
                    size='small'
                    type='button'
                    variant='outline'
                  />
                )}
              </div>
            </div>
            <Container className='overflow'>
              {load ? (
                <>
                  <Spacer size='lg' />
                  <Skeleton height='3rem' />
                  <Spacer size='sm' />
                  <SkeletonTable large />
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
                    hiddenColumns={offset ? ['type', 'money'] : []}
                    filter={false}
                    cols={[
                      ...permissionColumns,
                      {
                        Header: 'Action',
                        accessor: 'action',
                        width: 178,
                        Cell: (props: any) => {
                          const { deleteBtn, action }: { deleteBtn: boolean; action: string } =
                            props.data[props.row.index].action;

                          return (
                            <Center>
                              <Kebab>
                                {deleteBtn && (
                                  <Button
                                    variant='ghost'
                                    label='Delete'
                                    shapeColor='danger'
                                    block
                                  />
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
                            </Center>
                          );
                        },
                      },
                    ]}
                    dataTable={permissionData}
                  />
                </WrapperTable>
              )}
            </Container>
          </Container>
        </BodyMain>
      </div>

      <Drawer onClose={() => setOpen(!open)} active={open} size='sm'>
        <Grid expanded style={{ height: '100%', overflow: 'auto' }}>
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
