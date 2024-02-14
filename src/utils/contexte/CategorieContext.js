import React, { createContext, useState } from 'react'


const CategorieContext = createContext();

export { CategorieContext };

export default function CategorieContextProvider({children}) {
    const table = [
        'Categorie', 'Nombre produit', 'Actions'
    ]
    const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('categories')) || [])
    
    const [nom, setNom] = useState("")
    const [quantite, setQuantite] = useState(0)
    const [statutVisible, setStatutVisible] = useState(false)
    const [statutInvisible, setStatutInvisible] = useState(false)
    const [imageUrl, setImageUrl] = useState("")


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

