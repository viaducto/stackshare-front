import React from 'react'

const BodyContent = ({ children }: BodyContentProps) => {
  return <div>{children}</div>
}

interface BodyContentProps {
  children: any
}

export default BodyContent
