import React, { useContext, useEffect, useState } from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import { useLocation } from 'react-router-dom';
import { newCategorie } from "../../pages/admin/Categories";
import axios from 'axios';

const ProduitsAdmin = () => {


  const {table, produits, addProduit, actions, nom, setNom, imageUrl, setImageUrl,
          titre, setTitre, description, setDescription, quantite, setQuantite,
          carracteristique, setCarracteristique, categorie, setCategorie,
          prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur
        } = useProduits();
  
  const {open} = useSidebare()

  const [selectsValue, setSelectsValue] = useState('');
  
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
    // {
    //   label: "Descrip",
    //   type: "text",
    //   value: description,
    //   setValue: setDescription
    // },
  ]



  
  const textarea = {
    value: description,
    setValue: setDescription
  }

  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const hanldleSubmit = (e) => {
    e.preventDefault()
    const recupInput = {
      nom, imageUrl, titre, description, quantite,
      categorie: selectedCategoryId, carracteristique, prix, couleur, taille, fournisseur,
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

  
  const [categories, setCategories] = useState([]); // Initialisez avec null

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/categories");
        setCategories(response.data);
        console.log("Catégories récupérées avec succès");
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  const [categoryNames, setCategoryNames] = useState([]); // Initialisez avec null

  useEffect(() => {
    setCategoryNames(categories.map((categorie) => categorie.nom));
  }, [categories]); 
  
  const handleSelectChange = (e) => {
    const selectedCategoryName = e.target.value;
    const selectedCategory = categories.find(cat => cat.nom === selectedCategoryName);
    if (selectedCategory) {
      setSelectedCategoryId(selectedCategory._id);
    } else {
      setSelectedCategoryId('');
    }
    
  };
  
  
  const selects = [
    {
      label: 'Catégorie',
      value: selectsValue,
      options: categoryNames,
      setValue: handleSelectChange
    }
  ]

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4 `}>
      <HeaderTable
       title="Produits"
       nomAjout="Ajouter des produits" 
       body={<Formulaire 
                inputs={inputs} 
                textarea={textarea} 
                selects={selects}
                onSubmit={hanldleSubmit} 
                handleSelectChange = {handleSelectChange}
                />} 
       />
      <Table thead={table} tbody={produits} actions={actions} />
</div>
  )
}

export default ProduitsAdmin
