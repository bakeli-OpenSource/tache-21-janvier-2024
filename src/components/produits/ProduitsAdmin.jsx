import React, { useEffect } from "react";
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import Select from '../cards-et-filtre/Select';
import { ToastContainer } from 'react-toastify';

const ProduitsAdmin = () => {


  const {table, actions, titreModal, setTitreModal, 
          filtreProduits, handleSelectChange,produits,    
          filtreProdCategorie,
          fetchProduit, setCategoryNames, setFiltreProduits, categories,
          categoryNames, handleSelectChangeCategorie, inputs, 
          textarea, selects, hanldleSubmit, fetchCategories
        } = useProduits();
  

        useEffect(() => {    
          filtreProdCategorie()
          fetchProduit();
        }, [produits]);

        
  useEffect(() => {
		setCategoryNames(categories.map((categorie) => categorie.nom));
		setFiltreProduits(produits)
	  }, [categories]); 

    useEffect(() => {    
      fetchCategories();
}, []);
  
  setTitreModal(
    'Ajouter un produits'
  )

  const {open, closedrop} = useSidebare()

  setTitreModal(
    'Ajouter un produits'
  )
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