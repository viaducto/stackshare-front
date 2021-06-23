import { useContext } from 'react';
import { Paragraph, Container } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
import { AppContext } from '../../../providers';
import { Hamburger } from 'react-ikonate';
const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user-navbar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.5rem;
    .user-data {
      display: flex;
      align-items: center;
      & > p {
        margin-left: 0.5rem;
        margin-right: 0.347rem;
      }
    }
  }
`;
const Navbar = () => {
  const { showMenu } = useContext(AppContext);

  return (
    <Container
      vertical='md'
      horizontal='md'
      style={{
        backgroundColor: 'white',
        borderBottom: '0.063rem solid #D9D9D9',
        boxSizing: 'border-box',
      }}
    >
      <StyledNavbar>
        <button className='bare-button' onClick={showMenu}>
          <Hamburger fontSize='1.5rem' />
        </button>
        <div className='user-navbar'>
          <div style={{ height: '1.313rem', width: '1.313rem', backgroundColor: 'gray' }} />
          <div style={{ height: '1.313rem', width: '1.313rem', backgroundColor: 'gray' }} />
          <div className='user-data'>
            <img src='https://i.pravatar.cc/32' alt='avatar' style={{ borderRadius: '50%' }} />
            <Paragraph>Ted Russell</Paragraph>
            <div style={{ height: '0.466rem', width: '0.466rem', backgroundColor: 'gray' }} />
          </div>
        </div>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
