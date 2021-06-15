import React from 'react'
import { Container } from '../../Container'
const BodyMain = ({ children }: BodyMainProps) => {
  return (
    <Container vertical='md' horizontal='sm' expandHorizontal>
      {children}
    </Container>
  )
}
interface BodyMainProps {
  children: any
}
export default BodyMain
