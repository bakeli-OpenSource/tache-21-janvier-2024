import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let prenom;

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [client, setClient] = useState("");
  const [commandes, setCommandes] = useState([]);
  const [password, setPassword] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const [produitAimer, setProduitAimer] = useState(() => {
    const listesEnvies = localStorage.getItem("produitAimer");
    return listesEnvies ? JSON.parse(listesEnvies) : [];
  });

  const handleToggle = () => {
    setDropdown(!dropdown);
  };

  // Fonction de connexion
  const handleLogin = () => {
    axios
      .post("https://kay-solu-api.onrender.com/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data); // Connexion réussie, vous pouvez gérer le token ici
        const token = response.data.token;
        // Stocker le token dans le local storage
        localStorage.setItem("token", token);
        // Rediriger l'utilisateur vers une autre page par exemple
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.error(error); // Gérer les erreurs ici
        alert("Email ou mot de passe incorrect");
      });
  };

  // Fonction pour supprimer le token du local storage après la déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const handleLogoutUser = () => {
    localStorage.removeItem("tokenclient");
    navigate("/");
  };

  // Fonction pour vérifier si l'utilisateur est connecté
  const isLoggedIn = () => {
    // Vérifie si un token est présent dans le local storage
    const token = localStorage.getItem("token");
    // Si un token est présent, retourne true, sinon retourne false
    return !!token;
  };

  const profileUser = async () => {
    const token = localStorage.getItem("tokenclient");
    try {
      const res = await axios.get(
        "https://kay-solu-api.onrender.com/api/authclient/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setClient(res.data);
      // console.log(res.data);
      prenom = res.data.prenom;
      // console.log(client, 'client');
    } catch (error) {
      console.error(error);
    }

    // axios
    //   .get("https://kay-solu-api.onrender.com/api/authclient/profile", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     setClient(res.data);
    //     console.log(client);
    //     prenom = res.data.prenom;
    //     console.log(prenom);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  //   const fetchProduits = async () => {
  //     try {
  //       const response = await axios.get('https://kay-solu-api.onrender.com/api/produits');
  //       setProduits(response.data);
  //     } catch (error) {
  //       console.error('Erreur de fetching des produits:', error);
  //     }
  //   };
  //   fetchProduits();
  // }, [])



  const fetchCommandes = async () => {
    try {
      const response = await axios.get(
        `https://kay-solu-api.onrender.com/api/commandes`,
        
      );
      setCommandes(response.data);
      console.log("Commandes récupérées avec succès");
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes:", error);
    }
  };

  const handleLikeToggle = (id, produit) => {
    const isLiked = produitAimer.some(
      (produit) => produit && produit._id === id
    );

    if (isLiked) {
      const updaterProduits = produitAimer.filter(
        (produit) => produit && produit._id !== id
      );
      setProduitAimer(updaterProduits);
    } else {
      const updaterProduits = [...produitAimer, produit];
      setProduitAimer(updaterProduits);
    }
  };

  useEffect(() => {
    profileUser();
    fetchCommandes()
  }, []);

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
    handleLogoutUser,
    profileUser,
    handleToggle,
    produitAimer,
    setProduitAimer,
    handleLikeToggle,
    client,
    setClient,
    commandes,
    dropdown,
    setDropdown,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
