import { Column, Switch, Paragraph, Container } from '@jp-olvera/jp-viaducto-components';

const BillingAlert = () => {
  return (
    <Column xs={12} sm={8} md={6}>
      <Container vertical='md'>
        <Paragraph size='lg' color='dark'>
          Email Notifications
        </Paragraph>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Paragraph color='gray' size='lg'>
            Failed transaction
          </Paragraph>
          <Switch inputSize='sm' defaultChecked color='#1890FF' />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Paragraph color='gray' size='lg'>
            Failed transaction
          </Paragraph>
          <Switch inputSize='sm' defaultChecked color='#1890FF' />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Paragraph color='gray' size='lg'>
            Failed transaction
          </Paragraph>
          <Switch inputSize='sm' defaultChecked color='#1890FF' />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Paragraph color='gray' size='lg'>
            Failed transaction
          </Paragraph>
          <Switch inputSize='sm' defaultChecked color='#1890FF' />
        </div>
      </Container>
    </Column>
  );
};

export default BillingAlert;
