import React from 'react'
import Paragraphe from './Paragraphe'
import ComponentButton from '../button/ComponentButton'
const Footer = () => {
    const contact = ['+221 77 982 54 32', 'kaysolu@gmail.com', 'Dakar-bakeli']
    const customers = ['Démarrer un retour', 'Politique de retour', 'FAQ', 'Catalogues et courriers', 'À propos des cadeaux de groupe']
    const company = ['A propos de nous', 'Durabilité', 'Carriére', 'Politique de confidentialité', 'Termes']
  return (
      <div className='flex justify-around mt-5 mx-2 flex-wrap w-full bg-gray-200'>
        <div className=' flex  gap-x-10 flex-wrap  '>

            <div>
                <h4 className='text-sm font-bold italic tracking-widest opacity-65 my-6'>CONTACTEZ-NOUS</h4>
                <Paragraphe items={contact}/>
            </div>
            <div>
                <h4 className='text-sm font-bold italic tracking-widest opacity-65 my-6'>CLIENTS</h4>
                <Paragraphe items={customers}/>

            </div>
            <div>
                <h4 className='text-sm font-bold italic tracking-widest opacity-65 my-6'>ENTRPRISE</h4>
                <Paragraphe items={company}/>

            </div>
        </div>
        <div className=''>
            <h3 className='text-xl font-bold italic tracking-widest opacity-85 my-6'>Recevez les dernières nouveautés de notre part</h3>
            <input placeholder='Enter your email adress' className="w-full border-0 outline-none text-xl "/>
            <p className='text-sm py-1 font-semibold'>En vous inscrivant, vous acceptez notre politique privée et nos conditions d'utilisation.</p>
            <ComponentButton className='bg-black text-white w-auto px-3 py-2 my-5 text-xl tracking-widest rounded' texte='Abonnez-vous'/>
        </div>
      </div>
  )
}

export default Footer
