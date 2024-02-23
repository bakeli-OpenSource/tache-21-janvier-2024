import React, { createContext, useState } from 'react'


const CategorieContext = createContext();

export { CategorieContext };

export default function CategorieContextProvider({children}) {
    const table = [
        'Categorie', 'Nombre produit', 'Actions'
    ]
    
    const [nom, setNom] = useState("");
    const [quantite, setQuantite] = useState("0");
    const [categories, setCategories] = useState([])
    const [categoriesProd, setCategoriesProd] = useState([])

      const valueContext = {
        categoriesProd, setCategoriesProd,
        table,
        categories,
        nom,
        quantite,
        setNom,
        setQuantite,
        setCategories

      }

  return (
    <CategorieContext.Provider value={valueContext}>
      {children}
    </CategorieContext.Provider>
  );
}