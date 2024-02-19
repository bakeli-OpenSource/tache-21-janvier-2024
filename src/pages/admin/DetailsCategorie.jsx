import React from 'react'
import HeaderTable from '../../components/headerTable/HeaderTable';
import Table from '../../components/table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import useProduits from '../../utils/hooks/useProduits';
import { categorieIdCli } from './Categories';

export let ProduitsCategories = [];


const DetailsCategorie = () => {

  const {table, produits, actions} = useProduits();
  const {open} = useSidebare()

  ProduitsCategories = produits.filter(
    (produits) => produits.categorieId === categorieIdCli
  )

  console.log(ProduitsCategories.length);

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  my-3 `}>
      <HeaderTable title="Produits" nomAjout="Ajouter des tables"  />
      <Table thead={table} tbody={ProduitsCategories} actions={actions} />
    </div>
  )
}

export default DetailsCategorie
