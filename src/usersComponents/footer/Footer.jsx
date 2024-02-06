import React from 'react'

const Footer = () => {
  return (
      <div className='container flex justify-between mt-96'>
        <div className=' flex mx-5 gap-x-8'>
            <div>
                <h4 className='text-base font-bold italic my-6'>CONTACT US</h4>
                <div>+221 77 982 54 32</div>
                <div>kaysolu@gmail.com</div>
                <div>Dakar-bakeli</div>
            </div>
            <div>
                <h4 className='text-base font-bold italic my-6'>CUSTOMERS</h4>
                <p>Start a Return</p>
                <p>Return Policy</p>
                <p>FAQ</p>
                <p>Catalogs and Mailers</p>
                <p>About Group Gifting</p>
            </div>
            <div>
                <h4 className='text-base font-bold italic my-6'>COMPANY</h4>
                <p>About Us</p>
                <p>Sustainability</p>
                <p>Discover Revive</p>
                <p>Careers</p>
                <p>Privacy Policy</p>
                <p>Terms</p>
            </div>
        </div>
        <div className=''>
            <h3 className='text-lg'>Get the latest new from us</h3>
            <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
            <p>By signing up, you agree to our Privavy Police and Terms of Services</p>
            <button className='bg-black text-white'>Sign Up</button>
        </div>
      </div>
  )
}

export default Footer
