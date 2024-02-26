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
  <div className='rounded shadow-lg'>
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
            <h1 className="text-xl font-bold">{categorie}</h1>
            <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                {titre}
            </p>
            <div className="mt-auto">
              <span className='px-3 py-1 text-sm text-black border border-black rounded-full'>
                {prix} FCFA
              </span>
            </div>
          </div>
          {/* Bouton ajout panier */}
          <div className='absolute flex flex-col items-center justify-center p-2 top-1 -right-1'>
            <button onClick={handleAddToCart}>
              <div className='flex items-center justify-center w-10 h-10 font-bold text-black bg-gray-200 rounded-full'>
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
