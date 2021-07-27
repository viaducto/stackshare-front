import React from 'react';
import { Paragraph, Spacer, Radio, Container, Hideable } from '@jp-olvera/jp-viaducto-components';
import SellSimple from './SellSimple';
import SellAdvanced from './SellAdvanced';

const SellParameters = ({
  simple = true,
  setSimple,
  handleOpen,
  b2b = false,
}: {
  simple: boolean;
  b2b: boolean;
  setSimple: Function;
  handleOpen: Function;
}) => {
  return (
    <>
      <div className='border-bottom'>
        <Container vertical='md' horizontal='md' expandHorizontal expandVertical>
          <Paragraph lineHeight='1.375rem' weight='600'>
            Pricing definition
          </Paragraph>
          <Spacer direction='vertical' size='sm' />
          <div className='flex' style={{ flexWrap: 'wrap' }}>
            <Radio
              radioSize='sm'
              name='princig'
              label='Simple'
              spacing='sm'
              color='#1890FF'
              defaultChecked
              onChange={() => setSimple(true)}
              id='simple'
            />
            <Spacer direction='horizontal' size='xl' />
            <Hideable visibleOn='md' after={false}>
              <Spacer size='sm' />
            </Hideable>
            <Radio
              radioSize='sm'
              name='princig'
              label='Advanced'
              spacing='sm'
              color='#1890FF'
              onChange={() => setSimple(false)}
              id='advanced'
            />
          </div>
        </Container>
      </div>
      <Container vertical='md' horizontal='md' expandHorizontal expandVertical>
        {simple && <SellSimple handleOpen={handleOpen} b2b={b2b} />}
        {!simple && <SellAdvanced />}
      </Container>
    </>
  );
};

export default SellParameters;
