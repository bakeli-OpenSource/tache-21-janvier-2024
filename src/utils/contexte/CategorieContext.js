import React, { createContext, useState } from 'react'


const CategorieContext = createContext();

export { CategorieContext };

export default function CategorieContextProvider({children}) {
    const table = [
        'Categorie', 'Nombre produit', 'Actions'
    ]
    const [categories, setCategories] = useState([])

      const valueContext = {
        table,
        categories,
        nom,
        quantite,
        statutVisible,
        statutInvisible, 
        imageUrl,
        setCategories, 
        setNom,
        setQuantite,
        setStatutVisible,
        setStatutInvisible,
        setImageUrl
      }

  return (
    <CategorieContext.Provider value={valueContext}>
      {children}
    </CategorieContext.Provider>
  );
}

