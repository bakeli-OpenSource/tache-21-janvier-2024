import React from 'react'
import Cards from '../../usersComponents/cards/Cards'
import Footer from '../../usersComponents/footer/Footer'
import { Link } from 'react-router-dom'; 
import { ShoppingCartIcon } from '@heroicons/react/outline';


export default function Accueil() {
  
  return (
    <div>

    
    <div className='container flex flex-col items-center justify-center mx-auto'>
        <Link to="/Panier" className="flex items-center">
          <span className="mr-2">
            <ShoppingCartIcon className="w-6 h-6" />
          </span>
          <span className="text-sm font-semibold">Aller au panier</span>
        </Link>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mx-auto gap-[20px]
          max-w-sm mx-auto md:max-w-none md:mx-auto py-16 justify-center content-center'>
          <div className='w-full mb-4'>
            <Cards />
          </div>
          <div className='w-full mb-4'>
            <Cards />
          </div>
          <div className='w-full  mb-4'>
            <Cards />
          </div>
          <div className='w-full  mb-4'>
            <Cards />
          </div>
          <div className='w-full mb-4'>
            <Cards />
          </div>
          <div className='w-full mb-4'>
            <Cards />
          </div>
          <div className='w-full mb-4'>
            <Cards />
          </div>
        </div>

      
   

    </div>
     <footer>
     <Footer/>
 </footer>
 </div>
  )
}
