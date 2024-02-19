import React, { createContext, useState } from "react";
import profile from "../../../src/assets/images/profile.png";

const initialUser = {
  fullName: "miss ",
  lastName: "ndeya",
  telephone: "763676576",
  email: "missndeya@gmail.com",
  profileImage: profile,
};

export const SidebareContext = createContext();

const SidebareContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
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
    if (open && smallScreen <= "767px") {
      setOpen(false);
    }
  };

  //   axios.get('https://kay-solu-api.onrender.com/api/auth/profile', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  // .then((response) => {
  //   console.log("Informations de l'utilisateur connecté :", response.data);
  // })
  // .catch((error) => {
  //   console.error(
  //     "Erreur lors de la récupération des informations de l'utilisateur:",
  //     error
  //   );
  // });

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

  return (
    <SidebareContext.Provider value={value}>
      {children}
    </SidebareContext.Provider>
  );
};

export default SidebareContextProvider;
