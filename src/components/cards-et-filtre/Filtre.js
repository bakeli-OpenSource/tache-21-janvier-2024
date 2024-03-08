import React, { useContext, useEffect, useState } from "react";
import Select from "./Select";
import useProduits from "../../utils/hooks/useProduits";
import { ProduitContext } from "../../usersComponents/cards/ProduitContext";
import { ProduitsContext } from "../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../utils/contexte/CategorieContext";

const Filtre = ({categoryNames, handleSelectChangeCategorie}) => {
  // const { categoryNames, setCategoryNames, fetchProduit, categories, filtreProdCategorie, produits,  fetchCategories, handleSelectChangeCategorie } = useContext(ProduitsContext)

  

  // useEffect(() => {
  //   fetchCategories()
  //   setCategoryNames(categories.map((categorie) => categorie.nom));
    
  // }, [categories]);

  // useEffect(() => {    
  //   filtreProdCategorie()
  //   fetchProduit();
  // }, [produits]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 font-normal">
      {/* <Select contenus={semaine} Title="Jour"/> */}
      <Select  contenus={categoryNames}  handleSelectChange={handleSelectChangeCategorie}
                        Title="Catégorie" />
    </div>
  );
};

export default Filtre;
