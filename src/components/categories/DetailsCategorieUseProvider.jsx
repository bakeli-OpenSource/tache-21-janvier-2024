import React, { useEffect, useState } from 'react'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'
import DetailsCategorie from '../../pages/admin/DetailsCategorie'
import { useParams } from 'react-router-dom'
import useProduits from '../../utils/hooks/useProduits'

const CategorContainer = ({idCategory}) =>{
  const { listeProduitsCategories, fetchProduitsCategorie} = useProduits();

  
  useEffect(() => {
    fetchProduitsCategorie(idCategory);
  }, []);
   
  return (
    <DetailsCategorie data={listeProduitsCategories} />
  )
}

const DetailsCategorieUseProvider = () => {
  const {idCategory}  = useParams()

  return (
    <ProduitContextProvider>
        <CategorContainer idCategory={idCategory} />
    </ProduitContextProvider>
  )
}

export default DetailsCategorieUseProvider
