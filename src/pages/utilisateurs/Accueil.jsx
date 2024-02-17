import React from 'react'
import Cards from '../../usersComponents/cards/Cards'
import Footer from '../../usersComponents/footer/Footer'
import CardBas from '../../usersComponents/cards/CardBas'
import Navbar from './NavbarUtilisateut/Navbar/Navbar'
import Header from '../../usersComponents/headerUserComponent/Header'
import CardWsap from '../../usersComponents/cards/CardWsap'
import ScrollingText from '../../usersComponents/cards/ScrollingText'


export default function Accueil() {
  return (
    <div>
      <Navbar className="bg-white z-50 fixed top-0 w-full"/>
      <Header />
      
    <div className=' flex flex-col'>
      <hr />
      <div className='text-md capitalize text-gray-500 mb-2 mt-7'>
        <p>Elevate your lifestyle with a more intelligent, superior wardrobe</p>
        <p>Our range is crafted sustainably with longevity in mind</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] justify-around items-center'>
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
      <hr />
      <div className='text-md capitalize text-gray-500 mt-4'>
        <p>What to Wear Now</p>
      </div>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px]
          max-w-sm mx-auto md:max-w-none md:mx-auto py-16 justify-center content-center'>
          <div className='w-full mb-4'>

            <Cards />
          </div>
          <div className="w-full mb-4">
            <Cards />
          </div>

          <div className='w-full mb-4'>
            <Cards />
          </div>
          <div className="w-full mb-4">
            <Cards />
          </div>
          <div className="w-full mb-4">
            <Cards />
          </div>
        </div>
        <hr />
        <div>
          <ScrollingText />
        </div>
        <hr />
      <div>
        <h3 className='text-center mt-5'>Shop Instagram</h3>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px]
          max-w-sm mx-auto md:max-w-none md:mx-auto py-8 justify-center content-center'>
          <div className='w-full mb-3'>
            <CardBas />
          </div>
          <div className='w-full mb-3'>
            <CardBas />
          </div>
          <div className='w-full mb-3'>
            <CardBas />
          </div>
          <div className='w-full mb-3'>
            <CardBas />
          </div>
          <div className='w-full mb-3'>
            <CardBas />
          </div>
        </div>
      </div>
      <hr />

      <div>
        <h3 className='text-center mt-5'>Shop WhatsApp</h3>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px]
          max-w-sm mx-auto md:max-w-none md:mx-auto py-8 justify-center content-center'>
          <div className='w-full mb-3'>
            <CardWsap />
          </div>
          <div className='w-full mb-3'>
            <CardWsap />
          </div>
          <div className='w-full mb-3'>
            <CardWsap />
          </div>
          <div className='w-full mb-3'>
            <CardWsap />
          </div>
          <div className='w-full mb-3'>
            <CardWsap />
          </div>
        </div>
      </div>
      <hr />

      <div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>

    </div>
  );
}