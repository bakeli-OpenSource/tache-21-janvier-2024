import React from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { usePanier } from "../../utils/contexte/PanierContext";
import useProduits from "../../utils/hooks/useProduits";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Produit = ({ produit }) => {
  const { addToCart } = usePanier();

  const { produits } = useProduits();
 
    const { _id, imageUrl, categorie, titre, prix, promo} = produit;  
    
    const produitCourant = produits.find(item => item._id === _id);
    const reduction = produitCourant ? produitCourant.promo : promo ? promo : 0; 
    const prixAAjouter = Math.floor( prix - (prix * (reduction / 100)));
    const handleAddToCart = () => {
		const produitAAjouter = { ...produit, prix: prixAAjouter };
		addToCart(produitAAjouter);
		toast.success('Produit ajouté au panier', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};
    
return (
  <div className='rounded shadow-lg'>
    <div className="container">    
      <div
        className="h-[350px] rounded-2xl border border-black bg-white relative shadow-xl duration-300 group max-w-full flex flex-col justify-between"
        >
          <Link
            to={`/details/${_id}`}
            className="h-[200px] max-w-full flex items-center justify-center"
          >
            <img
              src={imageUrl}
              alt="tofs"
              className="object-contain max-w-full max-h-full mx-auto drop-shadow-md"
            />
          </Link>
          {/* section details */}
          <div className="p-4 text-center">
            {/* star rating */}
            <div className="flex items-center justify-center w-full gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>

            <h1 className="mb-3 text-xl font-bold">{categorie}</h1>
            <p className="mb-2 text-sm text-gray-500 duration-300 line-clamp-2">
              {titre}
            </p>
            <div className="mt-auto mb-6">
              {reduction ? (
                <div className="absolute left-2 bottom-2 ">
                  <span className="px-3 py-1 text-sm text-red-500 rounded-full ">
                    {prixAAjouter} FCFA
                  </span>
                  &nbsp;
                  <span className="text-gray-500 line-through">
                    {prix} FCFA
                  </span>
                </div>
              ) : (
                <span className="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full">
                  {prix} FCFA
                </span>
              )}
            </div>
            {reduction !== 0 && (
              <div className="absolute top-0 px-1 mt-3 text-sm text-orange-400 rounded-md bg-amber-100 left-2 bg-dark">
                -{promo}%
              </div>
            )}
            <div className="absolute flex flex-col items-center justify-center p-2 top-1 -right-1">
              <button onClick={handleAddToCart}>
                <div className="flex items-center justify-center w-10 h-10 font-bold text-black bg-gray-200 rounded-full">
                  <BsPlus className="text-3xl" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;