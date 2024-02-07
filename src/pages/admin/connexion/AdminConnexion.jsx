import React,{useState} from 'react'
import Title from './Title'

import { useNavigate } from 'react-router-dom'                                         
import LoginButon from './LoginButon'
import { response } from 'express';
function SignUp() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  
  })
  const onChange = (e, type) => {
    setFormState({
      ...formState,
      [type]: e.target.value
    });
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/user');
    console.log(response)
    if (response.ok) {
      navigate("/check-your-email");
    } else {
      // Gérer les erreurs
    }
  };

// const AdminConnexion = () => {
//    const navigate = useNavigate();
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
    
  />
  <label
    className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Email address
  </label>
</div>


  <div className="relative z-0 w-full mb-5 group">
      <input type="password"   className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label  
      className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
 
  
 <div className='text-center'>
  <LoginButon text="submit" className="border-orange w-56 p-1 text-sm rounded-full   text-black text-center mt-4 text-xs  ring-inset  bg-white" />
  </div>
</form>
</div>

    

  )
}

export default SignUp
