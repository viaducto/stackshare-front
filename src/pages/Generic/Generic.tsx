import React from 'react';
import { Anchor, Column, Container, Grid, Row, Title } from '@jp-olvera/jp-viaducto-components';
import { Link, useLocation } from 'react-router-dom';
import { BodyContent, BodyMain } from '../../components/layout';
import { VerticalSteps } from '../../components/VerticalSteps';

const Generic = ({ path }: { path?: string }) => {
  const location = useLocation().pathname;
  const uri = path || location;
  return (
    <BodyContent
      style={{
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <BodyMain>
        <div className='overflow'>
          <Container
            vertical='lg'
            style={{ backgroundColor: 'white', height: '80vh', overflow: 'auto' }}
          >
            <Container style={{ display: 'flex', justifyContent: 'center' }} expandHorizontal>
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
            <Link to='/new-org'>
              <Anchor label='Create organization' color='primary' href='/new-org' />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to='/profile'>
              <Anchor label='Profile' color='primary' href='/profile' />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to='/profile/billing'>
              <Anchor
                label='Personal Subscription & Billing'
                color='primary'
                href='/profile/billing'
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to='/profile/devices'>
              <Anchor label='Personal Devices' color='primary' href='/profile/devices' />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to='/shop'>
              <Anchor label='Stackshare Shop' color='primary' href='/shop' />
            </Link>
          </Container>
        </Column>
        <Column>
          <Title level='3'>Organization User</Title>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/apps`}>
              <Anchor
                label='Organization apps'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/apps`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/devices`}>
              <Anchor
                label='Organization devices'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/devices`}
              />
            </Link>
          </Container>
        </Column>
        <Column>
          <Title level='3'>Organization Admin User</Title>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/devices`}>
              <Anchor
                label='Manage Org Devices'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/devices`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/manage`}>
              <Anchor
                label='Manage Org'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/manage`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/billing`}>
              <Anchor
                label='Org Subscription & Billing'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/billing`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/permissions`}>
              <Anchor
                label='Roles & User Groups'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/permissions`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/permissions`}>
              <Anchor
                label='User Management'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/permissions`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link
              to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/infrastructure`}
            >
              <Anchor
                label='Manage Infrastructure'
                color='primary'
                href={`/organization/${
                  Math.floor(Math.random() * (10 - 1 + 1)) + 1
                }/infrastructure`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/audit`}>
              <Anchor
                label='Organization Audit Logs'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/audit`}
              />
            </Link>
          </Container>
          <Container vertical='md'>
            <Link to={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/metrics`}>
              <Anchor
                label='Organization Metrics'
                color='primary'
                href={`/organization/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}/metrics`}
              />
            </Link>
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
        <Link to='/'>
          <Anchor label='Go to dashboard' color='primary' href='/' />
        </Link>
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
        <Link to='/profile'>
          <Anchor label='Profile' href='/profile' color='primary' />
        </Link>
      </Container>
    )}
    {path !== 'billing' && (
      <Container vertical='md'>
        <Link to='/profile/billing'>
          <Anchor label='Billing' href='/profile/billing' color='primary' />
        </Link>
      </Container>
    )}
    {path !== 'devices' && (
      <Container vertical='md'>
        <Link to='/profile/devices'>
          <Anchor label='Devices' href='/profile/devices' color='primary' />
        </Link>
      </Container>
    )}
  </Container>
);

const ShowPath = () => (
  <Container top='xl' expandHorizontal style={{ textAlign: 'center' }}>
    <Link to='/'>
      <Anchor label='Back to dashboard' color='primary' />
    </Link>
  </Container>
);
