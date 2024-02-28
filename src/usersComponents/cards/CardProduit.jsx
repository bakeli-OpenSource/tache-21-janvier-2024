import React, { useState, useEffect, useContext } from "react";
import { BsSuitHeartFill, BsPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProduitsContext } from "../../utils/contexte/ProduitsContext";
import { usePanier } from "../../utils/contexte/PanierContext";

const CardProduit = () => {
  const { produits } = useContext(ProduitsContext);
  const { addToCart } = usePanier();
  const [produitAimer, setProduitAimer] = useState(() => {
    const listesEnvies = localStorage.getItem("produitAimer");
    return listesEnvies ? JSON.parse(listesEnvies) : [];
  });

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
  };

  const handleAddToCart = () => {
    addToCart(produits);
  };

  useEffect(() => {
    localStorage.setItem("produitAimer", JSON.stringify(produitAimer));
  }, [produitAimer]);

  return (
    <div className="grid px-3 md:px-9  grid-cols-1 mt-[80px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
      {produits.map((produit) => (
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
              <BsSuitHeartFill
                onClick={() =>
                  handleLikeToggle(produit && produit._id, produit)
                }
                className={`text-2xl absolute top-3 right-2  ${
                  produitAimer.some(
                    (likedProduit) =>
                      likedProduit && likedProduit._id === produit._id
                  )
                    ? "text-red-500 "
                    : "text-white"
                } `}
              />

              <button
                className={`px-2 py-1 bg-red-500 text-sm ${
                  produit.promo > 0 ? "block" : "hidden"
                } font-normal text-white rounded absolute top-3 left-2 `}
              >
                -{produit.promo}%
              </button>
              <div className="absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center">
                <button onClick={handleAddToCart}>
                  <div className="flex justify-center items-center text-black font-bold w-7 h-7">
                    <BsPlus className="text-3xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 flex flex-col justify-between">
            <Link to={`/details/${produit._id}`}>
              <h2 className="font-semibold mb-1">{produit.nom}</h2>
            </Link>
            <div className="font-semibold">
              <span className="text-red-600  py-1 text-sm ">
                {produit.prix} FCFA
              </span>
            </div>
            <div className="p- mt-2 text-">
              {/* star rating */}
              <div className="w-full flex items-center justify- gap-1">
                <FaStar className="text-yellow-500 cursor-pointer" />
                <FaStar className="text-yellow-500 cursor-pointer" />
                <FaStar className="text-gray-300 cursor-pointer" />
                <FaStar className="text-gray-300 cursor-pointer" />
                <FaStar className="text-gray-300 cursor-pointer" />{" "}
                <span className="text-gray-400">(65)</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduit;
