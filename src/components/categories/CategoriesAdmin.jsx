import React from 'react'
import CategorieContextProvider from '../../utils/contexte/CategorieContext'
import Categories from '../../pages/admin/Categories'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'

export default function CategoriesAdmin() {
  return (
    <CategorieContextProvider>
      <ProduitContextProvider>
        <Categories />
      </ProduitContextProvider>
    </CategorieContextProvider>
  )
}
