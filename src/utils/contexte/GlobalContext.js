import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Fonction de connexion
  const handleLogin = () => {
    axios
      .post('https://kay-solu-api.onrender.com/api/auth/login', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data); // Connexion réussie, vous pouvez gérer le token ici
        const token = response.data.token;
        // Stocker le token dans le local storage
        localStorage.setItem('token', token);
        // Rediriger l'utilisateur vers une autre page par exemple
        navigate('/admin/dashboard');
      })
      .catch((error) => {
        console.error(error); // Gérer les erreurs ici
        alert('Email ou mot de passe incorrect');
      });
  };

  // Fonction pour supprimer le token du local storage après la déconnexion
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };

  // Fonction pour vérifier si l'utilisateur est connecté
  const isLoggedIn = () => {
    // Vérifie si un token est présent dans le local storage
    const token = localStorage.getItem('token');
    // Si un token est présent, retourne true, sinon retourne false
    return !!token;
  };

  const value = {
    showModal,
    setShowModal,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleLogout,
    isLoggedIn,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
