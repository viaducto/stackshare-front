import { createContext, useState } from 'react';

interface AppContextProps {
  isMenuActive: boolean;
  showMenu: () => void;
}

export const AppContext = createContext<AppContextProps>({
  isMenuActive: true,
  showMenu: () => {},
});

export const AppProvider = ({ children }: any) => {
  const [isMenuActive, setisMenuActive] = useState(true);

  const handleShow = () => {
    setisMenuActive(!isMenuActive);
  };

  return (
    <AppContext.Provider value={{ isMenuActive, showMenu: handleShow }}>
      {children}
    </AppContext.Provider>
  );
};
