import React, { useState } from 'react'
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout'
import { Drawer } from '../../components/Drawer'

const BiddingB2B = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <BodyContent>
      <BodyHeader>
        <div>Header</div>
      </BodyHeader>
      <BodyMain>
        <div style={{ backgroundColor: 'white' }}>Stackshare</div>
      </BodyMain>
      <Drawer active={open} onClose={handleOpen}>
        <div style={{ backgroundColor: 'white' }}>Stackshare</div>
      </Drawer>
    </BodyContent>
  )
}

export default BiddingB2B
