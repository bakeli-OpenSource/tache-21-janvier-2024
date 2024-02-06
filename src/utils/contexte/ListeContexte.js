import { createContext } from "react";

export const ListeContexte = createContext();


const ListeContextProvider = ({ children }) => {
  
    const table = [
      'id', 'nom', 'Nombres article',  'Prix'
  ]
    const table2 = [
      {
        id: Math.floor(Math.random()*10000000),
        article:  {nom: "article1"},
        quantite: 50,
        prix:"30 000fr"
      }
  ]


const value = {
  table, table2
};

return <ListeContexte.Provider value={value}>{children}</ListeContexte.Provider>;
};

export default ListeContextProvider;
