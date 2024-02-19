import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import image3 from '../../assets/images/image3.jpg'

const CardWsap = () => {
    const phoneNumber = +221774095558;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Bonjour!`;

  return (
    <div className='relative group transition'>
        
        <div>
          <img className="w-full h-full rounded-lg" src={image3} alt="vêtement" />
        </div>
        
        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 
            opacity-0 group-hover:opacity-100 transition-opacity'>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className='flex justify-center items-center text-white w-7 h-7 rounded-full'>
                <BsWhatsapp className='text-3xl' />
              </button>
            </a>
        </div>
    </div>
  )
}

export default CardWsap
