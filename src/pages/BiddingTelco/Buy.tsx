import React, { useState } from 'react';
import {
  Paragraph,
  Spacer,
  Input,
  Pill,
  Button,
  Tab,
  Table,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
import { Container } from '../../components/Container';
import { Drawer } from '../../components/Drawer';
import { dummyData } from './StoryData';
const details = {
    default: 'transparent',
    hover: 'transparent',
    click: 'transparent',
    text: '#1890FF',
  },
  deleteColor = {
    default: 'transparent',
    hover: 'transparent',
    click: 'transparent',
    text: '#A8071A',
  };

const Buy = () => {
  const [open, setOpen] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [data, setData] = useState<any>({});
  const [tab, setTab] = useState(0);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <BodyContent
      style={{
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <BodyHeader>
        <Container horizontal='md' top='sm'>
          <div style={{ display: 'flex', gap: '.4rem' }}>
            <Paragraph size='sm' color='#8C8C8C' lineHeight='1.375rem'>
              Auctions
            </Paragraph>
            <Paragraph size='sm' color='#8C8C8C' lineHeight='1.375rem'>
              /
            </Paragraph>
            <Paragraph size='sm' color='#595959' lineHeight='1.375rem'>
              Bidding
            </Paragraph>
          </div>
          <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
            Buy parameters
          </Paragraph>
          <Spacer size='md' direction='vertical' />
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(0)}
            text='Active Bids'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='ActiveBids'
          />
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(1)}
            text='Fullfilled'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='Fullfilled'
          />
        </Container>
      </BodyHeader>

      {/* Body */}
      <BodyMain>
        <div style={{ backgroundColor: 'white', height: '100%', width: 'min-content' }}>
          {tab === 0 && (
            <Container vertical='md' horizontal='lg'>
              <Button
                label='New bid'
                icon='+'
                lead
                colors={{
                  default: '#096DD9',
                  hover: '#0254ac',
                  click: '#096dd9bc',
                  text: '#fff',
                }}
                onClick={handleOpen}
              />
              <Table
                align='center'
                border='horizontal'
                borderColor='#E8E8E8'
                buttonVariantColor='info'
                colorSelected='#ffd37c'
                columns={[
                  {
                    Header: 'Bidding Type',
                    accessor: 'bidding_type',
                    Filter: () => null,
                  },
                  {
                    Header: 'Expires by',
                    accessor: 'expires',
                    Filter: () => null,
                  },
                  {
                    Header: 'Rate per Mb/sec',
                    accessor: 'rate',
                    Filter: () => null,
                    prefix: '$',
                  },
                  {
                    Header: 'Total',
                    accessor: 'total',
                    Filter: () => null,
                    prefix: '$',
                  },
                  {
                    Header: 'Specification',
                    accessor: 'specification',
                    Filter: () => null,
                    Cell: (props: any) => {
                      return (
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
                          <Button
                            label='See details'
                            colors={details}
                            onClick={() => {
                              setData(props.data[props.row.index]);
                              setOpenTable(!openTable);
                            }}
                          />
                          <Button
                            label='Delete'
                            colors={deleteColor}
                            onClick={() => {
                              setData(props.data[props.row.index]);
                              setOpenTable(!openTable);
                            }}
                          />
                        </div>
                      );
                    },
                  },
                ]}
                data={dummyData}
                fontSize='md'
                headerColor='#FAFAFA'
                headerElevation={0}
                headerFixed={false}
                headerPadding='1.125rem'
                // horizontalSpacing='lg'
                minHeight='3.375rem'
                selectBorder={{
                  bottom: '0.063rem solid black',
                  left: '0.063rem solid black',
                  right: '0.063rem solid black',
                  top: '0.063rem solid black',
                }}
                selectSize='md'
                textHeaderColor='#000'
                verticalSpacing='md'
                zebra={false}
                zebraHover
                zebreHoverColor='#D1D5DA'
              />
            </Container>
          )}
          {tab === 1 && '1'}
        </div>
      </BodyMain>

      <Drawer active={open} onClose={handleOpen}>
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container
              vertical='md'
              left='xl'
              right='md'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                Time preset
              </Paragraph>
              <Pill background='transparent' color='dark' handleAction={handleOpen} />
            </Container>
          </div>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container vertical='md' left='xl' right='md'>
              <Paragraph lineHeight='1.35rem'>Name the time preset</Paragraph>
              <div style={{ width: '16rem' }}>
                <Input label='Medium input' />
              </div>
              <Spacer size='md' />
              <Paragraph lineHeight='1.35rem'>Select uptimes</Paragraph>
              <Spacer size='md' />
              <div style={{ width: '100%', backgroundColor: 'gray', height: '72vh' }} />
            </Container>
          </div>
          <div>
            <Container
              horizontal='md'
              vertical='md'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                label='Save'
                colors={{
                  default: '#096DD9',
                  hover: '#0254ac',
                  click: '#096dd9bc',
                  text: '#fff',
                }}
                onClick={handleOpen}
              />
            </Container>
          </div>
        </div>
      </Drawer>
      <Drawer active={openTable} onClose={() => null}>
        <div style={{ backgroundColor: 'white' }}>
          <Container
            vertical='md'
            left='xl'
            right='md'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
              Bid details
            </Paragraph>
            <div
              style={{
                alignSelf: 'center',
                height: '1.375rem',
                backgroundColor: '#FFFBE6',
                border: `0.063rem solid #FAAD14`,
                color: '#FAAD14',
                borderRadius: 2,
                width: 'fit-content',
                boxSizing: 'border-box',
                padding: '0.1rem 0.5rem',
                textAlign: 'center',
                verticalAlign: 'center',
                fontSize: 12,
              }}
            >
              Pending
            </div>
            <Pill background='transparent' color='dark' handleAction={() => setOpenTable(false)} />
          </Container>
        </div>
        <Container vertical='md' left='xl' right='md'>
          <code>
            <pre>{JSON.stringify(data)}</pre>
          </code>
        </Container>
        <div>
          <Container
            horizontal='md'
            vertical='md'
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {data.new && (
              <Button
                label='Submit'
                colors={{
                  default: '#096DD9',
                  hover: '#0254ac',
                  click: '#096dd9bc',
                  text: '#fff',
                }}
                onClick={handleOpen}
              />
            )}
          </Container>
        </div>
      </Drawer>
    </BodyContent>
  );
};

export default Buy;
