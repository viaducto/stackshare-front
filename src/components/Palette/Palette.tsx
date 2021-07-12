import React from 'react';
import { StyledPalette } from './StyledPalette';

const Palette = ({
  main,
  secondary,
  terciary,
}: {
  main: string;
  secondary: string;
  terciary: string;
}) => (
  <StyledPalette main={main} secondary={secondary} terciary={terciary}>
    <div className='main' />
    <div className='secondary' />
    <div className='terciary' />
  </StyledPalette>
);

export default Palette;
