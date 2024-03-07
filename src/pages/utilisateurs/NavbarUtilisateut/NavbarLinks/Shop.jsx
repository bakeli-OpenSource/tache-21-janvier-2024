import React, { useState, useContext, useEffect } from "react";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";
import CardProduit from "../../../../usersComponents/cards/CardProduit";
import Loader from "../../../../components/loader/loader";
import axiosInstance from "../../../../utils/axiosInstance";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const { categories, setCategories } = useContext(CategorieContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [produits, setProduits] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const fetchProduit = async () => {
    try {
      const response = await axiosInstance.get("/produits");
      const produitsAvecQuantiteProd = response.data.map((produit) => ({
        ...produit,
        quantiteProd: produit.quantite,
        // Supprimer la clé "quantite" de l'objet
        quantite: undefined,
      }));
      setProduits(produitsAvecQuantiteProd);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

  const afficherTousLesProduits = () => {
    setFilteredProducts(produits);
    setActiveCategory(null);
  };

  const filtrerParCategorie = (category) => {
    const filteredProduit = produits.filter((produit) =>
      produit.categorie.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filteredProduit);
    setActiveCategory(category);
  };

  const fetchFilterCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  window.onload = () => {
    afficherTousLesProduits()
  }

  useEffect(() => {
    fetchFilterCategories();
  }, []);

  useEffect(() => {
    fetchProduit();
  }, []);

  useEffect(() => {
    setFilteredProducts(produits);
  }, [produits]);

  const { setDropdown } = useGlobal();

  return (
    <>
      <div
        data-aos="zoom-in"
        onClick={() => setDropdown(false)}
        className="  mt-[50px] mx-auto z-0 flex flex-col  "
      >
        <div className="flex items-center px-3 my-10">
          <div className="flex flex-wrap">
            <ComponentButton
              className={`mt-2 ml-6 w-auto px-3 py-2  tracking-widest click-event rounded ${
                activeCategory === null
                  ? "bg-slate-800 out-click text-white"
                  : "bg-gray-200"
              }`}
              texte={" Tous les produits"}
              onClick={() => afficherTousLesProduits()}
            />

            {categories.map((categorie, index) => (
              <NavLink
                className={`mt-2 ml-6 w-auto px-3 py-2  tracking-windexest click-event rounded ${
                  activeCategory === categorie.nom
                    ? " text-white out-click"
                    : "bg-gray-200  "
                }`}
                onClick={() => filtrerParCategorie(categorie.nom)}
                key={index}
              >
                {categorie.nom}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid px-6 md:ps-9 md:pe-9  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
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
