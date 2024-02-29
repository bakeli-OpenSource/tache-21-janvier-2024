import React, {useEffect} from 'react'
import HeaderTable from '../../components/headerTable/HeaderTable';
import Table from '../../components/table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import useProduits from '../../utils/hooks/useProduits';
import Formulaire from '../../components/formulaire/Formulaire';



const DetailsCategorie = ({data}) => {

  const {table, actions, inputs, textarea, selects, hanldleSubmit, titreModal, handleSelectChange, setTitreModal} = useProduits();
  const {open} = useSidebare()


  
  setTitreModal(
    'Ajouter un produits'
  )
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  my-3 `}>
      <HeaderTable
       title="Produits"
       nomAjout={titreModal} 
       body={<Formulaire 
                inputs={inputs} 
                textarea={textarea} 
                selects={selects}
                onSubmit={hanldleSubmit} 
                handleSelectChange = {handleSelectChange}
            />} 
       />
      <Table thead={table} tbody={data} actions={actions} />
    </div>
  )
}

export default DetailsCategorie
