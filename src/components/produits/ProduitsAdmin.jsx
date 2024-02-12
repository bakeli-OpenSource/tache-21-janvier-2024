import React, { useContext, useEffect, useState } from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import { useLocation } from 'react-router-dom';
import { CategorieContext } from '../../utils/contexte/CategorieContext';


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
  
  const location = useLocation()
  const [selects, setSelects] = useState([
    {
      label: 'Catégorie',
      value: '',
      options: ['categorie1', 'categorie2', 'categorie3'],
    }
  ]);

console.log(selects[0].options);
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

  useEffect(() => {
    
    selects[0].options.push('newcategorie')
    
    // if (newCategory) {
    //   // Ajouter la nouvelle catégorie à votre état `selects`
      // const updatedSelects = [...selects];
      // updatedSelects.push("newCategory");
      // setSelects(updatedSelects);
    // }
  }, []);
  

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4 `}>

      <HeaderTable
       title="Produits"
       nomAjout="Ajouter des produits" 
       body={<Formulaire 
                inputs={inputs} 
                textarea={textarea} 
                selects={selects}
                onSubmit={hanldleSubmit} />} 
       />
      <Table thead={table} tbody={produits} actions={actions} />
</div>
  )
}

export default ProduitsAdmin
