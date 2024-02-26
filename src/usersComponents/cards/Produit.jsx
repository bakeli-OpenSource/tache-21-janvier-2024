
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import { usePanier } from '../../utils/contexte/PanierContext';
import useProduits from '../../utils/hooks/useProduits';

const Produit = ({ produit }) => {

    const { addToCart } = usePanier();
    const {produits} = useProduits()
    const { _id, imageUrl, categorie, titre, prix, promo} = produit;  
    const produitCourant = produits.find(item => item._id === _id);
    const reduction = produitCourant ? produitCourant.promo : promo ? promo : 0; 
    const prixAAjouter = Math.floor( prix - (prix * (reduction / 100)));
    const handleAddToCart = () => {
      const produitAAjouter = { ...produit, prix: prixAAjouter };
      addToCart(produitAAjouter);
      };


    return (
        <div className='shadow-lg rounded bg-white'>
            <div className='border border-[#e4e4e4] h-[250px] relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                  <div className='absolute text-orange-400 text-sm px-1 bg-amber-100 top-0 right-2 bg-dark'>
                   -{promo}%
                  </div>
                    <Link to={`/details/${_id}`} className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={imageUrl} alt='vetement' />
                    </Link>
                    <div className='absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center'>
                        <button onClick={handleAddToCart}>
                            <div className='flex justify-center items-center text-black font-bold w-7 h-7'>
                                <BsPlus className='text-3xl' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='p-2 flex flex-col justify-between'>
                <div className='text-sm text-gray-500 mb-1'>{categorie}</div>
                <Link to={`/details/${_id}`}>
                    <h2 className='font-semibold mb-1'>{titre}</h2>
                </Link>
                <div className='font-semibold'>
                    <div>
                      {reduction ? (
                        <div>
                          <span className='bg-red-200 rounded-full px-3 py-1 text-sm text-red-700'>Promo: {prixAAjouter} FCFA</span>
                          &nbsp;
                          <span className='line-through text-gray-500'>{prix} FCFA</span>

                        </div>
                      ) : (
                        <span className='bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700'>{prix} FCFA</span>

                      )}
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Produit;
