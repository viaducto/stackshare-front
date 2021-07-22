import { createContext, useState, useContext, useEffect } from 'react';
import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme } from './themes';

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
      localStorage.setItem('dark-mode', 'on');
    } else {
      setCurrentTheme(darkTheme);
      localStorage.setItem('dark-mode', 'off');
    }
    setIsDark((e) => !e);
  };

  useEffect(() => {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'off') {
      setCurrentTheme(darkTheme);
    }
  }, []);

  useEffect(() => {
    const myConfig = {
      colors: {
        ...configuration.colors,
        background: currentTheme.mainBackground,
        primary: {
          default: '#1890FF',
          hover: '#40A9FF',
          click: '#096DD9',
          text: '#fff',
          shadow: 'rgba(24, 144, 255, 0.3)',
        },
        tab: {
          default: '#1890FF',
          hover: '#40A9FF',
          click: '#096DD9',
          text: '#fff',
          shadow: 'rgba(24, 144, 255, 0.3)',
        },
        secondary: {
          default: '#D9D9D9',
          hover: '#F5F5F5',
          click: '#F5F5F5',
          text: '#595959',
          shadow: 'rgba(223, 231, 238, 0.3)',
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
        text: {
          ...configuration.colors.text,
          dark: currentTheme.title,
          darkGray: `${currentTheme.title}55`,
          muttedGray: currentTheme.secondaryText,
          primary: '#1890FF',
        },
        neutral: {
          light: currentTheme.neutral,
          invert: '#000',
        },
        defaultInputBorderColor: '#d9d9d9',
        table: currentTheme.table,
        navigation: {
          background: '#177cef1f',
          color: '#177def',
        },
      },
      drawerSizes: {
        sm: '28.563rem',
        md: '53rem',
        lg: '64rem',
      },
      border: `0.063rem solid ${currentTheme.border}`,
      fontFamily: "'Source Sans Pro', sans-serif",
      titleFontFamily: "'Source Sans Pro', sans-serif",
    };
    if (updateConfig !== undefined) {
      updateConfig(myConfig);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const html: HTMLHtmlElement | null = document.querySelector('html');
    if (html !== null) {
      html.style.backgroundColor = currentTheme.mainBackground;
    }
    // eslint-disable-next-line
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
