import React from 'react'
import Table from '../../components/table/Table'
import HeaderTable from '../../components/headerTable/HeaderTable';
import { useContext } from 'react';
import { CategorieContext } from '../../utils/contexte/CategorieContext';


const Categories = () => {
  
  const {table, table2, actions} = useContext(CategorieContext)
  console.log('awa');

  return (
    <div className='m-3 w-full'>
      <HeaderTable title= "Liste categories" nomAjout='Ajouter un nouveau categorie' />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}


export default Categories