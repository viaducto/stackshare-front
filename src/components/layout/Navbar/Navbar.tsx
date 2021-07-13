import { useContext } from 'react';
import { Paragraph, Container, AvatarWithText } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
import { Hamburger, Help, ChevronDown } from 'react-ikonate';
import { AppContext } from '../../../providers';
import Notification from './Notification';
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
          <Hamburger fontSize='1.5rem' color='#595959' />
        </button>
        <div className='user-navbar'>
          <Help fontSize='1.5rem' color='#595959' />
          <Notification number={12} />
          <AvatarWithText
            avatar={{ src: 'https://i.pravatar.cc/32', alt: 'avatar', width: '32', height: '32' }}
            spacing='xs'
          >
            <div className='user-data'>
              <Paragraph>Ted Russell</Paragraph>
              <ChevronDown fontSize='0.9rem' color='#595959' />
            </div>
          </AvatarWithText>
        </div>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
