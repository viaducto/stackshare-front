import { createContext, useState, useContext, useEffect } from 'react';
import { StackshareThemeProps } from '../types';
import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
import { ThemeProvider } from 'styled-components';

export const defaultTheme: StackshareThemeProps = {
  mainBackground: 'white',
  secondaryBackground: '#f0f2f5',
  brandColor: '#1665D8',
  brandShadow: '#F6F9FD',
  mainColor: 'black',
  title: '#262626',
  primaryText: '#595959',
  secondaryText: '#8C8C8C',
  disable: '#BFBFBF',
  border: '#D9D9D9',
  dividers: '#E8E8E8',
  tableHeader: '#FAFAFA',
};

export const darkTheme: StackshareThemeProps = {
  mainBackground: '#3e3e50',
  secondaryBackground: '#adc4d4',
  brandColor: '#1665D8',
  brandShadow: '#F6F9FD',
  mainColor: '#F6F9FD',
  title: '#d3d5f3',
  primaryText: '#f1ecec',
  secondaryText: '#faeaea',
  disable: '#BFBFBF',
  border: '#D9D9D9',
  dividers: '#E8E8E8',
  tableHeader: '#FAFAFA',
};

export const StackShareThemeContext = createContext({
  setDarkMode: () => {},
  isDarkMode: false,
});

const StackShareThemeProvider = ({ children }: any) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const { updateConfig, configuration } = useContext(ConfigContext);
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    if (isDark) {
      setCurrentTheme(defaultTheme);
    } else {
      setCurrentTheme(darkTheme);
    }
    setIsDark((e) => !e);
    console.log(isDark);
  };

  useEffect(() => {
    const myConfig = {
      colors: {
        ...configuration.colors,
        primary: {
          default: '#1890FF',
          hover: '#40A9FF',
          click: '#096DD9',
          text: '#fff',
          shadow: 'rgba(24, 144, 255, 0.3)',
        },
        success: {
          default: '#52C41A',
          hover: '#73D13D',
          click: '#B7EB8F',
          text: '#fff',
          shadow: 'rgba(82, 196, 26, 0.3)',
        },
        warning: {
          default: '#FAAD14',
          hover: '#FFC53D',
          click: '#FFE58F',
          text: '#fff',
          shadow: 'rgba(250, 173, 20, 0.3)',
        },
        danger: {
          default: '#F5222D',
          hover: '#FF4D4F',
          click: '#FFA39E',
          text: '#fff',
          shadow: 'rgba(245, 34, 45, 0.3)',
        },
      },
      drawerSizes: {
        sm: '28.563rem',
        md: '53rem',
        lg: '64rem',
      },
      text: {
        ...configuration.textColors,
        dark: currentTheme.title,
        muttedGray: currentTheme.secondaryText,
        primary: '#1890FF',
      },
    };
    if (updateConfig !== undefined) {
      console.log('config components has been updated');
      updateConfig(myConfig);
    } else {
      console.log(updateConfig);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <StackShareThemeContext.Provider value={{ setDarkMode: handleTheme, isDarkMode: isDark }}>
        {children}
      </StackShareThemeContext.Provider>
    </ThemeProvider>
  );
};

export default StackShareThemeProvider;
