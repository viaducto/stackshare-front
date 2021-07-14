import { useState } from 'react';
import { BodyHeader, BodyMain } from '../../components/layout';
import {
  Avatar,
  Breadcrums,
  Breadcrum,
  Button,
  Column,
  Container,
  Drawer,
  Grid,
  GroupTab,
  Paragraph,
  Row,
  Spacer,
  Tab,
  Title,
  Switch,
  WrapperTable,
} from '@jp-olvera/jp-viaducto-components';
import { Plus, Cup } from 'react-ikonate';
import Table from '../../components/Table/Table';
import Tag from '../../components/Tag/Tag';

const UserManagement = () => {
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const [selectedUser, setselectedUser] = useState<null | any>(null);

  const handleAction = (userProps: any) => {
    setselectedUser(userProps);
    console.log(userProps);
    handleDrawerActive();
  };
  const handleDrawerActive = () => {
    setIsDrawerActive((e) => !e);
  };

  const [showApps, setShowApps] = useState(true);
  const apps = [
    { appname: 'Atlassian', type: 'Productivity' },
    { appname: 'Twitter', type: 'Social' },
    { appname: 'Facebook', type: 'Social' },
    { appname: 'Zoom', type: 'Productivity' },
    { appname: 'Youtube', type: 'Social' },
    { appname: 'Drive', type: 'Storage' },
    { appname: 'Dropbox', type: 'Storage' },
  ];

  return (
    <>
      <BodyHeader>
        <Container vertical='sm'>
          <Breadcrums fontSize='md'>
            <Breadcrum label='Home' href='' />
            <Breadcrum label='Organization Management' href='' />
            <Breadcrum label='User Management' href='' active />
          </Breadcrums>
          <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
            User Management
          </Paragraph>
          <GroupTab
            fontSize='md'
            horizontalSpacing='md'
            position='bottom'
            tabType='tab'
            verticalSpacing='sm'
          >
            <Tab text='All users' />

            <Tab text='Active Users' />

            <Tab text='Inactive Users' />
          </GroupTab>
        </Container>
      </BodyHeader>
      <BodyMain>
        <Container style={{ backgroundColor: 'white', height: '50%', overflow: 'auto' }} top='md'>
          <Container horizontal='xl'>
            <Button label='Create New User' icon={<Plus />} lead radius='sm' />
          </Container>
          <Container
            top='md'
            horizontal='xl'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              minHeight: '72vh',
              flexWrap: 'wrap',
            }}
          >
            <WrapperTable>
              <Table
                cols={[
                  { Header: 'Name', accessor: 'name', Filter: () => null },
                  { Header: 'Email', accessor: 'email', Filter: () => null },
                  { Header: 'Location', accessor: 'location', Filter: () => null },
                  { Header: 'Role', accessor: 'role', Filter: () => null },
                  {
                    Header: 'Action',
                    accessor: 'action',
                    width: 200,
                    minWidth: 100,
                    maxWidth: 300,
                    sortable: true,
                    Filter: () => null,
                    Cell: (props: any) => {
                      return (
                        <span
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Button
                            label='Install'
                            variant='ghost'
                            onClick={() => {
                              handleAction(props.data[props.row.index]);
                            }}
                          />
                          |
                          <Button
                            label='Edit'
                            variant='ghost'
                            onClick={() => {
                              handleAction(props.data[props.row.index]);
                            }}
                          />
                        </span>
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
          </Container>
        </Container>
      </BodyMain>
      <Drawer onClose={handleDrawerActive} active={isDrawerActive}>
        <>
          <div className='border-bottom'>
            <Grid expanded>
              <Row>
                <Column>
                  <Container
                    vertical='md'
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                      User Details
                    </Paragraph>
                    <button
                      onClick={handleDrawerActive}
                      style={{
                        border: 'none',
                        backgroundColor: 'white',
                        fontSize: '22px',
                        padding: 0,
                        marginLeft: 'auto',
                        cursor: 'pointer',
                      }}
                    >
                      X
                    </button>
                  </Container>
                </Column>
              </Row>
            </Grid>
          </div>
          <Grid expanded>
            <Row>
              <Column>
                <Container vertical='lg'>
                  <Avatar
                    src='https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg'
                    alt=''
                    height='80px'
                    width='80px'
                  />
                  <Spacer size='lg' />
                  {selectedUser !== null ? (
                    <>
                      <Title level='3' weight='bold'>
                        {selectedUser?.name}
                      </Title>
                      <Spacer size='sm' />
                      <Paragraph size='md' color='gray'>
                        Efficiently network progressive ROI and multifunctional metrics.
                      </Paragraph>
                      <Spacer size='sm' />
                      <div
                        style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}
                      >
                        <Cup />
                        <Spacer size='sm' direction='horizontal' />
                        <Paragraph size='md' color='gray'>
                          {selectedUser?.email}
                        </Paragraph>
                      </div>
                      <div
                        style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}
                      >
                        <Cup />
                        <Spacer size='sm' direction='horizontal' />
                        <Paragraph size='md' color='gray'>
                          +1 245 878 7878
                        </Paragraph>
                      </div>
                      <div
                        style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}
                      >
                        <Cup />
                        <Spacer size='sm' direction='horizontal' />
                        <Paragraph size='md' color='gray'>
                          $127 USD mo.
                        </Paragraph>
                      </div>
                    </>
                  ) : null}
                </Container>
                <hr />
                <Container bottom='lg' top='sm'>
                  <div className='flex'>
                    <Tab
                      text='Overview'
                      active={showApps}
                      onClick={() => {
                        setShowApps((d) => !d);
                      }}
                    />
                    <Spacer size='lg' direction='horizontal' />
                    <Tab
                      text='Apps'
                      active={!showApps}
                      onClick={() => {
                        setShowApps((d) => !d);
                      }}
                    />
                  </div>
                  <Spacer size='sm' />
                  {showApps ? (
                    <>
                      <Title level='5' weight='bold'>
                        Access Groups
                      </Title>
                      <Spacer size='sm' />
                      <div className='flex'>
                        <Tag
                          backgroundColor='#F5F5F5'
                          borderColor='#D9D9D9'
                          color='#595959'
                          label='Teachers'
                        />
                        <Spacer size='sm' direction='horizontal' />

                        <Tag
                          backgroundColor='#F5F5F5'
                          borderColor='#D9D9D9'
                          color='#595959'
                          label='Design'
                        />
                        <Spacer size='sm' direction='horizontal' />
                        <Tag
                          backgroundColor='#F5F5F5'
                          borderColor='#D9D9D9'
                          color='#595959'
                          label='Blink 182'
                        />
                      </div>
                    </>
                  ) : (
                    <WrapperTable hover={false}>
                      <table>
                        <thead>
                          <tr>
                            <td></td>
                            <td style={{ minWidth: '181px' }}>App Name</td>
                            <td>Type</td>
                          </tr>
                        </thead>
                        <tbody>
                          {apps.map((e) => (
                            <tr>
                              <td>
                                <Avatar
                                  width='24px'
                                  height='24px'
                                  alt=''
                                  src='data:image/jpeg;base64,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'
                                />
                              </td>
                              <td>{e.appname}</td>
                              <td>{e.type}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </WrapperTable>
                  )}
                </Container>
                <hr />
                <Container vertical='lg'>
                  <Title level='5' weight='bold'>
                    Security
                  </Title>
                  <Paragraph size='lg'>MFA Enabled</Paragraph>
                  <Spacer size='md' />
                  <Title level='5' weight='bold'>
                    Roles
                  </Title>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Paragraph size='lg'>System Administrator</Paragraph>
                    <Switch inputSize='sm' defaultChecked color='#1890FF' />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Paragraph size='lg'>Billing Manager</Paragraph>
                    <Switch inputSize='sm' defaultChecked color='#1890FF' />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Paragraph size='lg'>Location Owner</Paragraph>
                    <Switch inputSize='sm' defaultChecked color='#1890FF' />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Paragraph size='lg'>Siper admin</Paragraph>
                    <Switch inputSize='sm' defaultChecked color='#1890FF' />
                  </div>
                </Container>
              </Column>
            </Row>
          </Grid>
        </>
      </Drawer>
    </>
  );
};

export default UserManagement;
