import React from 'react'
import Cards from '../../usersComponents/cards/Cards'
import Footer from '../../usersComponents/footer/Footer'
import NavHeader from './NavbarUtilisateut/Navbar'



export default function Accueil() {
  
  return (
    <div>

<NavHeader/>
    <div className='container flex flex-col items-center justify-center mx-auto'>
        
        
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
