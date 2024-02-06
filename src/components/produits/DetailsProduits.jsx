import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'
import HeaderTable from '../headerTable/HeaderTable';
import { useParams } from 'react-router-dom';

const DetailsProduits = () => {
    const {id} = useParams();
    const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  my-3 `}>
      <HeaderTable title="Détail du produit" />
      <h2>Id: {id}</h2>
    </div>
  )
}

export default DetailsProduits
