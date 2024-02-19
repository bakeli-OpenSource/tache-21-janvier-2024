import React from 'react'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'
import DetailsCategorie from '../../pages/admin/DetailsCategorie'
import Shop from '../../pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Shop'


const DetailsCategorieUseProvider = () => {
  return (
    <ProduitContextProvider>
      <Shop/>
      <DetailsCategorie />
    </ProduitContextProvider>
  )
}

export default DetailsCategorieUseProvider
