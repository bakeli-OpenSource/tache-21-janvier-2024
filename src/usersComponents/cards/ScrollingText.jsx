import React from 'react'

const ScrollingText = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-3/4 bg-gray-100 p-6 rounded-lg" data-aos="zoom-in">
        <h2 className="text-2xl font-bold mb-4 text-center">L’Art de Faire Moins de Choix, Mais de Meilleurs Choix</h2>
        <div className="whitespace-wrap">
          <div className="text-black">
            Opter pour la qualité plutôt que la quantité, c’est choisir des articles 
            intemporels, durables et fabriqués de manière responsable. Cette approche 
            simplifie nos vies et favorise une appréciation plus profonde de notre environnement. 
            Mettre l’accent sur la longévité et la production responsable résonne avec un mode
             de vie plus durable et plus conscient.
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ScrollingText
