import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <form className="w-full md:w-3/4 translate-x- duration-700 transition-all">
        <h1 className="text-2xl text-center">Connexion</h1>
        <div className="mt-5 mx-auto w-full md:w-1/2">
          
            <div className="mb-4 mt- w-full ">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5 mt- w-full ">
              <label
                htmlFor="password"
                className="block  text-sm font-medium text-gray-600"
              >
                Mot de pass
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
         
        </div>

        <div className="flex  justify-center items-center mt-5">
          <button
            type="submit"
            className="bg-gray-800 w-full md:w-1/2 text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            Se connecter
          </button>
        </div>
        <p className="text-center py-2">Vous n'avez pas de compte? <Link to="/inscription" className="text-blue-500 underline hover:text-blue-700">S'inscrire</Link> </p>
      </form>
  )
}

export default Form
