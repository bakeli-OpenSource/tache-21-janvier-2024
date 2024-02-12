import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsSuitHeartFill } from "react-icons/bs";
import { Tooltip } from 'react-tooltip';
import DetailsCard from './DetailsCard';

const CardImage = ({ image, heartColor, changeHeartColor }) => {
  return (
    <div className='relative group transition'>
        {/* image */}
        <div>
          <img class="w-full h-full" src={image} alt="vêtement" />
        </div>
        {/* boutons */}
        <div className='p-1 flex flex-col justify-center items-center
            gap-y-1 opacity-0 group-hover:opacity-100 transition-all group-hover:right-3'>
            <button className='absolute top-0 -right-0'>
              <div className='flex justify-center items-center text-white w-7 h-7'>
                <BsPlus className='text-3xl bg-indigo-900' data-tooltip-id="my-tooltip" data-tooltip-content="Ajouter au panier" />
                <Tooltip id="my-tooltip" style={{ backgroundColor: "skyblue" }} />
              </div>
            </button>
            <Link to={'/Details'} className='absolute bottom-2 -right-0 w-7 h-7 bg-pink-500 flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill className='text-white' data-tooltip-id="my-tooltip" data-tooltip-content="Voir details"  />
              <Tooltip id="my-tooltip" style={{ backgroundColor: "skyblue" }} />
            </Link>
        </div>
        <div className='flex justify-center items-center text-white w-6 h-6 absolute bottom-2 -left-0 pl-2'>
          <BsSuitHeartFill className='text-3xl cursor-pointer' style={{ color: heartColor }} onClick={changeHeartColor} />
        </div>
    </div>
  )
}

export default CardImage