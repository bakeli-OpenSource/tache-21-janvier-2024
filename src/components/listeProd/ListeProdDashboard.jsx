import React from 'react'
import Table from '../table/Table';
import useListe from '../../utils/hooks/useListe';
import HeaderTable from '../headerTable/HeaderTable';

export default function ListeProdDashboard() {
  
    const {table, table2} = useListe();

  return (
    <div className='w-full my-3 mr-5'>
        <HeaderTable title="Produits" />
        <Table thead={table} tbody={table2} />
    </div>
  )
}
