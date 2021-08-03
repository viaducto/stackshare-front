import React from 'react';
import { Column, Container, Grid, Row, Title } from '@jp-olvera/jp-viaducto-components';
import { NavLink, useLocation } from 'react-router-dom';
import { BodyContent, BodyMain } from '../../components/layout';
import { VerticalSteps } from '../../components/VerticalSteps';
import LocationManagement from '../LocationManagement/LocationManagement';

const Generic = ({ path }: { path?: string }) => {
  const location = useLocation().pathname;
  const uri = path || location;
  return (
    <BodyContent>
      <BodyMain>
        <div className='overflow'>
          <Container vertical='lg' style={{ height: '80vh', overflow: 'auto' }}>
            <Container
              vertical='sm'
              style={{ display: 'flex', justifyContent: 'center' }}
              expandHorizontal
            >
              <Title
                style={{ cursor: 'pointer' }}
                align='center'
                onClick={() => (window.location.href = '/')}
                color='primary'
              >
                app.stackshare.co
              </Title>
              <Title align='center'>{uri}</Title>
            </Container>

            {redirection(path || location)}
          </Container>
        </div>
      </BodyMain>
    </BodyContent>
  );
};

export default Generic;

const redirection = (path: string): JSX.Element => {
  const regex = /\/organization\/+([\w\s])+\/+(.*)/;
  if (regex.test(path)) {
    return <ShowPath />;
  } else {
    switch (path) {
      case '/new-org':
        const steps = [
          {
            title: 'Create an organization',
            description: 'This is the description.',
            finished: false,
            line: true,
            actual: true,
          },
          {
            title: 'Setup Organization',
            description: 'This is the description.',
            finished: false,
            line: true,
            actual: false,
          },
          {
            title: 'Confirmation',
            description: 'This is the description.',
            finished: false,
            line: false,
            actual: false,
          },
        ];
        return <NewOrg steps={steps} />;
      case '/profile':
        return <Profile path='profile' />;
      case '/profile/billing':
        return <Profile path='billing' />;
      case '/profile/devices':
        return <Profile path='devices' />;
      case '/location-management':
        return <LocationManagement />;
      case '/':
      case '/dashboard':
      default:
        return <Dashboard />;
    }
  }
};

const Dashboard = () => (
  <Container
    horizontal='xl'
    vertical='md'
    style={{ display: 'flex', justifyContent: 'center' }}
    expandHorizontal
  >
    <Grid expanded>
      <Row>
        <Column>
          <Title level='3'>Authenticated user</Title>
          <Container vertical='md'>
            <NavLink className='link link-router' to='/new-org'>
              Create organization
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink className='link link-router' to='/profile'>
              Profile
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink className='link link-router' to='/profile/billing'>
              Personal Subscription & Billing
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink className='link link-router' to={`/location-management`}>
              Location Management
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink className='link link-router' to='/profile/devices'>
              Personal Devices
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink className='link link-router' to='/shop'>
              Stackshare Shop
            </NavLink>
          </Container>
        </Column>
        <Column>
          <Title level='3'>Organization User</Title>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/apps`}
            >
              Organization apps
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/devices`}
            >
              Organization devices
            </NavLink>
          </Container>
        </Column>
        <Column>
          <Title level='3'>Organization Admin User</Title>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/devices`}
            >
              Manage Organization Devices
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/manage`}
            >
              Manage Organization
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/billing`}
            >
              Organization Subscription & Billing
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/permissions`}
            >
              Roles & User Groups
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/user-management`}
            >
              User Management
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/infrastructure`}
            >
              Manage Infrastructure
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/audit`}
            >
              Organization Audit Logs
            </NavLink>
          </Container>
          <Container vertical='md'>
            <NavLink
              className='link link-router'
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/metrics`}
            >
              Organization Metrics
            </NavLink>
          </Container>
        </Column>
      </Row>
    </Grid>
  </Container>
);

const NewOrg = ({ steps }: { steps: any }) => (
  <Container vertical='xl' expandHorizontal style={{ display: 'flex', justifyContent: 'center' }}>
    <div>
      <VerticalSteps title='Create organization' steps={steps} />
      <Container vertical='md' expandHorizontal style={{ textAlign: 'center' }}>
        <NavLink className='link link-router' to='/'>
          Go to dashboard
        </NavLink>
      </Container>
    </div>
  </Container>
);

const Profile = ({ path }: { path?: string }) => (
  <Container
    expandHorizontal
    horizontal='lg'
    vertical='lg'
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    <Title level='4'>This is the {path} page</Title>
    {path !== 'profile' && (
      <Container vertical='md'>
        <NavLink className='link link-router' to='/profile'>
          Profile
        </NavLink>
      </Container>
    )}
    {path !== 'billing' && (
      <Container vertical='md'>
        <NavLink className='link link-router' to='/profile/billing'>
          Billing
        </NavLink>
      </Container>
    )}
    {path !== 'devices' && (
      <Container vertical='md'>
        <NavLink className='link link-router' to='/profile/devices'>
          Devices
        </NavLink>
      </Container>
    )}
  </Container>
);

const ShowPath = () => (
  <Container top='xl' expandHorizontal style={{ textAlign: 'center' }}>
    <NavLink className='link link-router' to='/'>
      Back to dashboard
    </NavLink>
  </Container>
);
