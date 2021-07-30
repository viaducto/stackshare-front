import React from 'react';
import { useState } from 'react';
import { BodyMain } from '../../components/layout';
import {
  Button,
  Container,
  Drawer,
  GroupTab,
  Paragraph,
  Spacer,
  Tab,
  WrapperTable,
  AvatarWithText,
} from '@jp-olvera/jp-viaducto-components';
import { Plus } from 'react-ikonate';
import Table from '../../components/Table/Table';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Kebab from '../../components/Kebab/Kebab';
import { Center } from '../../components/Center';
import { Left } from '../../components/Left';
import { Right } from '../../components/Right';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTable } from '../BiddingTelco/TableContent';
import DrawerManagement from './DrawerManagement';

const UserManagement = () => {
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const [load, setLoad] = useState(true);
  const [selectedUser, setselectedUser] = useState<{
    name: string;
    email: string;
    location: string;
    role: string;
    id: string;
  }>({
    name: '',
    email: '',
    location: '',
    role: '',
    id: '',
  });

  const handleAction = (userProps: any) => {
    setselectedUser(userProps);
    handleDrawerActive();
  };
  const handleDrawerActive = () => {
    setIsDrawerActive((e) => !e);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  });

  return (
    <>
      <HeaderSell
        title='User Management'
        breadcrums={[
          { label: 'Home', href: '/', active: false },
          { label: 'Organization Management', href: '', active: false },
          { label: 'User Management', href: '', active: true },
        ]}
      >
        <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none'>
          <Tab text='All users' />
          <Tab text='Active Users' />
          <Tab text='Inactive Users' />
        </GroupTab>
      </HeaderSell>
      <div style={{ overflow: 'auto', height: '80%' }}>
        <BodyMain>
          <Container top='md'>
            <Container horizontal='md'>
              {load ? (
                <>
                  <Skeleton width='10rem' height='2rem' />
                  <Spacer size='sm' />
                  <Skeleton width='16.5rem' height='2rem' />
                </>
              ) : (
                <Button label='Create New User' icon={<Plus />} lead radius='sm' />
              )}
            </Container>
            <Container
              vertical='md'
              horizontal='md'
              className='overflow'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                minHeight: load ? '50hh' : '72vh',
                flexWrap: 'wrap',
              }}
            >
              {load ? (
                <SkeletonTable withCircular />
              ) : (
                <>
                  <WrapperTable
                    fontSize='md'
                    zebra={false}
                    verticalSpacing='md'
                    border='horizontal'
                    borderColor='#E8E8E8'
                    horizontalSpacing='sm'
                  >
                    <Table
                      cols={[
                        {
                          Header: 'Name',
                          accessor: 'name',
                          width: Math.round(window.innerWidth / 3),
                          minWidth: 200,
                          Cell: (props: any) => {
                            const { name, email } = props.data[props.row.index];
                            return (
                              <Left>
                                <Container left='xxl'>
                                  <AvatarWithText
                                    avatar={{
                                      src: 'https://i.pravatar.cc/50',
                                      alt: 'app',
                                      width: '50',
                                      height: '50',
                                    }}
                                    spacing='md'
                                  >
                                    <div>
                                      <Paragraph>{name}</Paragraph>
                                      <Paragraph>{email}</Paragraph>
                                    </div>
                                  </AvatarWithText>
                                </Container>
                              </Left>
                            );
                          },
                        },
                        {
                          Header: 'Location',
                          accessor: 'location',
                          width: Math.round(window.innerWidth / 5),
                          minWidth: 200,
                          Cell: (row: any) => (
                            <Center>
                              <Paragraph>{row.value}</Paragraph>
                            </Center>
                          ),
                        },
                        {
                          Header: 'Role',
                          accessor: 'role',
                          width: Math.round(window.innerWidth / 8),
                          minWidth: 200,
                          Cell: (row: any) => (
                            <Right>
                              <Container right='md'>
                                <Paragraph>{row.value}</Paragraph>
                              </Container>
                            </Right>
                          ),
                        },
                        {
                          Header: 'Action',
                          accessor: 'action',
                          width: Math.round(window.innerWidth / 10),
                          minWidth: 200,
                          Cell: (props: any) => {
                            return (
                              <Center>
                                <Kebab>
                                  <Button
                                    label='Install'
                                    variant='ghost'
                                    onClick={() => {
                                      handleAction(props.data[props.row.index]);
                                    }}
                                    radius='none'
                                    block
                                  />
                                  <Button
                                    label='Edit'
                                    variant='ghost'
                                    onClick={() => {
                                      handleAction(props.data[props.row.index]);
                                    }}
                                    radius='none'
                                    block
                                  />
                                </Kebab>
                              </Center>
                            );
                          },
                        },
                      ]}
                      dataTable={[
                        {
                          name: 'John Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '1',
                        },
                        {
                          name: 'Alex Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '2',
                        },
                        {
                          name: 'Alexa Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '3',
                        },
                        {
                          name: 'Frank Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '4',
                        },
                        {
                          name: 'Frank Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '4',
                        },
                        {
                          name: 'Frank Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '5',
                        },
                        {
                          name: 'Frank Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '6',
                        },
                        {
                          name: 'Frank Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '7',
                        },
                        {
                          name: 'Frank Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '8',
                        },
                        {
                          name: 'Frank Doe',
                          email: 'john@doe.com',
                          location: 'Luxemburgo',
                          role: '32',
                          id: '9',
                        },
                      ]}
                    />
                  </WrapperTable>
                  <Spacer size='xl' />
                </>
              )}
            </Container>
          </Container>
        </BodyMain>
      </div>
      <Drawer onClose={handleDrawerActive} active={isDrawerActive}>
        <DrawerManagement selectedUser={selectedUser} handleDrawerActive={handleDrawerActive} />
      </Drawer>
    </>
  );
};

export default UserManagement;
