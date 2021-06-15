import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ConfigContext } from '@jp-olvera/jp-viaducto-components'

const StyledContainer = styled.div<any>`
  box-sizing: border-box;
  ${(p) => p.padding};
  width: ${(p) => (p.expandHorizontal ? '100%' : 'auto')};
  height: ${(p) => (p.expandVertical ? '100%' : 'auto')};
`

const Container = ({
  top = null,
  right = null,
  bottom = null,
  left = null,
  vertical = null,
  expandHorizontal = false,
  expandVertical = false,
  horizontal = null,
  children,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext)
  const getPadding = () => {
    var padding: any = css``
    if (vertical !== null)
      padding += css`
        padding-top: ${configuration.spacing[vertical]};
        padding-bottom: ${configuration.spacing[vertical]};
      `
    if (horizontal !== null)
      padding += css`
        padding-right: ${configuration.spacing[horizontal]};
        padding-left: ${configuration.spacing[horizontal]};
      `
    if (top !== null)
      padding += css`
        padding-top: ${configuration.spacing[top]};
      `
    if (bottom !== null)
      padding += css`
        padding-bottom: ${configuration.spacing[bottom]};
      `
    if (left !== null)
      padding += css`
        padding-left: ${configuration.spacing[left]};
      `
    if (right !== null)
      padding += css`
        padding-right: ${configuration.spacing[right]};
      `

    return padding.split(',').join('')
  }

  return (
    <StyledContainer
      padding={getPadding}
      expandHorizontal={expandHorizontal}
      expandVertical={expandVertical}
      {...rest}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
