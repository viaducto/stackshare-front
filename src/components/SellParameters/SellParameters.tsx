import React, { useEffect } from 'react';
import { Paragraph, Spacer, Radio, Container } from '@jp-olvera/jp-viaducto-components';
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
  useEffect(() => {
    document.querySelectorAll('input')[0].checked = true;
  }, []);

  return (
    <>
      <div style={{ borderBottom: '0.063rem solid #D9D9D9' }}>
        <Container vertical='md' horizontal='lg' expandHorizontal expandVertical>
          <Paragraph lineHeight='1.375rem' weight='600'>
            Pricing definition
          </Paragraph>
          <Spacer direction='vertical' size='sm' />
          <div>
            <Radio
              radioSize='sm'
              name='princig'
              label='Simple'
              spacing='sm'
              color='#1890FF'
              checked={simple}
              onChange={() => setSimple(true)}
            />
            <Spacer direction='horizontal' size='xl' />
            <Radio
              checked={!simple}
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
