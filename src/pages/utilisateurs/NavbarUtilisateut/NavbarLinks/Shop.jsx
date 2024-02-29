import React, { useState, useContext, useEffect } from "react";
import { BsSuitHeartFill, BsPlus } from "react-icons/bs";
import axios from "axios";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";

import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";


const Shop = () => {

  const [heartColors, setHeartColors] = useState(Array(10).fill('inherit'));
  const { produits, _id } = useContext(ProduitsContext);
  const { categories, setCategories } = useContext(CategorieContext); // Accédez au contexte des catégories
  const [filteredProducts, setFilteredProducts] = useState([]);



  const handleClick = () => {
    // Afficher tous les produits si aucune catégorie sélectionnée
    setFilteredProducts(produits);
  }

  // // Logique de filtrage des produits
  const handleChange = (selectedCategorie) => {


    const updatedProducts = produits.filter((produit) => produit.categorie === selectedCategorie);
    setFilteredProducts(updatedProducts);
    console.log(filteredProducts)

  }

  const fetchFilterCategories = async () => {
    try {
      const response = await axios.get("https://kay-solu-api.onrender.com/api/categories");
      setCategories(response.data);
      console.log("Catégories récupérées avec succès");
      setFilteredProducts(produits)
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }


  };

  useEffect(() => {

    fetchFilterCategories();


  }, []);



  const { setDropdown } = useGlobal()

  // Fonction pour changer la couleur du bouton "j'aime" au clic
  const changeHeartColor = (index) => {
    const newHeartColors = [...heartColors];
    newHeartColors[index] = newHeartColors[index] === 'inehrit' ? 'red' : 'inherit';
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
          <ComponentButton
            className="hover:bg-gray-200 text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
            texte={"Tous les Produits"}
            onClick={() => handleClick()}
          />
          {categories.map((categorie, index) => (
            <div className="flex" key={index}>
              <ComponentButton
                className=" hover:bg-gray-200 active:bg-gray-200 text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
                texte={categorie.nom}
                onClick={() => handleChange(categorie.nom)}
              />

            </div>
          ))}
        </div>




        <div className='shadow-lg rounded'>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[20px] mt-8">
            {filteredProducts.map((produit, index) => (
              <div key={index}
                data-aos="zoom-in"
                className="h-[350px] rounded-2xl border border-black bg-white relative shadow-xl duration-300 
        group max-w-full flex flex-col justify-between"
              >
                {/* section image */}

                <Link to={`/details/${_id}`} className="h-[200px] max-w-full flex items-center justify-center">
                  <img
                    src={produit.imageUrl}
                    alt="tofs"
                    className="max-h-full max-w-full mx-auto drop-shadow-md object-contain"
                  />
                </Link>
                {/* section details */}
                <div className="p-4 text-center">
                  {/* star rating */}
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{produit.categorie}</h1>
                  <p className="text-gray-500 group-hover:text-white mb-2 duration-300 text-sm line-clamp-2">
                    {produit.titre}
                  </p>
                  <div className="mt-auto">

                    <span className='border border-black rounded-full px-3 py-1 text-sm text-black'>
                      {produit.prix} FCFA
                    </span>
                  </div>
                </div>
                {/* Bouton ajout panier */}
                <div className='absolute top-1 -right-1 p-2 flex flex-col justify-center items-center'>

                  <div className='flex justify-center items-center text-black font-bold bg-gray-200 rounded-full w-10 h-10'>
                    <BsPlus className='text-3xl' />
                  </div>

                </div>


                {/* 
                <button className="absolute top-3 right-2 ">
                  <div className="flex items-center justify-center text-black w-7 h-7">
                    <BsSuitHeartFill className='text-3xl cursor-pointer' style={{ color: heartColors[index] }} onClick={() => changeHeartColor(index)} />
                  </div>
                </button>
               
         */}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Shop;