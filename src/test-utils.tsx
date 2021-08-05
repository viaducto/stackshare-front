import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom/';
import { AppProvider, StackShareThemeProvider } from './providers';
import { ConfigProvider } from '@jp-olvera/jp-viaducto-components';
import { MemoryRouter } from 'react-router-dom';

expect.extend(toHaveNoViolations);

// https://reactrouter.com/web/guides/testing
const RenderPage: FC = ({ children }: any) => (
  <ConfigProvider>
    <StackShareThemeProvider>
      <MemoryRouter>
        <AppProvider>{children}</AppProvider>
      </MemoryRouter>
    </StackShareThemeProvider>
  </ConfigProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: RenderPage, ...options });
// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, axe };
