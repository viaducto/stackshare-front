import React from 'react';
import { Paragraph, Spacer, Radio, Container } from '@jp-olvera/jp-viaducto-components';
import SellSimple from './SellSimple';
import SellAdvanced from './SellAdvanced';
import { useRef } from 'react';

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
  const ref = useRef(null);
  return (
    <>
      <div className='border-bottom'>
        <Container vertical='md' horizontal='lg' expandHorizontal expandVertical>
          <Paragraph lineHeight='1.375rem' weight='600'>
            Pricing definition
          </Paragraph>
          <Spacer direction='vertical' size='sm' />
          <div ref={ref}>
            <Radio
              radioSize='sm'
              name='princig'
              label='Simple'
              spacing='sm'
              color='#1890FF'
              defaultChecked
              onChange={() => setSimple(true)}
            />
            <Spacer direction='horizontal' size='xl' />
            <Radio
              radioSize='sm'
              name='princig'
              label='Advanced'
              spacing='sm'
              color='#1890FF'
              onChange={() => setSimple(false)}
            />
          </div>
        </Container>
      </div>
      <Container vertical='md' horizontal='lg' expandHorizontal expandVertical>
        {simple && <SellSimple handleOpen={handleOpen} b2b={b2b} />}
        {!simple && <SellAdvanced />}
      </Container>
    </>
  );
};

export default SellParameters;
