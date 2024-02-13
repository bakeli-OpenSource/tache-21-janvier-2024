import React from 'react'
import CategorieContextProvider from '../../utils/contexte/CategorieContext'
import ProduitsAdmin from '../produits/ProduitsAdmin'

export default function CategoriesAdmin() {
  return (
    <CategorieContextProvider>
        <ProduitsAdmin />
    </CategorieContextProvider>
  )
}
