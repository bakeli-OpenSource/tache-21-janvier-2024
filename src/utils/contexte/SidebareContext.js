import React, { createContext, useState } from "react";

const initialUser = {
  fullName: 'miss ',
  lastName: 'ndeya',
  telephone: "763676576",
  email: 'missndeya@gmail.com',
  profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&usqp=CAU', 
};

export const SidebareContext = createContext();

const SidebareContextProvider = ({ children }) => {
  const [open, setOpen] = useState( true);
  const [smallScreen, setSmallScreen] = useState(null);
  const [user, setUser] = useState(initialUser);
  const [dropdown, setDropdown] = useState(false);
  const [message, setMessage] = useState(false);
  const [notification, setNotification] = useState(false);

    const handleToggle = () => {
      setDropdown(!dropdown);
      setMessage(false);
      setNotification(false);
    };

    const handleNotification = () => {
      setNotification(!notification);
      setDropdown(false);
      setMessage(false);
    };

    const handleMessage = () => {
      setMessage(!message);
      setDropdown(false);
      setNotification(false);
    };

  const updateUserProfile = (updatedUser) => {
    setUser(updatedUser);
  };
  

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
    user,
    dropdown,
    notification,
    message,
    handleMessage,
    handleNotification,
    toggleSidebare,
    screenSize,
    setSmallScreen,
    setOpen,
    updateUserProfile,
    handleToggle,
  };

  return <SidebareContext.Provider value={value}>{children}</SidebareContext.Provider>;
};

export default SidebareContextProvider;
