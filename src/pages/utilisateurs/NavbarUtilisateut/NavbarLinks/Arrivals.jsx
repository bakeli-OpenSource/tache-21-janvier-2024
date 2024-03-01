import React, { useContext, useEffect, useState } from "react";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import axios from "axios";
import useGlobal from "../../../../utils/hooks/useGlobal";
import { BsSuitHeartFill} from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Loader from "../../../../components/loader/loader";
import { usePanier } from "../../../../utils/contexte/PanierContext";


const Arrivals = () => {
  const { produits } = useContext(ProduitsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = usePanier();
  const [hoverArray, setHoverArray] = useState(null);
  const [rating, setRating] = useState(null);
  const [produitAimer, setProduitAimer] = useState(() => {
    const listesEnvies = localStorage.getItem("produitAimer");
    return listesEnvies ? JSON.parse(listesEnvies) : [];
  });
  const { setDropdown } = useGlobal()
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          "https://kay-solu-api.onrender.com/api/produits"
        );
        setFilteredProducts(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des nouveaux arrivages:",
          error
        );
      }
    };

    fetchNewArrivals();
  }, []);


  useEffect(() => {
    const sortProductsByDate = () => {
      const sortedProducts = produits.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
  
      const latestProducts = sortedProducts.slice(0, 10).reverse(); 
      setFilteredProducts(latestProducts);
    };
  
    // if (produits.length > 0) {
      sortProductsByDate();
      
    // }


    console.log(sortProductsByDate);
  }, [produits]);

  // Fonction pour changer la couleur du bouton "j'aime" au clic
  const handleLikeToggle = (id, produit) => {
    const isLiked = produitAimer.some(
      (produit) => produit && produit._id === id
    );

    if (isLiked) {
      const updaterProduits = produitAimer.filter(
        (produit) => produit && produit._id !== id
      );
      setProduitAimer(updaterProduits);
    } else {
      const updaterProduits = [...produitAimer, produit];
      setProduitAimer(updaterProduits);
    }
  }

  const handleAddToCart = () => {
    addToCart(produits);
  };

  useEffect(() => {
    localStorage.setItem("produitAimer", JSON.stringify(produitAimer));
  }, [produitAimer]);

  return (
    <div
      onClick={() => setDropdown(false)}
      className="px-9  mt-[50px] mx-auto z-0 flex flex-col  "
    >
      <div className="mt-[80px] px-9 container">
        {produits.length > 0 ? (
          <>
            <h1 className=" text-2xl">Nouveuax Arrivés</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px] max-w-sm md:max-w-none md:mx-auto pt-16 mb-7 justify-center content-center">
              {filteredProducts.map((produit) => (
                <div
                  key={produit && produit._id}
                  className="shadow-lg  rounded bg-white"
                >
                  <div className="border border-[#e4e4e4] bg-[#dedddd] h-[300px] sm:h-[200px] relative overflow-hidden group transition">
                    <div className="w-full  h-auto flex ">
                      <Link
                        to={`/details/${produit._id}`}
                        className="w-full   flex justify-center items-center"
                      >
                        <img
                          className="w-full h-auto group-hover:scale-110 transition duration-300"
                          src={produit.imageUrl}
                          alt="vetement"
                        />
                      </Link>

                      <button
                        className={`px-2 py-1 bg-red-500 text-sm ${produit.promo > 0 ? "block" : "hidden"
                          } font-normal text-white rounded absolute top-3 left-2 `}
                      >
                        -{produit.promo}%
                      </button>

                    </div>
                  </div>
                  <div className="p-2 flex flex-col justify-between">
                    <Link to={`/details/${produit._id}`}>
                      <h2 className="font-semibold text-sm mb-1">{produit.nom}</h2>
                    </Link>
                    <div className="font-semibold">
                      <span className="text-red-600  py-1 text-sm ">
                        {produit.prix} FCFA
                      </span>
                    </div>
                    
                    <div className="p- mt-2 text-">
                      {/* star rating */}
                      <div className="w-full items-center gap-1 flex justify-center"> {/* Ajoutez la classe flex justify-center */}
                        {[...Array(5)].map((start, index) => {
                          const etoils = index + 1;
                          return (
                            <label key={index}>
                              <input type="radio"
                                name={`rating-${index}`}
                                value={etoils}
                                className="hidden"
                                onClick={() => setRating(etoils)}
                              />
                              <FaStar
                                classNeme=""
                                size={20}
                                color={etoils <= (hoverArray || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHoverArray(etoils)}
                                onMouseLeave={() => setHoverArray(null)}
                              />
                            </label>
                          )
                        })}
                      </div>
                      <div className="flex gap-2 mt-4 justify-">

                        <div className="rounded  bg-gray-200 flex items-center justify-center px-2 py-1">
                          <FaShoppingCart
                            onClick={() => handleAddToCart(produit)}
                            className={`text-sm  text-gray-500 `}
                          />
                        </div>
                        <div className="rounded bg-gray-200 flex items-center justify-center px-2 py-1">
                          <BsSuitHeartFill
                            onClick={() =>
                              handleLikeToggle(produit && produit._id, produit)
                            }
                            className={`text-sm   ${produitAimer.some(
                              (likedProduit) =>
                                likedProduit && likedProduit._id === produit._id
                            )
                              ? "text-red-500 "
                              : "text-gray-500"
                              } `}
                          />
                        </div>
                        <Link to={`/details/${produit._id}`} className="rounded  bg-gray-200 flex items-center justify-center px-2 py-1">
                          <IoEyeSharp

                            className={`text-sm  text-gray-500 `}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );


};
export default Arrivals;
