import {
  Column,
  AvatarWithText,
  Paragraph,
  Container,
  Switch,
} from '@jp-olvera/jp-viaducto-components';

const BillingManager = () => {
  return (
    <>
      <Column xs={12} md={4}>
        <Container vertical='md'>
          <div className='flex'>
            <AvatarWithText
              avatar={{
                src: 'https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg',
                alt: '',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Paragraph color='dark' size='lg'>
                  John Doe
                </Paragraph>
                <Paragraph color='darkGray'>john@ballena.com</Paragraph>
              </div>
            </AvatarWithText>
          </div>
        </Container>
      </Column>
      <Column xs={12} md={4}>
        <Paragraph size='lg' color='dark'>
          Permissions
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
            Upgrade plan
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
            Downgrade plan
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
            Change Billing Information
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
            Download Invoices
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
            Permissions
          </Paragraph>
          <Switch inputSize='sm' defaultChecked color='#1890FF' />
        </div>
      </Column>
    </>
  );
};

export default BillingManager;
