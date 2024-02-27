import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import { FaStar } from "react-icons/fa";
import { usePanier } from '../../utils/contexte/PanierContext';

const Produit = ({ produit }) => {
	const { addToCart } = usePanier();
	const { _id, imageUrl, categorie, titre, prix } = produit;
	
	const handleAddToCart = () => {
		addToCart(produit); 
	};

return (
  <div className='shadow-lg rounded'>
    <div className="container">    
      <div
        data-aos="zoom-in"
        className="h-[350px] rounded-2xl border border-black bg-white relative shadow-xl duration-300 
        group max-w-full flex flex-col justify-between"
        >
          {/* section image */}
          <Link to={`/details/${_id}`} className="h-[200px] max-w-full flex items-center justify-center">
            <img
              src={imageUrl}
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
            <h1 className="text-xl font-bold">{categorie}</h1>
            <p className="text-gray-500 group-hover:text-white mb-2 duration-300 text-sm line-clamp-2">
                {titre}
            </p>
            <div className="mt-auto">
              <span className='border border-black rounded-full px-3 py-1 text-sm text-black'>
                {prix} FCFA
              </span>
            </div>
          </div>
          {/* Bouton ajout panier */}
          <div className='absolute top-1 -right-1 p-2 flex flex-col justify-center items-center'>
            <button onClick={handleAddToCart}>
              <div className='flex justify-center items-center text-black font-bold bg-gray-200 rounded-full w-10 h-10'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
          </div>
      </div>          
    </div>
  </div>
	);
};

export default Produit;