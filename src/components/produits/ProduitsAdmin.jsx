import React from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import useFetch from '../../utils/hooks/useFetch'


const ProduitsAdmin = () => {

  const {table, table2, actions} = useProduits();
  const {data} = useFetch('http://localhost:4000/api/produits')
  console.log(data);
  const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4 `}>
      <HeaderTable title="Produits" nomAjout="Ajouter des produits" body={<Formulaire />} />
      <Table thead={table} tbody={data} actions={actions} />
    </div>
  )
}

export default ProduitsAdmin
