import { useState } from 'react';
import { BodyMain } from '../../components/layout';
import {
  GroupTab,
  Paragraph,
  Tab,
  Container,
  Spacer,
  Button,
  WrapperTable,
  Drawer,
  Input,
  Grid,
  Row,
  Column,
  Select,
  Hideable,
  Avatar,
} from '@jp-olvera/jp-viaducto-components';
import { Plus, ArrowLeft } from 'react-ikonate';
import Table from '../../components/Table/Table';
import Tag from '../../components/Tag/Tag';
import Graph from '../BiddingTelco/Graph';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Kebab from '../../components/Kebab/Kebab';
import { Center } from '../../components/Center';
import { useWindowResize } from '../../hooks/useWindowSize';

const LocationManagement = () => {
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const handleDrawerActive = () => {
    setIsDrawerActive((d) => !d);
  };
  const [currentLocation, setCurrentLocation] = useState<null | any>(null);
  const { offset } = useWindowResize();
  const columns = [
    {
      Header: 'Location name',
      accessor: 'location_name',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: (props: any) => {
        return (
          <Center>
            <Tag
              label={props.data[props.row.index].location_name}
              color='#2F54EB'
              backgroundColor='#F0F5FF'
              borderColor='#ADC6FF'
            />
          </Center>
        );
      },
    },
    {
      Header: 'Country',
      accessor: 'country',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'State',
      accessor: 'state',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'Region',
      accessor: 'region',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'Specification',
      accessor: 'specification',
      sortable: false,
      minWidth: 125,
      maxWidth: 125,
      Cell: (props: any) => {
        return (
          <Center>
            <Kebab>
              <Button
                label='See details'
                variant='ghost'
                onClick={() => {
                  setCurrentLocation(props.data[props.row.index]);
                  handleDrawerActive();
                }}
                block
              />
              <Button
                label='Delete'
                variant='ghost'
                shapeColor='danger'
                onClick={() => {
                  setCurrentLocation(props.data[props.row.index]);
                  handleDrawerActive();
                }}
                block
              />
            </Kebab>
          </Center>
        );
      },
    },
  ];
  const data = [
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
    {
      location_name: 'Raleigh Durham',
      type: 'Market',
      country: 'USA',
      state: 'Alabama',
      region: 'Birminha',
    },
  ];

  const infrastructureColumns = [
    {
      Header: 'Device Name',
      accessor: 'device_name',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'Device Id',
      accessor: 'device_id',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'Serial #',
      accessor: 'serial',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'Manufacturer',
      accessor: 'manufacturer',
      Cell: (row: any) => (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      ),
    },
    {
      Header: 'Specification',
      accessor: 'specification',
      Cell: () => {
        return (
          <Center>
            <Button label='see details' variant='ghost' />
            |
            <Button label='Delete' variant='ghost' shapeColor='danger' />
          </Center>
        );
      },
    },
  ];

  const infrastructureData = [
    {
      device_name: 'Crazy Street',
      device_id: 'Crazy Street',
      serial: 'USA',
      manufacturer: 'Cisco',
    },
    {
      device_name: 'Crazy Street',
      device_id: 'Crazy Street',
      serial: 'USA',
      manufacturer: 'Cisco',
    },
    {
      device_name: 'Crazy Street',
      device_id: 'Crazy Street',
      serial: 'USA',
      manufacturer: 'Cisco',
    },
    {
      device_name: 'Crazy Street',
      device_id: 'Crazy Street',
      serial: 'USA',
      manufacturer: 'Cisco',
    },
    {
      device_name: 'Crazy Street',
      device_id: 'Crazy Street',
      serial: 'USA',
      manufacturer: 'Cisco',
    },
    {
      device_name: 'Crazy Street',
      device_id: 'Crazy Street',
      serial: 'USA',
      manufacturer: 'Cisco',
    },
  ];
  return (
    <>
      <HeaderSell
        title='Location Management'
        breadcrums={[
          { label: 'Home', href: '/', active: false },
          { label: 'Organization Settings', href: '', active: false },
          { label: 'User Management', href: '', active: true },
        ]}
      >
        <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none'>
          <Tab text='All Locations' />
          <Tab text='Country' />
          <Tab text='Region' />
          <Tab text='State' />
          <Tab text='Market' />
          <Tab text='Last Mile' />
        </GroupTab>
      </HeaderSell>
      <BodyMain>
        <Container style={{ height: '50%', overflow: 'auto' }} top='md'>
          <Container horizontal='xl'>
            <Button label='Create New Location' icon={<Plus />} lead radius='sm' />
          </Container>
          <Container
            className='overflow'
            top='md'
            horizontal='xl'
            style={{
              display: 'flex',
              justifyContent: 'space-between',

              minHeight: '72vh',
              flexWrap: 'wrap',
            }}
          >
            <WrapperTable
              fontSize='md'
              zebra={false}
              verticalSpacing='md'
              border='horizontal'
              borderColor='#E8E8E8'
              horizontalSpacing='sm'
            >
              <Table
                hiddenColumns={offset ? ['location_name', 'state', 'region'] : []}
                cols={columns}
                dataTable={data}
              />
            </WrapperTable>
          </Container>
        </Container>
      </BodyMain>
      <Drawer
        onClose={() => {
          setIsDrawerActive((d) => !d);
        }}
        active={isDrawerActive}
        size='lg'
      >
        <Grid expanded style={{ height: '100%', overflow: 'auto' }}>
          <Row>
            <Column>
              <Container
                vertical='md'
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  alignContent: 'baseline',
                }}
              >
                <button
                  onClick={handleDrawerActive}
                  className='bare-button'
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  <ArrowLeft />
                </button>
                <Spacer size='nano' direction='horizontal' />
                <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                  Location Name
                </Paragraph>
                <Spacer size='nano' direction='horizontal' />
                <Paragraph lineHeight='1.75rem' color='gray'>
                  {currentLocation?.location_name}
                </Paragraph>
                <Spacer size='nano' direction='horizontal' />
                <Tag
                  label={currentLocation?.type}
                  backgroundColor='#E6F7FF'
                  color='#1890FF'
                  borderColor='#1890FF'
                />
                <Button
                  label='Edit Location'
                  disabled
                  radius='none'
                  size='small'
                  style={{ marginLeft: 'auto' }}
                />
              </Container>
            </Column>
          </Row>
          <Row>
            <Column size={12}>
              <div className='flex' style={{ justifyContent: 'space-between' }}>
                <Graph
                  title='Broadband Usage'
                  percent='+6.9%'
                  data='98.1%'
                  profit='Daily'
                  progress='76.92%'
                  color='#1665D8'
                />
                <Graph
                  title='Broadband Usage'
                  percent='+6.9%'
                  data='98.1%'
                  profit='Daily'
                  progress='76.92%'
                  color='#1665D8'
                />
                <Graph
                  title='Broadband Usage'
                  percent='+6.9%'
                  data='98.1%'
                  profit='Daily'
                  progress='76.92%'
                  color='#1665D8'
                />
              </div>
            </Column>
            <Column size={12}>
              <Spacer size='lg' />
              <Paragraph weight='bold' size='md'>
                General Information
              </Paragraph>
              <Spacer size='nano' />
              <Paragraph weight='bold'>Address</Paragraph>
              <Spacer size='md' />
            </Column>
          </Row>
          <Row>
            <Column xs={12} md={4}>
              <Select border='all'>
                <option value={currentLocation?.country}>{currentLocation?.country}</option>
              </Select>
              <Hideable visibleOn='md' after={false}>
                <Spacer size='lg' />
              </Hideable>
            </Column>
            <Column xs={12} md={4}>
              <Select border='all'>
                <option value={currentLocation?.state}>{currentLocation?.state}</option>
              </Select>
            </Column>
          </Row>
          <Row>
            <Column xs={12} md={8}>
              <div className='form-control'>
                <Input inputSize='small' label='Address' type='text' border='outside' />
              </div>
            </Column>
            <Column xs={12} md={8}>
              <div className='form-control'>
                <Input inputSize='small' label='Address' type='text' border='outside' />
              </div>
            </Column>
          </Row>
          <Row>
            <Column xs={12} md={8}>
              <Spacer size='lg' />
              <Paragraph weight='bold'>Contact Information</Paragraph>
              <Spacer size='md' />
              <div className='form-control'>
                <Input type='text' label='Phone Number' border='outside' value='+44 21 1358 41' />
              </div>
            </Column>
            <Column size={12}>
              <Spacer size='md' />
              <Paragraph weight='bold'>Organization Owner</Paragraph>
              <Spacer size='sm' />
              <div className='flex'>
                <Avatar
                  src='https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg'
                  alt=''
                  height='32px'
                  width='32px'
                />
                <Spacer size='sm' direction='horizontal' />
                <Paragraph>Ted Russel</Paragraph>
                <Spacer size='sm' direction='horizontal' />
                <Paragraph>ted.russel@stackshare.io</Paragraph>
                <Spacer size='sm' direction='horizontal' />
                <Paragraph>+1 745 989 898989</Paragraph>
              </div>
              <Spacer size='sm' />
            </Column>
          </Row>
          <Row>
            <Column size={12}>
              <Paragraph weight='bold'>Available Infrastructure</Paragraph>
            </Column>
          </Row>
          <Spacer size='sm' />
          <Row>
            <Column size={12}>
              <Container className='overflow' expandHorizontal>
                <WrapperTable
                  fontSize='md'
                  zebra={false}
                  verticalSpacing='md'
                  border='horizontal'
                  borderColor='#E8E8E8'
                  horizontalSpacing='sm'
                >
                  <Table
                    hiddenColumns={offset ? ['device_id', 'serial'] : []}
                    cols={infrastructureColumns}
                    dataTable={infrastructureData}
                  />
                </WrapperTable>
                <Spacer size='lg' />
              </Container>
            </Column>
          </Row>
        </Grid>
      </Drawer>
    </>
  );
};

export default LocationManagement;
