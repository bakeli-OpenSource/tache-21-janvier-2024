import React from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';


const ProduitsAdmin = () => {

  const {table, table2, actions} = useProduits();

  return (
    <div className='mr-5 my-3 w-full'>
      <HeaderTable title="Produits" nomAjout="Ajouter des tables"  />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}

export default ProduitsAdmin
