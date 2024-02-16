import React from 'react';
import { BsInstagram } from "react-icons/bs";
import image6 from '../../assets/images/image6.jpg'

const CardBas = () => {
  return (
    <div className='relative group transition'>
        
        <div>
          <img className="w-full h-full rounded-lg" src={image6} alt="vêtement" />
        </div>
        
        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 
            opacity-0 group-hover:opacity-100 transition-opacity'>
            <a href="https://www.instagram.com/direct/t/104457564393183" target="_blank" rel="noopener noreferrer">
              <button className='flex justify-center items-center text-white w-7 h-7 rounded-full'>
                <BsInstagram className='text-3xl' />
              </button>
            </a>
        </div>
    </div>
  )
}

export default CardBas
