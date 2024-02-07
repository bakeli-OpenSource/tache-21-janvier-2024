import React from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Tooltip } from 'react-tooltip';
import image6 from '../../assets/images/image6.jpg'

const Cards = () => {
  return (
    <div className='shadow-lg'>
      <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[250px] mx-auto flex justify-center items-center'>
            <img className='max-h-[230px] group-hover:scale-110 transition duration-300' src={image6} alt='image' />
          </div>
          {/* boutons */}
          <div className='p-1 flex flex-col justify-center items-center
            gap-y-1 opacity-0 group-hover:opacity-100 transition-all group-hover:right-3'>
            <button className='absolute top-2 -right-0'>
              <div className='flex justify-center items-center text-white w-7 h-7'>
                <BsPlus className='text-3xl bg-indigo-900' data-tooltip-id="my-tooltip" data-tooltip-content="Ajouter au panier" />
                <Tooltip id="my-tooltip" style={{ backgroundColor: "skyblue" }} />
              </div>
            </button>
            <Link to={'/'} className='absolute bottom-2 -right-0 w-7 h-7 bg-pink-500 flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill className='text-white' data-tooltip-id="my-tooltip" data-tooltip-content="Voir details" />
              <Tooltip id="my-tooltip" style={{ backgroundColor: "skyblue" }} />
            </Link>
          </div>
        </div>
      </div>
      {/* catégorie, titre et prix */}
      <div className='pl-4 py-3'>
        <div className='text-md capitalize text-gray-500 mb-1'>Vetement Homme</div>
        <Link to={'/'}>
          <h2 className='text-sm font-semi-bold mb-1'>Veste</h2>
        </Link>
        <div className='font-semi-bold'>17500 FCFA</div>
      </div>
    </div>
  )
}

export default Cards
