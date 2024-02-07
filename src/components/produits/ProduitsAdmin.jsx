import React from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';


const ProduitsAdmin = () => {

  const {table, produits, actions} = useProduits();
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
      <Table thead={table} tbody={produits} actions={actions} />
</div>
  )
}

export default ProduitsAdmin
