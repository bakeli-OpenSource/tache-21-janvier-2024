import React from 'react'
import Paragraphe from './Paragraphe'
import ComponentButton from '../button/ComponentButton'
const Footer = () => {
    const contact = ['+221 77 982 54 32', 'kaysolu@gmail.com', 'Dakar-bakeli']
    const customers = ['Start a Return', 'Return Policy', 'FAQ', 'Catalogs and Mailers', 'About Group Gifting']
    const company = ['About Us', 'Sustainability', 'Discover Revive', 'Careers', 'Privacy Policy', 'Terms']
  return (
 
      <div className=' flex justify-between mt-10 mx-10 mb-10'>
        <div className=' flex mx-5 gap-x-14'>
            <div>
                <h4 className='text-sm font-bold italic tracking-widest opacity-65 my-6'>CONTACT US</h4>
                <Paragraphe items={contact}/>
            </div>
            <div>
                <h4 className='text-sm font-bold italic tracking-widest opacity-65 my-6'>CUSTOMERS</h4>
                <Paragraphe items={customers}/>

            </div>
            <div>
                <h4 className='text-sm font-bold italic tracking-widest opacity-65 my-6'>COMPANY</h4>
                <Paragraphe items={company}/>

            </div>
        </div>
        <div className=''>
            <h3 className='text-xl font-bold italic tracking-widest opacity-85 my-6'>Get the latest new from us</h3>
            <input placeholder='Enter your email adress' className="w-full border-0 outline-none text-xl "/>
            <p className='text-lg my-5 tracking-wider'>By signing up, you agree to our Privavy Police and Terms of Services</p>
            <ComponentButton className='bg-black text-white w-40 h-12 my-5 text-xl tracking-widest rounded-lg' texte='Suscribe'/>
        </div>
      </div>
  )
}

export default Footer
