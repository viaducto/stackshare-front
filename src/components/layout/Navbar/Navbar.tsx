import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  height: 4rem;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: pink;
`
const Navbar = ({ children }: NavbarProps) => {
  return <StyledNavbar>{children}</StyledNavbar>
}

interface NavbarProps {
  children: any
}

export default Navbar
