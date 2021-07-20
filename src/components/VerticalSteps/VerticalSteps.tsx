import { Paragraph, Spacer, Title } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import { Ok } from 'react-ikonate';
import { StyledVerticalSteps, Step } from './StyledVerticalSteps';

const VerticalSteps = ({
  title,
  steps,
}: {
  title: string;
  steps?: {
    title: string;
    description: string;
    finished: boolean;
    line: boolean;
    actual: boolean;
  }[];
}) => {
  const stepsFake: {
    title: string;
    description: string;
    finished: boolean;
    line: boolean;
    actual: boolean;
  }[] = [
    {
      title: 'Create account',
      description: 'This is the description.',
      finished: true,
      line: true,
      actual: false,
    },
    {
      title: 'Invite members',
      description: 'This is the description.',
      finished: false,
      line: true,
      actual: true,
    },
    {
      title: 'Step 3',
      description: 'This is the description.',
      finished: false,
      line: false,
      actual: false,
    },
  ];
  return (
    <>
      <Title weight='600' lineHeight='1.5rem' level='6' align='left'>
        {title}
      </Title>
      <Spacer size='sm' />
      <StyledVerticalSteps className='wizard-steps'>
        {(steps || stepsFake).map(
          (
            step: {
              title: string;
              finished: boolean;
              line: boolean;
              actual: boolean;
              description: string;
            },
            index: number
          ) => {
            return (
              <React.Fragment key={step.title + index.toString()}>
                {step.line && <div className={`${step.finished ? 'v-line finished' : 'v-line'}`} />}
                <Step finished={step.finished} actual={step.actual}>
                  <span className={step.finished ? 'index step-finished' : 'index'}>
                    {step.finished ? <Ok /> : (index + 1).toString()}
                  </span>
                  <div className='step-title'>
                    <Paragraph
                      color={step.actual ? 'dark' : 'darkGray'}
                      weight={step.actual ? '600' : '400'}
                      lineHeight='1.375rem'
                    >
                      {step.title}
                    </Paragraph>
                    <Paragraph color='#8C8C8C' lineHeight='1.375rem'>
                      {step.description}
                    </Paragraph>
                  </div>
                </Step>
              </React.Fragment>
            );
          }
        )}
      </StyledVerticalSteps>
    </>
  );
};

export default VerticalSteps;
