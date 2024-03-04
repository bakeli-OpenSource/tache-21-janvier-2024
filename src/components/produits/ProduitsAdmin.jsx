import React, { useState } from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import Select from '../cards-et-filtre/Select';
import { ToastContainer } from 'react-toastify';

const ProduitsAdmin = () => {


  const {table, actions, titreModal, setTitreModal, 
          filtreProduits, handleSelectChange,
          categoryNames, handleSelectChangeCategorie, inputs, textarea, selects, hanldleSubmit
        } = useProduits();
  

  
  setTitreModal(
    'Ajouter un produits'
  )


  const {open, closedrop} = useSidebare()

  
<<<<<<< HEAD

=======
  setTitreModal(
    'Ajouter un produits'
  )
>>>>>>> fcb3019d66066e5669c08f31232cff3b34e0a2c3
  return (
    <div onClick={closedrop} className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable
       title="Produits"
       filtre={<Select  contenus={categoryNames}  handleSelectChange={handleSelectChangeCategorie}
                        Title="Catégorie" />}
       nomAjout={titreModal} 
       test="test"
       body={<Formulaire 
                inputs={inputs} 
                textarea={textarea} 
                selects={selects}
                onSubmit={hanldleSubmit} 
                handleSelectChange = {handleSelectChange}
            />} 
       />
      <Table thead={table} tbody={filtreProduits} actions={actions} />
      <ToastContainer />
</div>
  )
}

export default ProduitsAdmin