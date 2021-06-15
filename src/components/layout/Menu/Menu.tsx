import React from 'react'
import styled from 'styled-components'

const StyledStackMenu = styled.div`
  width: 12.5rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  overflow-y: auto;
  background-color: #ccce;
`
const StackMenu = ({ children }: StackMenuProps) => {
  return <StyledStackMenu>{children}</StyledStackMenu>
}

interface StackMenuProps {
  children: any
}
export default StackMenu
