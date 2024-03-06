import React, { useState, useContext, useEffect } from "react";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";
import CardProduit from "../../../../usersComponents/cards/CardProduit";
import Loader from "../../../../components/loader/loader";
import axiosInstance from "../../../../utils/axiosInstance";

const Shop = () => {
  const { produits } = useContext(ProduitsContext);
  const { categories, setCategories } = useContext(CategorieContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categorieSelect, setCategorieSelect] = useState([]);
  const [categorieId, setCategorieId] = useState("");
  const [listeProduitsCategories, setListeProduitsCategories] = useState([]);

  const fetchProduitsCategorie = async (idCategory) => {
    try {
      const response = await axiosInstance.get(
        `/produits/categorie/${idCategory}`
      );
      setListeProduitsCategories(response.data);
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

  const afficherTousLesProduits = () => {
    setFilteredProducts(produits);
  };

  const filtrerParCategorie = (category) => {
    const filteredProduit = produits.filter((produit) =>
      produit.categorie.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filteredProduit);
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

  return (
    <>
      <div
        data-aos="zoom-in"
        onClick={() => setDropdown(false)}
        className="  mt-[50px] mx-auto z-0 flex flex-col  "
      >
        <div className="flex px-9 mt-10">
          <h1 className=" text-2xl mr-5">Shop</h1>
          <div className="flex flex-wrap">
            <ComponentButton
              className="bg-gray-200 focus:bg-blue-950 active:bg-blue-950 hover:bg-blue-950 
              text-black hover:text-white focus:text-white active:text-white mt-2 ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
              texte={" Tous les produits"}
              onClick={() => afficherTousLesProduits()}
            />

            {categories.map((categorie, index) => (
              <ComponentButton
                className=" bg-gray-200 focus:bg-blue-950 active:bg-blue-950 hover:bg-blue-950 
                 text-black hover:text-white focus:text-white active:text-white mt-2 ml-6 w-auto px-3 py-2 text-md tracking-windexest rounded
                 "
                onClick={() => filtrerParCategorie(categorie.nom)}
                key={index}
                texte={categorie.nom}
              />
            ))}
          </div>
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
