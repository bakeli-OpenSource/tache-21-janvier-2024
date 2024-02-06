import React from 'react'

// import Input from './Input'
// import LoginButon from './LoginButon'
 import Title from './Title'
 import Label from './Label'
 import IsLogin from '../IsLogin'
 import { useNavigate } from 'react-router-dom'



const AdminConnexion = () => {
 
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };




  return (

    
     <div className="w-full h-screen flex justify-center items-center ">



<form className="max-w-md mx-auto bg-gray-800 w-full px-8 pt-6 pb-8 mb-4 shadow-md rounded-md" onSubmit={handleSubmit}>
  <Title 
  className='text-white text-center mb-5'
  children='Page connexion'/>
  <div className="relative z-0 w-full mb-5 group">
  <input
    type="email"
    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent mb-4 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    required
  />
  <label
    className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Email address
  </label>
</div>


  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password"  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  
      className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
 
  
 <div className='text-center'>
  <button type="submit" className="border-orange w-56 p-1 text-sm rounded-full   text-black text-center mt-4 text-xs  ring-inset  bg-white">Connexion</button>
  </div>
</form>
</div>

    

  )
}

export default AdminConnexion
