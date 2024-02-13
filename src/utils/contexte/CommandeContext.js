import React, { createContext } from "react";
import { TbEyeShare } from "react-icons/tb";
import { useNavigate } from "react-router";

export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {
  const navigate = useNavigate()
  
  
      const table = [
        'Référence', 'E-mail','Nombres article', 'Date','Etat de la commande',  'Prix total', 'Actions'
    ]
      const table2 = [
        {
          id: Math.floor(Math.random()*10000000),
          email:'test@gmail.com',
          quantite: 50,
          date: '6/4/2000',
          etat:'En attente',
          prix:"30 000fr",
        }
    ]

    const table3 = [
      'Référenc', 'Nom du Produict','Taille', 'Quantité','kilo',  'Prix Unitaire ', 'Prix'
  ]
    const table4 = [
      {
        id: Math.floor(Math.random()*10000000),
        email:'T-shirt',
        quantite: 'L',
        date: "4",
        etat: "0.7kg",
        prix:"30 000fr",
        PrixUnitaire : "30 000fr",
      },
      {
        id: Math.floor(Math.random()*10000000),
        email:'T-shirt',
        quantite: 'L',
        date: "4",
        etat: "0.7kg",
        prix:"30 000fr",
        PrixUnitaire : "50 000fr",
      }
  ]
    

    const actions = [
        {
          icon: <TbEyeShare/>,
          color: 'bg-green-500',
          hanldleClick: () => {
          console.log('Ca marche 1')
          navigate("DetailsCommande")
          }
        }
      ]
    
  const value = {
    table, table2, actions, table3,  table4
  };

  return <CommandeContext.Provider value={value}>{children}</CommandeContext.Provider>;
};

export default CommandeContextProvider;
