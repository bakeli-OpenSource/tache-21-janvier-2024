import React, { createContext, useState } from "react";
// import { TbEyeShare } from "react-icons/tb";
// import { useNavigate } from "react-router";

export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {
  // const navigate = useNavigate()

  const table = [
    "Nom",
    "E-mail",
    "Produit",
    " Quantite",
    "Telephone",
    "Etat de la commande",
    "Prix Produit",
    "Prix Livraison",
    "Prix total",
    "Actions",
  ];

  const [idProduit, setIdProduit] = useState("");
  const [email, setEmail] = useState("");
  const [quantite, setQuantite] = useState(0);
  const [produit, setProduit] = useState("");
  const [date, setDate] = useState("");
  const [etat, setEtat] = useState("");
  const [prixTotal, setPrixTotal] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [prixLivraison, setPrixLivraison] = useState("");
  const [prixProduit, setPrixProduit] = useState("");
  const [modif, setModifModal] = useState("");
  const [commandes, setCommandes] = useState([]);

  const value = {
    table,
    commandes,
    // actions,
    produit,
    setProduit,
    idProduit,
    setIdProduit,
    telephone,
    setTelephone,
    adresse,
    setAdresse,
    prixLivraison,
    setPrixLivraison,
    prixProduit,
    setPrixProduit,
    email,
    quantite,
    prixTotal,
    setPrixTotal,
    setEmail,
    date,
    etat,
    setEtat,
    setDate,
    setQuantite,
    modif,
    setModifModal,
    setCommandes,
  };

  return (
    <CommandeContext.Provider value={value}>
      {children}
    </CommandeContext.Provider>
  );
};

export default CommandeContextProvider;
