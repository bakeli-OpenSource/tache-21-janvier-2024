import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const FilterCategorieContext = createContext();

const FilterCategorieProvider = ({ children }) => {
  // Etat des produits
  const [filterCategorie, setFilterCategorie] = useState([]);

  //fetch des produits
  useEffect(() => {
    const fetchFilterCategories = async () => {
        try {
          const response = await axios.get("https://kay-solu-api.onrender.com/api/categories");
          setFilterCategorie(response.data);
          console.log("Catégories récupérées avec succès");
        } catch (error) {
          console.error("Erreur lors de la récupération des catégories:", error);
        }
      };
    fetchFilterCategories();
  }, [])

  return <ProduitContext.Provider value={ {produits} }>{ children }</ProduitContext.Provider>;
};

export default ProduitProvider;