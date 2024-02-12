import React, { useState } from 'react'
import image5 from '../../assets/images/image5.jpg'
import CardImage from './CardImage';


const Cards = () => {
  const [heartColor, setHeartColor] = useState('white');

  // Fonction pour changer la couleur du bouton "j'aime" au clic
  const changeHeartColor = () => {
    setHeartColor(heartColor === 'white' ? 'red' : 'white');
  };

  return (
 
    <div class="max-w-sm rounded z-0 overflow-hidden shadow-lg">
      {/* image du Card */}
      <CardImage image={image5} heartColor={heartColor} changeHeartColor={changeHeartColor} />
      
      {/* catégorie, titre et prix */}
      <div className='pl-4 py-2'>
         <div className='text-md capitalize text-gray-500 mb-1'>Vetement Homme</div>
          <h2 className='text-sm font-semi-bold mb-1'>Veste</h2>
         <div className='font-semi-bold'>17500 FCFA</div>

      </div>
    </div>
  );
};

export default Cards;
