import { useContext, useRef, useState } from 'react';
import {
  Paragraph,
  Container,
  AvatarWithText,
  Grid,
  Row,
  Column,
  ConfigContext,
  Popover,
  Button,
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
  height: 64px;
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

  const dropRef = useRef(null);
  const [dropActive, setDropActive] = useState(false);
  const handleDropActive = () => {
    console.log('dri');
    setDropActive((d) => !d);
  };
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
                  <div
                    onClick={handleDropActive}
                    ref={dropRef}
                    style={{
                      cursor: 'pointer',
                    }}
                  >
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
                  <Popover
                    active={dropActive}
                    handleClose={handleDropActive}
                    target={dropRef}
                    content={
                      <div style={{ width: '200px' }}>
                        <Button
                          label=' Mi perfil'
                          shapeColor='secondary'
                          variant='ghost'
                          radius='none'
                          block
                        />
                        <Button
                          label='Configuración'
                          shapeColor='secondary'
                          variant='ghost'
                          radius='none'
                          block
                        />
                        <Button
                          label='Eliminar mi cuenta'
                          shapeColor='secondary'
                          variant='ghost'
                          radius='none'
                          block
                        />
                        <hr />
                        <Button
                          label='Log out'
                          variant='ghost'
                          radius='none'
                          shapeColor='danger'
                          block
                        />
                      </div>
                    }
                  />
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </Container>
    </StyledNavbar>
  );
};

const StyledMobileNavbar = styled.div`
  height: 50px;
  z-index: 1;
  border-top: 0.063rem solid #d9d9d9;
  box-sizing: border-box;
  display: flex;
  padding: 14px 28px;
  background-color: ${(p) => p.theme.mainBackground};
  justify-content: space-between;
`;

export const MobileNavbar = () => {
  const { showMenu } = useContext(AppContext);
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;

  return (
    <StyledMobileNavbar>
      <button className='bare-button' onClick={showMenu}>
        <Hamburger fontSize='1.5rem' color={dark} />
      </button>
    </StyledMobileNavbar>
  );
};

export default Navbar;
