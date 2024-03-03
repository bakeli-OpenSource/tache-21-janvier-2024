import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";
import CardProduit from "../../../../usersComponents/cards/CardProduit";
import Loader from "../../../../components/loader/loader";
import axiosInstance from "../../../../utils/axiosInstance";



const Shop = () => {
  const { produits } = useContext(ProduitsContext);
  const { categories, setCategories } = useContext(CategorieContext); // Accédez au contexte des catégories

  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [produitAimer, setProduitAimer] = useState(() => {
  //   const listesEnvies = localStorage.getItem("produitAimer");
  //   return listesEnvies ? JSON.parse(listesEnvies) : [];
  // });

  

  const [categorieSelect, setCategorieSelect] = useState([]);
  const [categorieId, setCategorieId] = useState("");
  const [listeProduitsCategories, setListeProduitsCategories] = useState([]);

  // const handleClick = () => {
  //   // Afficher tous les produits si aucune catégorie sélectionnée
  //   setFilteredProducts(produits);
  // }

  const fetchProduitsCategorie = async (idCategory) => {
    try {

      const response = await axiosInstance.get(`/produits/categorie/${idCategory}`);      
      setListeProduitsCategories(response.data)
      
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des produits de la catégories :",
        error
      );
    }
  };

  const filtreProdCategorie = () => {
    const selectedCategory = categories.find(
      (cat) => cat.nom === categorieSelect
    );

    if (selectedCategory) {
      setCategorieId(selectedCategory._id);
      fetchProduitsCategorie(categorieId);
      setFilteredProducts(listeProduitsCategories);
    } else {
      setFilteredProducts(produits);
    }
  };
  const fetchFilterCategories = async () => {
    try {

      const response = await axiosInstance.get("/categories");
      setCategories(response.data);
      console.log("Catégories récupérées avec succès");
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  // // Logique de filtrage des produits
  const handleChange = (selectedCategorie) => {
    setCategorieSelect(selectedCategorie);
    filtreProdCategorie();
  };

  useEffect(() => {
    fetchFilterCategories();
    filtreProdCategorie();
  }, []);

  useEffect(() => {
    setFilteredProducts(produits);
  }, [categories]);

  const { setDropdown } = useGlobal();

  // // Fonction pour mettre à jour l'état de survol pour un produit spécifique
  // const handleHoverEtoils = (index, etoils) => {
  //   let newHoverArray = [...hoverArray]; // Copie de l'array d'états actuel
  //   newHoverArray[index] = etoils; // Met à jour l'état de survol pour le produit à l'index spécifié
  //   setHoverArray(newHoverArray); // Met à jour l'état du composant
  // };

  return (
    <>
         <div
    data-aos="zoom-in"
      onClick={() => setDropdown(false)}
      className="px-9  mt-[50px] mx-auto z-0 flex flex-col  "
    >
      <div className="mt-[30px] ">
        {produits.length > 0 ? (
          <>
            <h1 className="mb-5">New Arrivals</h1>

            <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((produit) => (
                <CardProduit produit={produit} key={produit._id} />
              ))}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
    </>
  );
};

export default Shop;