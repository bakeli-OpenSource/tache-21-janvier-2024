import React, {useEffect} from 'react'
import HeaderTable from '../../components/headerTable/HeaderTable';
import Table from '../../components/table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import useProduits from '../../utils/hooks/useProduits';



const DetailsCategorie = ({data}) => {

  const {table, actions} = useProduits();
  const {open} = useSidebare()

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  my-3 `}>
      <HeaderTable title="Produits" nomAjout="Ajouter un produit"  />
      <Table thead={table} tbody={data} actions={actions} />
    </div>
  )
}

export default DetailsCategorie
