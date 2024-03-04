import React, { useState } from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import Select from '../cards-et-filtre/Select';
import { ToastContainer } from 'react-toastify';

const ProduitsAdmin = () => {


  const {table, produits, setProduits, addProduit, actions, titreModal, setTitreModal, nom, setNom, imageUrl, setImageUrl,
          titre, setTitre, description, setDescription, quantite, setQuantite,
          carracteristique, setCarracteristique, categorie, setCategorie, categorieId, setCategorieId,
          prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur, promo, setPromo,
          soumettre, updateProduit, filtreProduits, setFiltreProduits, handleSelectChange, categories,
          categoryNames, setCategoryNames, handleSelectChangeCategorie, inputs, textarea, selects, hanldleSubmit
        } = useProduits();
  
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