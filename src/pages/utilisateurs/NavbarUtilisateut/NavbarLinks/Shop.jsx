import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";
import { usePanier } from "../../../../utils/contexte/PanierContext";
import CardProduit from "../../../../usersComponents/cards/CardProduit";
import Loader from "../../../../components/loader/loader";


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
      const response = await axios.get(
        `https://kay-solu-api.onrender.com/api/produits/categorie/${idCategory}`
      );
      setListeProduitsCategories(response.data);
      console.log("Produits catégorie récupérées avec succès");
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
      const response = await axios.get(
        "https://kay-solu-api.onrender.com/api/categories"
      );
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
        className="  mt-[50px] mx-auto z-0 flex flex-col  "
      >
        <div className="flex px-9 flex-wrap mt-10">
          <h1 className=" text-2xl mr-5">Shop</h1>
          <ComponentButton
            className="hover:bg-gray-200 text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
            texte={"Tous les Produits"}
            onClick={() => handleChange()}
          />
          {categories.map((categorie, index) => (
            <div className="flex" key={index}>
              <ComponentButton
                className=" focus:bg-gray-200 active:bg-gray-200 hover:bg-gray-200  text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
                texte={categorie.nom}
                onClick={() => handleChange(categorie.nom)}
              />
            </div>
          ))}
        </div>

        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid px-6 md:ps-9 md:pe-9  grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((produit) => (
                <CardProduit produit={produit} key={produit._id} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
