import React, { useContext, useEffect, useState } from 'react'
import HeaderTable from '../../components/headerTable/HeaderTable';
import Table from '../../components/table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import useProduits from '../../utils/hooks/useProduits';



const DetailsCategorie = () => {

  const {table, produits, actions} = useProduits();
  const {open} = useSidebare()


  useEffect(() => {
    // Récupérer l'ID de la catégorie depuis le stockage local
    const categorieIdCli = localStorage.getItem("categorieIdCli");
  }, []);

  const CategoriesProduits = produits.filter(
    (produit) => produit.categorieId === localStorage.getItem("categorieIdCli")
  )


  
   useEffect(() => {

   }, [CategoriesProduits]);

  

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  my-3 `}>
      <HeaderTable title="Produits" nomAjout="Ajouter des tables"  />
      <Table thead={table} tbody={CategoriesProduits} actions={actions} />
    </div>
  )
}

export default DetailsCategorie
