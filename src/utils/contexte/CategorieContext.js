import React, { createContext, useState } from 'react'


const CategorieContext = createContext();

export { CategorieContext };

export default function CategorieContextProvider({children}) {
    const table = [
        'Categorie', 'Nombre produit', 'Statut', 'Actions'
    ]
    const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('categories')) || [])
    
    const [nom, setNom] = useState("categorie1")
    const [quantite, setQuantite] = useState(0)
    const [statutVisible, setStatutVisible] = useState(true)
    const [statutInvisible, setStatutInvisible] = useState(false)
    const [radioValue, setRadioValue] = useState("") 
    const [statut, setStatut] = useState(true)
    const [imageUrl, setImageUrl] = useState("")

      



      const valueContext = {
        table,
        categories,
        nom,
        quantite,
        statut,
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

