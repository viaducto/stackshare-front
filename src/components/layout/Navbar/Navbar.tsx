import { useContext } from 'react';
import {
  Paragraph,
  Container,
  AvatarWithText,
  Grid,
  Row,
  Column,
  ConfigContext,
} from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
import { Hamburger, Help, ChevronDown } from 'react-ikonate';
import { AppContext } from '../../../providers';
import Notification from './Notification';
const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${(p) => p.theme.mainBackground};
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

/** Bar navigation, this goes in the Body Component */
const Navbar = () => {
  const { showMenu } = useContext(AppContext);
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;

  return (
    <StyledNavbar className='border-bottom'>
      <Container vertical='md'>
        <Grid expanded>
          <Row>
            <Column>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='bare-button' onClick={showMenu}>
                  <Hamburger fontSize='1.5rem' color={dark} />
                </button>
                <div className='user-navbar'>
                  <Help fontSize='1.5rem' color={dark} />
                  <Notification number={12} />
                  <AvatarWithText
                    avatar={{
                      src: 'https://i.pravatar.cc/32',
                      alt: 'avatar',
                      width: '32',
                      height: '32',
                    }}
                    spacing='xs'
                  >
                    <div className='user-data'>
                      <Paragraph>Ted Russell</Paragraph>
                      <ChevronDown fontSize='0.9rem' color={dark} />
                    </div>
                  </AvatarWithText>
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
