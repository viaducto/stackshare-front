import React, { useContext, useState } from 'react';
import {
  Paragraph,
  Spacer,
  Select,
  Input,
  Grid,
  Row,
  Column,
  Hideable,
  ConfigContext,
} from '@jp-olvera/jp-viaducto-components';
import { Button } from '@jp-olvera/jp-viaducto-components';
import { Activity, Dolar, Plus } from 'react-ikonate';
import Skeleton from 'react-loading-skeleton';
import Graph from '../../pages/BiddingTelco/Graph';

const SellSimple = ({
  handleOpen,
  b2b = false,
  load,
}: {
  handleOpen: Function;
  b2b: boolean;
  load?: boolean;
}) => {
  const [value, setValue] = useState('95%');
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;

  return (
    <Grid gutter={0} expanded className='aaaa'>
      <Row>
        <Column xs={12} lg={6}>
          <Grid gutter={0} expanded>
            <Row>
              <Column size={12}>
                {load ? (
                  <Skeleton width='35%' />
                ) : (
                  <Paragraph lineHeight='1.375rem' weight='600'>
                    {!b2b ? 'Default Mb price' : 'Minimum ask per Mb/s'}
                  </Paragraph>
                )}
              </Column>
            </Row>
          </Grid>
          <Spacer size='sm' />
          <Grid gutter={0} expanded>
            <Row>
              <Column md={11} sm={8} xs={12}>
                {load ? (
                  <Skeleton />
                ) : (
                  <Input
                    type='number'
                    inputSize='small'
                    border='outside'
                    id='askMB'
                    min={0}
                    iconColor={dark}
                    icon={<Dolar />}
                  />
                )}
              </Column>
            </Row>
          </Grid>

          <Spacer size='lg' />

          <Grid gutter={0} expanded>
            <Row>
              <Column>
                {load ? (
                  <Skeleton width='35%' />
                ) : (
                  <Paragraph lineHeight='70%' weight='600'>
                    Infractrusture bandwith cap
                  </Paragraph>
                )}
              </Column>
            </Row>
          </Grid>
          <Spacer size='sm' />
          <Grid gutter={0} expanded>
            <Row>
              <Column xl={7} md={8}>
                {load ? (
                  <>
                    <Skeleton width='100%' />
                    <Spacer size='tiny' />
                    <Skeleton width='100%' />
                    <Spacer size='tiny' />
                    <Skeleton width='100%' />
                  </>
                ) : (
                  <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
                    This percentage will define the stop line, in which Stackshare will stop
                    allocating bids inside your infrastructure.{' '}
                    <b>Can’t be setted at more than 95%</b>
                  </Paragraph>
                )}
              </Column>
            </Row>
          </Grid>
          <Spacer size='sm' />
          <Grid gutter={0} expanded>
            <Row>
              <Column md={11} sm={8} xs={12}>
                {load ? (
                  <Skeleton />
                ) : (
                  <Input
                    inputSize='small'
                    border='outside'
                    id='bandwith'
                    icon={<Activity />}
                    iconColor={dark}
                    value={value}
                    onChange={(e) => {
                      const val: number = parseFloat(e.target.value);

                      if (val >= 0 && val <= 95) {
                        setValue(val.toString() + '%');
                      }
                    }}
                  />
                )}
              </Column>
            </Row>
          </Grid>

          <Spacer size='lg' />

          {!b2b && (
            <Grid gutter={0} expanded>
              <Row>
                <Column>
                  {load ? (
                    <Skeleton width='35%' />
                  ) : (
                    <Paragraph lineHeight='1.375rem' weight='600'>
                      Time Presets
                    </Paragraph>
                  )}
                </Column>
              </Row>
              <Spacer size='xs' />
              <Row>
                <Column md={11} sm={8} xs={12}>
                  {load ? (
                    <Skeleton />
                  ) : (
                    <Select inputSize='small' radius='sm' name='a' id='a'>
                      <option value='Bussiness Hours'>Bussiness Hours</option>
                      <option value='Option'>Option</option>
                      <option value='Another option'>Another option</option>
                    </Select>
                  )}
                </Column>
              </Row>
              <Spacer size='md' />
              <Row>
                <Column>
                  {load ? (
                    <Skeleton width='20%' />
                  ) : (
                    <Button
                      label='Add New Time Preset'
                      lead
                      iconSpacing='none'
                      leftSpacing='tiny'
                      rightSpacing='sm'
                      variant='ghost'
                      onClick={(ev) => {
                        handleOpen(ev);
                      }}
                      icon={<Plus />}
                      data-testid='hrefDrawer'
                    />
                  )}
                </Column>
              </Row>
            </Grid>
          )}
        </Column>
        <Hideable visibleOn='lg' after={false}>
          <Spacer size='lg' />
        </Hideable>
        <Column xs={12} lg={6}>
          {!b2b && (
            <div>
              <Grid gutter={0} expanded>
                <Row>
                  <Column>
                    {load ? (
                      <Skeleton width='40%' />
                    ) : (
                      <Paragraph lineHeight='1.375rem' weight='600'>
                        Potential earnings with current config
                      </Paragraph>
                    )}
                    <Spacer size='xs' />
                    {load ? (
                      <Skeleton width='80%' />
                    ) : (
                      <Paragraph lineHeight='1.375rem' color='#595959'>
                        These are stimated by the prices and maximum bandwith usage and the uptime
                        selected.
                      </Paragraph>
                    )}
                    <Spacer size='xs' />
                  </Column>
                </Row>
              </Grid>

              <Spacer size='xs' />
              <Grid gutter={0} expanded>
                <Row>
                  <Column>
                    {load ? (
                      <Skeleton width='90%' height='214px' />
                    ) : (
                      <Graph
                        title='Earnings'
                        percent='+11.3%'
                        data='$13,893'
                        profit='Total Profit'
                      />
                    )}
                    <Spacer size='sm' />
                  </Column>
                  <Column>
                    {load ? (
                      <Skeleton width='90%' height='214px' />
                    ) : (
                      <Graph title='Broadband Usage' percent='+11.3%' data='659Gb' />
                    )}
                  </Column>
                </Row>
              </Grid>
              <Spacer size='lg' />
            </div>
          )}
        </Column>
      </Row>
    </Grid>
  );
};

export default SellSimple;
