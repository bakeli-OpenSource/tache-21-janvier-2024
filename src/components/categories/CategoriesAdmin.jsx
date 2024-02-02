import React from 'react'
import CategorieContextProvider from '../../utils/contexte/CategorieContext'
import Categories from '../../pages/admin/Categories'

export default function CategoriesAdmin() {
  return (
    <CategorieContextProvider>
        <Categories />
    </CategorieContextProvider>
  )
}
