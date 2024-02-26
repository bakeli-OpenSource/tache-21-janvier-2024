import React from 'react'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'
import ProduitsAdmin from '../../components/produits/ProduitsAdmin'
import CategorieContextProvider from '../../utils/contexte/CategorieContext'

const Produits = () => {
  return (
        <ProduitContextProvider>
            <ProduitsAdmin />
        </ProduitContextProvider>
  )
}

export default Produits
