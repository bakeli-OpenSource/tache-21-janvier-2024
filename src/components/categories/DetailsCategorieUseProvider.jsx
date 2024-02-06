import React from 'react'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'
import DetailsCategorie from '../../pages/admin/DetailsCategorie'

const DetailsCategorieUseProvider = () => {
  return (
    <ProduitContextProvider>
      <DetailsCategorie />
    </ProduitContextProvider>
  )
}

export default DetailsCategorieUseProvider
