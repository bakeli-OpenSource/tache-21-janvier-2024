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
      label: "Nom",
      placeholder: "Mon Prenom"
    },
    {
      label: "Prenom",
      placeholder: "Mon prenom"
    },
    {
      label: "Age",
      placeholder: "Mon age"
    }
  ]

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable title="Commandes" nomAjout="Ajouter des Commandes" body={<Formulaire inputs={inputs} />} />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}

export default CommandeAdmin;