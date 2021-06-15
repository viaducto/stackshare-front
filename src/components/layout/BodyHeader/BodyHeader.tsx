import React from 'react'
import { Container } from '../../Container'
const BodyHeader = ({ children }: BodyHeaderProps) => {
  return (
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      <Container vertical='sm' horizontal='md'>
        {children}
      </Container>
    </div>
  )
}

interface BodyHeaderProps {
  children: any
}

export default BodyHeader
