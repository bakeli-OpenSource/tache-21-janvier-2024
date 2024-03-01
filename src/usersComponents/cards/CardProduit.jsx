import React, { useState, useEffect, useContext } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProduitsContext } from "../../utils/contexte/ProduitsContext";
import { usePanier } from "../../utils/contexte/PanierContext";
import useGlobal from "../../utils/hooks/useGlobal";
import { IoEyeSharp } from "react-icons/io5";

const CardProduit = ({ produit }) => {
  const { produits } = useContext(ProduitsContext);
  const { addToCart } = usePanier();
  const { produitAimer, handleLikeToggle } = useGlobal();
  const [hoverArray, setHoverArray] = useState(null);
  const [rating, setRating] = useState(null);
  const { _id, imageUrl, prix, promo, nom } = produit;

  const produitCourant = produits.find((item) => item._id === _id);
  const reduction = produitCourant ? produitCourant.promo : promo ? promo : 0;
  const prixAAjouter = Math.floor(prix - prix * (reduction / 100));
  const handleAddToCart = () => {
    const produitAAjouter = { ...produit, prix: prixAAjouter };
    addToCart(produitAAjouter);
  };

  useEffect(() => {
    localStorage.setItem("produitAimer", JSON.stringify(produitAimer));
  }, [produitAimer]);

  return (
    <>
      <div key={produit && _id} className="shadow-lg  rounded bg-white">
        <div className=" bg-white h-[300px] sm:h-[200px] relative overflow-hidden  transition">
          <div className="   flex ">
            <Link
              to={`/details/${_id}`}
              className="w-full  flex justify-center items-center"
            >
              <img
                className="w-full h- object-contain group-hover:scale-110 transition duration-300"
                src={imageUrl}
                alt={produit.categorie}
              />
            </Link>
            {reduction !== 0 && (
              <div className="absolute text-orange-400 rounded-full  mt-3 text-sm px-1 bg-amber-100 top-0 left-2 bg-dark">
                -{promo}%
              </div>
            )}
          </div>
        </div>
        <div className="p-2 flex flex-col justify-between">
          <Link to={`/details/${_id}`}>
            <h2 className="font-semibold text-xl md:text-sm mb-1">{nom}</h2>
          </Link>
          {reduction ? (
            <div className="flex items-end justify-between md:justify-start ">
              <span className="py-1 text-xl md:text-[16px] text-red-600">
                {prixAAjouter} FCFA
              </span>
              &nbsp;
              <span className="line-through text-lg md:text-[10px] text-gray-500">
                {prix} FCFA
              </span>
            </div>
          ) : (
            <span className=" py-1 font-medium text-sm text-gray-900">
              {prix} FCFA
            </span>
          )}
          <div className="p- mt-2 text-">
            {/* star rating */}
            <div className="w-full flex items-center justify- gap-1">
              {[...Array(5)].map((start, index) => {
                const etoils = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      value={etoils}
                      className="hidden"
                      onClick={() => setRating(etoils)}
                    />
                    <FaStar
                      classNeme=""
                      size={20}
                      color={
                        etoils <= (hoverArray || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHoverArray(etoils)}
                      onMouseLeave={() => setHoverArray(null)}
                    />
                  </label>
                );
              })}
            </div>
            <div className="flex gap-4 md:gap-2 mt-4 mb- md:mb-0 justify-">
              <div className="rounded  bg-gray-200 flex items-center justify-center px-2 py-1">
                <FaShoppingCart
                  onClick={() => handleAddToCart(produit)}
                  className={`text-lg md:text-sm  text-gray-500 `}
                />
              </div>
              <div className="rounded bg-gray-200 flex items-center justify-center px-2 py-1">
                <BsSuitHeartFill
                  onClick={() => handleLikeToggle(produit && _id, produit)}
                  className={`text-lg md:text-sm   ${
                    produitAimer.some(
                      (likedProduit) => likedProduit && likedProduit._id === _id
                    )
                      ? "text-red-500 "
                      : "text-gray-500"
                  } `}
                />
              </div>
              <Link
                to={`/details/${_id}`}
                className="rounded  bg-gray-200 flex items-center justify-center px-2 py-1"
              >
                <IoEyeSharp className={`text-lg md:text-sm  text-gray-500 `} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduit;
