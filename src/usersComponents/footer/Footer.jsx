import React from 'react'
import Paragraphe from './Paragraphe'
const Footer = () => {
    const contact = ['+221 77 982 54 32', 'kaysolu@gmail.com', 'Dakar-bakeli']
    const customers = ['Start a Return', 'Return Policy', 'FAQ', 'Catalogs and Mailers', 'About Group Gifting']
    const company = ['About Us', 'Sustainability', 'Discover Revive', 'Careers', 'Privacy Policy', 'Terms']
  return (
      <div className=' flex justify-between mt-96 mx-10'>
        <div className=' flex mx-5 gap-x-16'>
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
            <input placeholder='Enter your email adress' className=" text-xl placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
            <p className='text-lg my-5 tracking-wider'>By signing up, you agree to our Privavy Police and Terms of Services</p>
            <button className='bg-black text-white w-24 h-12 my-5'>Subscribe</button>
        </div>
      </div>
  )
}

export default Footer
