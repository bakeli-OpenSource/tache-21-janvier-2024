import React from 'react'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'
import DetailsCategorie from '../../pages/admin/DetailsCategorie'
import Graphique2 from '../../pages/admin/graphique2/Graph'


const DetailsCategorieUseProvider = () => {
  return (
    <ProduitContextProvider>
      <Graphique2/>
      <DetailsCategorie />
    </ProduitContextProvider>
  )
}

export default DetailsCategorieUseProvider
