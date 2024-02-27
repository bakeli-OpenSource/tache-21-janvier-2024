import React, { useState, useContext, useEffect } from "react";
import { BsSuitHeartFill, BsPlus } from "react-icons/bs";
import axios from "axios";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";
import { Link } from 'react-router-dom';


const Shop = () => {

  const [heartColors, setHeartColors] = useState(Array(10).fill('black'));
  const { produits, _id } = useContext(ProduitsContext);
  const { categories, setCategories } = useContext(CategorieContext); // Accédez au contexte des catégories
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchFilterCategories = async () => {
      try {
        const response = await axios.get("https://kay-solu-api.onrender.com/api/categories");
        setCategories(response.data);
        console.log("Catégories récupérées avec succès");
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    };
    fetchFilterCategories();

    setFilteredProducts(produits);
  }, [produits]);

  const handleChange = (selectedCategorie) => {
    let updatedProducts = produits;

    if (selectedCategorie !== "Tous") {
      updatedProducts = produits.filter((produit) => produit.categorie === selectedCategorie);
    }

    setFilteredProducts(updatedProducts);
  }
  const { setDropdown } = useGlobal()

   // Fonction pour changer la couleur du bouton "j'aime" au clic
   const changeHeartColor = (index) => {
    const newHeartColors = [...heartColors];
    newHeartColors[index] = newHeartColors[index] === 'black' ? 'red' : 'black';
    setHeartColors(newHeartColors);
};
  return (
    <>
      <div
        onClick={() => setDropdown(false)}
        className="px-9  mt-[50px] mx-auto z-0 flex flex-col  "
      >
        <div className="flex mt-10">
          <h1 className=" text-2xl mr-5">Shop</h1>
          {categories.map((categorie, index) => (
            <div className="flex" key={index}>
              <ComponentButton
                className="bg-gray-200 text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
                texte={categorie.nom}
                onClick={() => handleChange(categorie.nom)}
              />
            </div>
          ))}
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px] max-w-sm md:max-w-none md:mx-auto pt-16 mb-7 justify-center content-center">
          {filteredProducts.map((produit, index) => (
            <div
              key={index}
              className="items-center justify-center w-full h-full static border"
            >
              <div className="relative">
                <img
                  className="h-[17rem] w-[50rem]"
                  src={produit.imageUrl}
                  alt={produit.nom}
                />
                <button className="absolute top-3 right-2 ">
                  <div className="flex items-center justify-center text-black w-7 h-7">
                    <BsSuitHeartFill className='text-3xl cursor-pointer' style={{ color: heartColors[index] }} onClick={() => changeHeartColor(index)} />
                  </div>
                </button>
                <div className='absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center'>

                  <div className='flex justify-center items-center text-black font-bold w-7 h-7'>
                    <BsPlus className='text-3xl' />
                  </div>
                </div>
                <div className='absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center'>

                  <div className='flex justify-center items-center text-black font-bold w-7 h-7'>
                    <BsPlus className='text-3xl' />
                  </div>

                </div>
              </div>
              <div className="p-3">
                <div className="mb-1 text-gray-500 capitalize text-md">
                  {produit.categorie}
                </div>
                <div className="mb-1 text-gray-500 capitalize text-md">
                  {produit.nom}
                </div>
                <div className="font-semi-bold">{produit.prix} FCFA</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
