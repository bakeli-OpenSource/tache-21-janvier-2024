import React, { useState } from 'react'
import Input from './Input'
import LoginButon from './LoginButon'
import Title from './Title'
import Label from './Label'
import IsLogin from '../IsLogin'
import { useNavigate } from 'react-router-dom'


const AdminConnexion = () => {
  const [inputValue, setInputValue] = useState('');
  const [valuePasse, setValuePasse] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handlePasse = (e) => {
    setValuePasse(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };




  return (


    <div className="w-full h-screen flex justify-center pt-12 pb-12 ">

        <form onSubmit={handleSubmit} class="bg-gray-800  w-screen w-[100%] w-1/2 min-w-80 max-w-24  h-[80%] hover:shadow-black shadow-md mx-auto mt-3 rounded px-8 pt-6 pb-8 mb-4 ">

  
            <Title className='text-2x1 font-semibold mb-4 text-center text-white' children='Page Connexion'/>
            <div className="relative">
            <Label
                htmlFor="input"
                children='Email'
                className={`absolute top-0 left-0 text-white transition-all transition ease-in-out ${
                    inputValue ? 'text-sm' : 'text-base'
                } ${
                    inputValue ? 'text-gray-900' : 'text-gray-900'
                }` }
                />
                
            
              <Input
                  id="input"
                  type="email"
                  name='email'
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-full text-white text-xs border-b-2 mt-4 px-0 mb-4 border-white outline-none bg-transparent focus:outline-none "
              />
              </div>

              <div className="relative">
            <Label
                htmlFor="input"
                children='Mot de passe'
                className={`absolute top-0 left-0 text-white transition-all transition ease-in-out   ${
                    valuePasse ? 'text-sm' : 'text-base'
                } ${
                    valuePasse ? 'text-gray-700' : 'text-gray-900'
                }` }
                />
                
            
              <Input
                  id="input"
                  type="password"
                  name='password'
                  value={valuePasse}
                  onChange={handlePasse}
                  className="w-full text-white text-sm border-b-2 mt-3 px-0 mb-4 border-white outline-none bg-transparent focus:outline-none "
              />
              </div>

      
          <div className='flex justify-between'>
            <div className='flex'>
          <Input type='checkbox' 
          className="w-4 h-4 mt-1 text-blue-600 bg-gray-100  border-gray-300 rounded mb-8 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <Title children='Remember me ' 
          className='px-1 text-xs text-white mt-1'/>
          </div>
          <Title className='text-xs mt-1 text-white' 
          children='mot de passe oublié'/>
          </div>
          <div className='flex justify-center'>
          
          <LoginButon className="border-orange w-56 p-1 text-sm rounded-full   text-black text-center mt-4 text-xs  ring-inset  bg-white  "/>
          </div>
          
        </form>
    </div>
  )
}

export default AdminConnexion
