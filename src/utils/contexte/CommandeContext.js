import React, { createContext, useState } from "react";
// import { TbEyeShare } from "react-icons/tb";
// import { useNavigate } from "react-router";

export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {
  // const navigate = useNavigate()
  
  
      const table = [
        'Référence', 'E-mail','Nombres article', 'Date','Etat de la commande',  'Prix total', 'Actions'
    ]
    
    const [email, setEmail] = useState("")
    const [quantite, setQuantite] = useState(0)
    const [date, setDate] = useState('')
    const [etat, setEtat] = useState('')
    const [price, setPrice] = useState("")
    const [commandes, setCommandes] = useState([])

    const table1 = [
      'Référenc', 'Nom du Produict','Taille', 'Quantité','kilo',  'Prix Unitaire ', 'Prix'
  ]

    
  const value = {
    table, 
    commandes,
    table1, 
    // actions,  
    email,
    quantite,
    price,
    setPrice,
    setEmail,
    date,
    etat,
    setEtat,
    setDate,
    setQuantite,
    setCommandes
  };

  return <CommandeContext.Provider value={value}>{children}</CommandeContext.Provider>;
};

export default CommandeContextProvider;
