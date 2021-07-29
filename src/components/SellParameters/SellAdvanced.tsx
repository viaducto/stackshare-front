import { useState, useContext } from 'react';
import {
  Paragraph,
  Spacer,
  Input,
  ConfigContext,
  Grid,
  Column,
  Row,
  Container,
} from '@jp-olvera/jp-viaducto-components';
import { MONDAY, TUESDAY } from '../../dummy_data/pricingtable';
import { PricingTable } from '../PricingTable';
import { Dolar } from 'react-ikonate';
import Skeleton from 'react-loading-skeleton';

const SellAdvanced = ({ load }: { load: boolean }) => {
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;
  const [value, setValue] = useState(95);
  return (
    <Grid gutter={0} expanded>
      <Row>
        <Column>
          {load ? (
            <Skeleton width='6rem' />
          ) : (
            <Paragraph lineHeight='1.375rem' weight='600'>
              Default Mb price
            </Paragraph>
          )}
          <Spacer size='sm' />
        </Column>
      </Row>
      <Row>
        <Column md={5} sm={12} xs={12}>
          {load ? (
            <Skeleton />
          ) : (
            <Input
              type='number'
              inputSize='small'
              border='outside'
              id='askMB'
              min={0}
              defaultValue={0}
              icon={<Dolar color={dark} />}
            />
          )}
        </Column>
      </Row>

      <Spacer size='lg' />
      <Row>
        <Column>
          {load ? (
            <Skeleton width='8rem' />
          ) : (
            <Paragraph lineHeight='1.375rem' weight='600'>
              Prices and availiability
            </Paragraph>
          )}
        </Column>
      </Row>

      <Spacer size='xs' />
      <Row>
        <Column>
          {load ? (
            <Skeleton width='20rem' />
          ) : (
            <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
              Blank spaces will be assigned to the default Mb price
            </Paragraph>
          )}
          <Spacer size='xs' />
        </Column>
      </Row>
      <Row>
        <Column>
          <Container right='sm'>
            <div className='overflow'>
              {load ? (
                <Container horizontal='md' expandHorizontal>
                  <Skeleton height='50rem' />
                </Container>
              ) : (
                <PricingTable
                  sun={TUESDAY}
                  mon={MONDAY}
                  tues={TUESDAY}
                  wed={MONDAY}
                  thu={TUESDAY}
                  sat={TUESDAY}
                />
              )}
            </div>
          </Container>
        </Column>
      </Row>
      <Spacer size='lg' />
      <Row>
        <Column>
          {load ? (
            <Skeleton width='6rem' />
          ) : (
            <Paragraph lineHeight='1.375rem' weight='600'>
              Infractrusture bandwith cap
            </Paragraph>
          )}
          <Spacer size='xs' />
        </Column>
      </Row>
      <Row>
        <Column>
          {load ? (
            <Skeleton width='25rem' />
          ) : (
            <Paragraph color='#8C8C8C' lineHeight='1.375rem'>
              This percentage will define the stop line, in which Stackshare will stop allocating
              bids inside your infrastructure. <b>Can’t be setted at more than 95%</b>
            </Paragraph>
          )}
          <Spacer size='sm' />
        </Column>
      </Row>
      <Row>
        <Column md={5} sm={12} xs={12}>
          {load ? (
            <Skeleton />
          ) : (
            <Input
              type='number'
              inputSize='small'
              border='outside'
              max={95}
              min={0}
              icon='%'
              value={value}
              onChange={(e) => {
                const val: number = parseFloat(e.target.value);

                if (val >= 0 && val <= 95) {
                  setValue(val);
                }
              }}
            />
          )}
        </Column>
      </Row>
    </Grid>
  );
};

export default SellAdvanced;
