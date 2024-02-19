import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs'

const Produit = ({ produit }) => {
  //Destructuration de Produit
  const { _id, imageUrl, categorie, titre, prix } = produit;

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <Link to={`/details/${_id}`} className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={imageUrl} alt='vetement' />
          </Link>
          {/* bouton plus */}
          <div className='absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center'>
            <button>
              <div className='flex justify-center items-center text-black font-bold w-7 h-7'>
                <BsPlus className='text-3xl' />
              </div>
            </button>

          </div>
        </div>
      </div>
      {/* categorie, titre et prix */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{categorie}</div>
        <Link to={`/produit/${_id}`}>
          <h2 className='font-semibold mb-1'>{titre}</h2>
        </Link>
        <div className='font-semibold'>{prix} FCFA</div>
      </div>
    </div>
  )
};

export default Produit;