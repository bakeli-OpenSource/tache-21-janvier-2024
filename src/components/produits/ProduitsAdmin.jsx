import React from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import useFetch from '../../utils/hooks/useFetch'


const ProduitsAdmin = () => {

  const {table, actions} = useProduits();
  const {data} = useFetch('http://localhost:4000/api/produits')
  console.log(data);
  const {open} = useSidebare()
  
  const inputs = [
    {
      label: "Nom produit",
      type: "text"
    },
    {
      label: "Image catégorie",
      type: 'file'
    },
    {
      label: "Nombre produit",
      type: 'number'
    },
    {
      label: "Staut catégorie",
      type: 'text'
    }
  ]
  
  const selects = [
    {
      label: 'Catégorie',
      options: [
        'categorie1',
        'categorie2',
        'categorie3',
      ]
    }
  ]

  const textarea = {
    description: 'description'
  }

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4 `}>

      <HeaderTable
       title="Produits"
       nomAjout="Ajouter des produits" 
       body={<Formulaire inputs={inputs} selects={selects} textarea={textarea} />} 
       />
      <Table thead={table} tbody={data} actions={actions} />
</div>
  )
}

export default ProduitsAdmin
