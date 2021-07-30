import { createContext, useState } from 'react';
import { useWindowResize } from '../hooks/useWindowSize';

interface AppContextProps {
  isMenuActive: boolean;
  showMenu: () => void;
}

export const AppContext = createContext<AppContextProps>({
  isMenuActive: true,
  showMenu: () => {},
});

export const AppProvider = ({ children }: any) => {
  const { offset } = useWindowResize({});
  const [isMenuActive, setisMenuActive] = useState(offset);

  const handleShow = () => {
    setisMenuActive(!isMenuActive);
  };

  return (
    <AppContext.Provider value={{ isMenuActive, showMenu: handleShow }}>
      {children}
    </AppContext.Provider>
  );
};
