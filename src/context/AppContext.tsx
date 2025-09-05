"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IAppContext {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  handleToggleNav: () => void;
}

const AppContext = createContext<IAppContext>({
  navOpen: false,
  setNavOpen: () => {},
  handleToggleNav: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
    console.log("object");
  };
  return (
    <AppContext.Provider value={{ navOpen, setNavOpen, handleToggleNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
