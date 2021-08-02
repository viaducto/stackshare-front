import React from 'react';
import {
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
import Graph from '../BiddingTelco/Graph';
import Tag from '../../components/Tag/Tag';

const InfrastructureDrawer = ({ type, setOpen }: { type: string; setOpen: Function }) => (
  <>
    <Container
      expandHorizontal
      horizontal='md'
      vertical='md'
      style={{ borderBottom: '0.063rem solid #d9d9d9' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            icon={<ChevronLeft />}
            label='Infrastructure'
            variant='ghost'
            lead
            leftSpacing='tiny'
            rightSpacing='tiny'
            size='large'
            onClick={() => setOpen(false)}
          />
          <Spacer direction='horizontal' size='sm' />
          <Tag label={type} backgroundColor='#E6F7FF' color='#1890FF' borderColor='#1890FF' />
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
    </Container>
    <Grid>
      <Row>
        <Column>
          <Title level='6' lineHeight='1.5rem' weight='600'>
            General Information
          </Title>
        </Column>
      </Row>
      <Spacer size='sm' />
      <Row>
        <Column>
          <Paragraph lineHeight='1.375rem' weight='600'>
            Device Information
          </Paragraph>
        </Column>
      </Row>
    </Grid>
    <Spacer size='md' />
    <Grid expanded>
      <Row>
        <Column>
          <Paragraph lineHeight='1.375rem'>Brand</Paragraph>
          <Select border='all'>
            <option value='USA'>USA</option>
          </Select>
        </Column>
        <Column>
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
