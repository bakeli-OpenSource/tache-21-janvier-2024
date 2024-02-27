
import React, {  useEffect, useState } from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import axios from 'axios';
import Select from '../cards-et-filtre/Select';

const ProduitsAdmin = () => {


  const {table, produits, setProduits, addProduit, actions, titreModal, setTitreModal, nom, setNom, imageUrl, setImageUrl,
          titre, setTitre, description, setDescription, quantite, setQuantite,
          carracteristique, setCarracteristique, categorie, setCategorie, categorieId, setCategorieId,
          prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur, promo, setPromo,
          soumettre, updateProduit, filtreProduits, setFiltreProduits, handleSelectChange, categories,
          categoryNames, setCategoryNames, handleSelectChangeCategorie
        } = useProduits();
  
  const {open} = useSidebare()

  const [selectsValue] = useState('');
  
  const inputs = [
    {
      label: "Nom du Produit",
      type: "text",
      value: nom,
      setValue: setNom
    },
    {
      label: "Image du produit",
      type: "file",
      name: "imageUrl",
      // value: imageUrl,
      setValue: setImageUrl
    },
    {
      label: "Titre du Produit",
      type: "text",
      value: titre,
      setValue: setTitre
    },
    {
      label: "Quantité",
      type: "number",
      value: quantite,
      setValue: setQuantite
    },
    {
      label: "Carractéristiques",
      type: "text",
      value: carracteristique,
      setValue: setCarracteristique
    },
    {
      label: "Prix",
      type: "number",
      value: prix,
      setValue: setPrix
    },
    {
      label: "Couleur",
      type: "text",
      value: couleur,
      setValue: setCouleur
    },
    {
      label: "Taille",
      type: "text",
      value: taille,
      setValue: setTaille
    },
    {
      label: "Fourniseur",
      type: "text",
      value: fournisseur,
      setValue: setFournisseur
    },
    {
      label: "Promo en %",
      type: "number",
      value: promo,
      setValue: setPromo
    }
  ]

  const textarea = {
    value: description,
    setValue: setDescription
  }


  const hanldleSubmit = (e) => {
    e.preventDefault()
    const recupInput = {
      nom, imageUrl, titre, description, quantite,
      categorie, categorieId, carracteristique, prix, couleur, taille, fournisseur, promo
    }
    if (soumettre === 'Ajouter') {
      console.log('Ajout de produit');
      addProduit(recupInput)
    }else{
      console.log('modification de produit');
      updateProduit(recupInput)
    }
    setNom('')
    setImageUrl('')
    setTitre('')
    setDescription('')
    setQuantite('')
    setCategorie('')
    setCarracteristique('')
    setPrix('')
    setCouleur('')
    setTaille('')
    setFournisseur('')
    setPromo('')
  }

  const selects = [
    {
      label: 'Catégorie',
      value: selectsValue,
      options: categoryNames,
      setValue: handleSelectChange
    }
  ]
  
 
  
  setTitreModal(
    'Ajouter un produits'
  )

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
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
</div>
  )
}

export default ProduitsAdmin