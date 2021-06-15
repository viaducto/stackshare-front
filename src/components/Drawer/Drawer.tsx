import React from 'react'
import { createPortal } from 'react-dom'
import StyledDrawer from './StyledDrawer'
// import { BareButton } from '../../cells';
// import { ConfigContext } from '@jp-olvera/jp-viaducto-components'

/**
 * Drawer component
 * @param {boolean} active Attribute to show/hide drawer
 * @param {any} children Children component inside the drawer
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 */
interface DrawerInterface {
  active: boolean
  children: any
  onClose: () => void
}

const Drawer = ({ active = false, onClose, children }: DrawerInterface) => {
  // const { configuration } = useContext(ConfigContext)

  if (!active) return null

  return createPortal(
    <div
      onClick={() => {
        onClose()
      }}
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        left: 0,
        height: '100vh',
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: 1,
        transition: 'background-color 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      }}
    >
      <StyledDrawer>{children}</StyledDrawer>
    </div>,
    document.body,
  )
}

export default Drawer
