import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '../formulaire/Formulaire';


const CommandeAdmin = () => {

  const {table, table2, actions} = useCommandes();
  const {open} = useSidebare()
  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: ""
    },
    {
      label: "Nombre",
      type: "number",
      placeholder: ""
    },
    {
      label: "Date",
      type: 'date',
      placeholder: ""
    },
    {
      label: "Etat commande",
      type: 'text',
      placeholder: ""
    },
    {
      label: "Prix total",
      type: 'text',
      placeholder: "text"
    }
  ]

  const selects = [
    {
      label: 'Etat commandee',
      value: "categorie",
      setValue: "setCategorie",
      options: [
        'En attent',
        'En traitement',
        'En livraison',
        'Livrée',
      ]
    }
  ]

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable 
        title="Commandes" 
        nomAjout="Ajouter des Commandes" 
        body={<Formulaire inputs={inputs} selects={selects} />} />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}

export default CommandeAdmin;
