import React from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';


const ProduitsAdmin = () => {

  const {table, produits, addProduit, actions, nom, setNom, imageUrl, setImageUrl,
          titre, setTitre, description, setDescription, quantite, setQuantite,
          carracteristique, setCarracteristique, categorie, setCategorie,
          prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur
        } = useProduits();
  const {open} = useSidebare()
  
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
      value: imageUrl,
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
      label: "Categorie",
      type: "text",
      value: categorie,
      setValue: setCategorie
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
  ]
  
  const selects = [
    {
      label: 'Catégorie',
      value: categorie,
      setValue: setCategorie,
      options: [
        'categorie1',
        'categorie2',
        'categorie3',
      ]
    }
  ]

  const textarea = {
    value: description,
    setValue: setDescription
  }
  const hanldleSubmit = (e) => {
    e.preventDefault()
    const recupInput ={
      nom, imageUrl, titre, description, quantite,
      carracteristique, categorie, prix, couleur, taille, fournisseur,
    }
    addProduit(recupInput)
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
  }

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4 `}>

      <HeaderTable
       title="Produits"
       nomAjout="Ajouter des produits" 
       body={<Formulaire inputs={inputs} textarea={textarea} onSubmit={hanldleSubmit} />} 
       />
      <Table thead={table} tbody={produits} actions={actions} />
</div>
  )
}

export default ProduitsAdmin
