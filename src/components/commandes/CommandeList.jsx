import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';


const ProduitsAdmin = () => {

  const {table, table2, actions} = useCommandes();

  return (
    <div className='mr-5 my-3 w-full'>
      <HeaderTable title="Commandes" nomAjout="Ajouter des Commandes"  />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}

export default ProduitsAdmin
