import React from 'react'
import Client from '../../assets/images/client.jpg'

const ScrollingText = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container bg-white">
        <h2 className="text-2xl font-medium mb-4 text-center">L’Art de Faire Moins de Choix, Mais de Meilleurs Choix</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">   
          <div className="whitespace-wrap px-12 sm:px-0"  data-aos="zoom-out">
            <div className="text-black text-sm p-4">
              Opter pour la qualité plutôt que la quantité, c’est choisir des articles 
              intemporels, durables et fabriqués de manière responsable. Cette approche 
              simplifie nos vies et favorise une appréciation plus profonde de notre environnement. 
              Mettre l’accent sur la longévité et la production responsable résonne avec un mode
              de vie plus durable et plus conscient.
            </div>
          </div>
       
          <div data-aos="zoom-in" className='rounded pb-2 bg-gray-200'>
            <img
              src={Client}
              alt="public"
              className="max-w-[400px] h-[350px] w-full mx-auto object-contain"
            />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ScrollingText
