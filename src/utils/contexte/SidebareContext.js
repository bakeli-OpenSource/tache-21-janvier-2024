import React, { createContext, useState } from "react";

export const SidebareContext = createContext();

const SidebareContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleSidebare = (open) => {
    setOpen(!open);
  };

  const value = {
    open,
    toggleSidebare,
  };

  return <SidebareContext.Provider value={value}>{children}</SidebareContext.Provider>;
};

export default SidebareContextProvider;
