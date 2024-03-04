import React, { createContext, useState, useEffect} from 'react';
import axiosInstance from '../../utils/axiosInstance';
// import Produit from './Produit';

export const ProduitContext = createContext();

const ProduitProvider = ({ children }) => {
  // Etat des produits
  const [produits, setProduits] = useState([]);

  //fetch des produits
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axiosInstance.get('/produits');
        setProduits(response.data);
      } catch (error) {
        console.error('Erreur de fetching des produits:', error);
      }
    };
    fetchProduits();
  }, [])

  return <ProduitContext.Provider value={ {produits} }>{ children }</ProduitContext.Provider>;
};

export default ProduitProvider;