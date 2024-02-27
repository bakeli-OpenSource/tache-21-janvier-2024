import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import Select from "./Select";
import useProduits from '../../utils/hooks/useProduits';

const Filtre = ({handleSelectChange}) => {
  
  const {categoryNames, setCategoryNames, categories, setCategories} = useProduits();

  const semaine = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  

  useEffect(() => {
    setCategoryNames(categories.map((categorie) => categorie.nom));
  }, [categories]); 


  return (
    <div className="flex flex-col sm:flex-row gap-3 font-normal">
      <Select contenus={semaine} Title="Jour"/>
      <Select contenus={categoryNames} handleSelectChange={handleSelectChange} Title="Catégorie" />
    </div>
  );
};

export default Filtre;
