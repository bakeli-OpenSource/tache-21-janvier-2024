import React, { createContext, useState } from "react";

export const SidebareContext = createContext();

const SidebareContextProvider = ({ children }) => {
  const [open, setOpen] = useState( true);
  const [smallScreen, setSmallScreen] = useState(null);
  

  const toggleSidebare = () => {
    setOpen(!open);
  };


  const screenSize = () => {
    if ( open && smallScreen <= "767px") {
      setOpen(false)
    }
  }

  const value = {
    open,
    smallScreen,
    toggleSidebare,
    screenSize,
    setSmallScreen,
    setOpen,
  };

  return <SidebareContext.Provider value={value}>{children}</SidebareContext.Provider>;
};

export default SidebareContextProvider;
