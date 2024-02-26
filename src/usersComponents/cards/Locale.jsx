import React from 'react'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import women from '../../assets/images/women.png'

const Locale = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-7 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in" className='bg-slate-800 rounded pb-3'>
            <img
              src={women}
              alt="public"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h3 data-aos="fade-up" className="text-2xl">
              Trouvez Ce Que Vous Aimez, Livré À Votre Porte
            </h3>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
               Profitez de la commodité de commander depuis chez vous et laissez-nous vous livrer le meilleur, directement à votre porte. 
               Avec notre engagement envers la satisfaction client et la qualité, votre expérience de magasinage en ligne n'a jamais été aussi agréable.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Produits De Qualité</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100" />
                <p>Livraison Rapide</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100" />
                <p>Mode De Paiement Facile</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100" />
                <p>Recevoir Des Offres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locale
