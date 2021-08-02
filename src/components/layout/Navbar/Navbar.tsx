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
  Drawer,
} from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
import { Help, ChevronDown, Search, User, Cart, ArrowDown } from 'react-ikonate';
import { AppContext } from '../../../providers';
import Notification from './Notification';
import { Icon } from '../../Icon';
import { useWindowResize } from '../../../hooks/useWindowSize';
import { useEffect } from 'react';

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
  const { offset } = useWindowResize();
  const avatarRef = useRef(null);
  const [dropActive, setDropActive] = useState(false);
  const handleDropActive = () => {
    setDropActive((d) => !d);
  };
  useEffect(() => {
    if (offset) {
      setDropActive(false);
    }
  }, [offset]);
  return (
    <StyledNavbar className='border-bottom'>
      <Container vertical='sm' expandVertical>
        <Grid expanded>
          <Row>
            <Column>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <button
                  className='bare-button'
                  onClick={showMenu}
                  type='button'
                  title='Toggle Sidebar'
                  style={{ width: '1.5rem', height: '100%' }}
                >
                  <Container bottom='sm' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Icon />
                  </Container>
                </button>
                <div className='user-navbar'>
                  <Help fontSize='1.5rem' color={dark} />
                  <Notification number={12} />
                  <div
                    onClick={handleDropActive}
                    ref={avatarRef}
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
                  <ProfileDropDown
                    active={dropActive}
                    target={avatarRef}
                    handleClose={handleDropActive}
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
  z-index: 9999;
  border-top: 0.063rem solid #d9d9d9;
  box-sizing: border-box;
  display: flex;
  padding: 14px 28px;
  background-color: ${(p) => p.theme.mainBackground};
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const MobileNavbar = () => {
  const { showMenu } = useContext(AppContext);
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;
  const { offset } = useWindowResize();
  const [isDrawerActive, setIsDrawerActive] = useState(!offset);
  return (
    <StyledMobileNavbar>
      <button
        className='bare-button'
        onClick={showMenu}
        type='button'
        title='Toggle Sidebar'
        style={{ width: '1.5rem', height: '100%' }}
      >
        <Container
          expandVertical
          expandHorizontal
          vertical='micro'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Icon />
        </Container>
      </button>
      <button className='bare-button'>
        <Search fontSize='1.5rem' color={dark} />
      </button>
      <button
        className='bare-button'
        onClick={() => {
          setIsDrawerActive(!isDrawerActive);
        }}
      >
        <User fontSize='1.5rem' color={dark} />
      </button>
      <button className='bare-button'>
        <Cart fontSize='1.5rem' color={dark} />
      </button>
      <Drawer
        onClose={() => {
          setIsDrawerActive(!isDrawerActive);
        }}
        active={isDrawerActive}
        placement='bottom'
      >
        <ProfileDropContent
          handleClose={() => {
            setIsDrawerActive(!isDrawerActive);
          }}
        />
        <hr />

        <Button
          icon={<ArrowDown fontSize='1.5rem' color={dark} />}
          shapeColor='secondary'
          variant='ghost'
          block
          onClick={() => {
            setIsDrawerActive(!isDrawerActive);
          }}
        />
      </Drawer>
    </StyledMobileNavbar>
  );
};

export default Navbar;

export const ProfileDropDown = ({
  active,
  handleClose,
  target,
}: {
  active: boolean;
  handleClose: () => void;
  target: any;
}) => (
  <Popover
    active={active}
    handleClose={handleClose}
    target={target}
    zIndex={5}
    content={
      <div style={{ width: '200px' }}>
        <ProfileDropContent handleClose={handleClose} />
      </div>
    }
  />
);

const ProfileDropContent = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <Button
        label=' Mi perfil'
        onClick={handleClose}
        shapeColor='secondary'
        variant='ghost'
        radius='none'
        block
      />
      <Button
        label='Configuración'
        onClick={handleClose}
        shapeColor='secondary'
        variant='ghost'
        radius='none'
        block
      />
      <Button
        label='Eliminar mi cuenta'
        onClick={handleClose}
        shapeColor='secondary'
        variant='ghost'
        radius='none'
        block
      />
      <hr />
      <Button
        label='Log out'
        onClick={handleClose}
        variant='ghost'
        radius='none'
        shapeColor='danger'
        block
      />
    </>
  );
};
