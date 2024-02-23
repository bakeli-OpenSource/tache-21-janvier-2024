import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';


const DetailsCommande = () => {
 
  const {table1} = useCommandes();
  const {open} = useSidebare()


  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable title="Détails Commandes"  />
      <Table thead={table1} tbody={table1}  />
    </div>
  )
}

export default DetailsCommande;
