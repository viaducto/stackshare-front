import React from 'react';
import {
  Breadcrum,
  Breadcrums,
  Button,
  Column,
  Container,
  Grid,
  Input,
  Paragraph,
  Row,
  Select,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import { ChevronLeft } from 'react-ikonate';
import { DummyBadge } from '../BiddingTelco/StoryData';
import Graph from '../BiddingTelco/Graph';

const InfrastructureDrawer = ({ type, setOpen }: { type: string; setOpen: Function }) => (
  <>
    <Container
      expandHorizontal
      horizontal='md'
      vertical='md'
      style={{ borderBottom: '0.063rem solid #d9d9d9' }}
    >
      <Breadcrums fontSize='md'>
        <Breadcrum label='Breadcrumb Link' href='#' active={false} separator />
        <Breadcrum label='Breadcrumb Link' href='#' active={false} separator />
      </Breadcrums>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            icon={<ChevronLeft />}
            label='Infrastructure'
            variant='ghost'
            lead
            leftSpacing='tiny'
            rightSpacing='tiny'
            colors={{
              default: '#595959',
              click: '#59595955',
              hover: '#fff',
              text: '#262626',
            }}
            size='large'
            onClick={() => setOpen(false)}
          />
          <Spacer direction='horizontal' size='sm' />
          <DummyBadge label={type} color='#E6F7FF' textColor='#1890FF' />
        </div>
        <Button label='Edit Location' variant='ghost' disabled size='small' />
      </div>
    </Container>
    <Spacer size='lg' />
    <Container expandHorizontal horizontal='lg' vertical='md'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      <Spacer size='lg' />
      <Title level='6' lineHeight='1.5rem' weight='600'>
        General Information
      </Title>
      <Spacer size='sm' />
      <Paragraph lineHeight='1.375rem' weight='600'>
        Device Information
      </Paragraph>
    </Container>
    <Grid expanded>
      <Row>
        <Column size={5}>
          <Paragraph lineHeight='1.375rem'>Brand</Paragraph>
          <Select border='all'>
            <option value='USA'>USA</option>
          </Select>
        </Column>
        <Column size={5}>
          <Paragraph lineHeight='1.375rem'>Inventory ID</Paragraph>
          <Select border='all'>
            <option value='USA'>USA</option>
          </Select>
        </Column>
      </Row>
      <Spacer size='md' />
      <Row>
        <Column>
          <div className='form-control'>
            <Input inputSize='small' label='Series Number' defaultValue='Example Address, 123456' />
          </div>
        </Column>
      </Row>
      <Spacer size='md' />
      <Row>
        <Column>
          <div className='form-control'>
            <Input inputSize='small' label='Location' defaultValue='Example Address, 123456' />
          </div>
        </Column>
      </Row>
    </Grid>
  </>
);

export default InfrastructureDrawer;
