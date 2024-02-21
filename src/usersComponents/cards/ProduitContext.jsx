import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';
import Produit from './Produit';

export const ProduitContext = createContext();

const ProduitProvider = ({ children }) => {
  // Etat des produits
  const [produits, setProduits] = useState([]);

  //fetch des produits
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('https://kay-solu-api.onrender.com/api/produits');
        setProduits(response.data);
      } catch (error) {
        console.error('Erreur de fetching des produits:', error);
      }
    };
    fetchProduits();
  }, [Produit])

  return <ProduitContext.Provider value={ {produits} }>{ children }</ProduitContext.Provider>;
};

export default ProduitProvider;