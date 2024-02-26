import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SidebareContext = createContext();

const SidebareContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [smallScreen, setSmallScreen] = useState(null);
  const [user, setUser] = useState('');
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
    if (open && smallScreen <= '767px') {
      setOpen(false);
    }
  };

  const profile = () => {
    const token = localStorage.getItem('token');

    axios
      .get('https://kay-solu-api.onrender.com/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    profile,
    setUser,
  };

  return (
    <SidebareContext.Provider value={value}>
      {children}
    </SidebareContext.Provider>
  );
};

export default SidebareContextProvider;
