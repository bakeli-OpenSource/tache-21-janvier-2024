import React from 'react'
// import CardImage from './CardImage'
import Cards from './Cards'
import { IoArrowBack } from "react-icons/io5";

const DetailsCard = () => {
  return (
    <div className='shadow-2xl w-5/6 mx-auto'>
      <a href='/' className='shadow-2xl bg-gray-700'> <IoArrowBack className=' text-2xl mx-16 mt-14 mb-12'/> </a>
    <div className=' flex container ml-14'>
      <Cards/>
      <div>
          <h3 className='text-xl m-5 italic font-bold shadow-2xl' >Nom: </h3>
          <h3 className='text-xl m-5 italic font-bold shadow-2xl' >Details produit: </h3>
          <h3 className='text-xl m-5 italic font-bold shadow-2xl' >Catégorie: </h3>
          <h3 className='text-xl m-5 italic font-bold shadow-2xl' >Caracteristiques: </h3>
          <h3 className='text-xl m-5 italic font-bold shadow-2xl' >Prix unitaire: </h3>
          <h3 className='text-xl m-5 italic font-bold shadow-2xl' >Taille: </h3>
      </div>
            
            
    </div>
  </div>
  )
}

export default DetailsCard
