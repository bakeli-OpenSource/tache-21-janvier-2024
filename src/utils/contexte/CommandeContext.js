import React, { createContext } from "react";
import { TbEyeShare } from "react-icons/tb";

export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {
  
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
          prix:"30 000fr"
        }
    ]
    
    const actions = [
        {
          icon: <TbEyeShare/>,
          color: 'bg-green-500',
          hanldleClick: () => console.log('Ca marche 1')
        }
      ]
    

    
  

  const value = {
    table, table2, actions
  };

  return <CommandeContext.Provider value={value}>{children}</CommandeContext.Provider>;
};

export default CommandeContextProvider;
