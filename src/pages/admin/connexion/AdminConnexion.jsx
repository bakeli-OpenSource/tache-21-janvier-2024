
import React,{useState} from 'react'
import Title from './Title'
// import Input from './Input'

import { useNavigate } from 'react-router-dom'                                         
import LoginButon from './LoginButon'
// import { response } from 'express';
// function SignUp() {
//   const navigate = useNavigate();
const AdminConnexion = () => {
    
 
    
  

  return (

     <div className='flex flex-col items-center  justify-center min-h-screen py-2 bg-gray-100'>
        <main className='flex flex-col items-center justify-center flex-row-reverse w-full  px-20 text-center'>
        <div className='min-w-96 bg-white rounded-2xl shadow-2xl flex flex-col-reverse md:flex-row w-2/3 max-w-4xl'>
            <div className='md:w-3/5 py-5'>
              <div className='text-left font-bold'>
                <span className='text-green-500'>Kaay</span>Soolu
              </div>
              <div className='py-10'>
                <h2 className='text-2xl font-bold text-green-500 md:text-center'>Connectez-vous au compte</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex flex-col items-center mt-4'>
                <div className='bg-gray-100 w-64 p-1 flex items-center justify-center md:text-center sm:text-center'>
                <FaEnvelope className='text-gray-400  m-2 '/>
                  <input type='text' 
                  value=''
                  onChange=''
                  name='email' placeholder='Email' 
                  className='bg-gray-100 outline-none text-sm flex-1' 
                  required='@' />
                </div>
                </div>
                <div className='flex flex-col items-center mt-5'>
                <div className='bg-gray-100 w-64 p-2 flex items-center '>
                <FaLock className='text-gray-400 m-2'/>
                  <input type='password'
                  value=''
                  onChange='' 
                  name='email'
                  placeholder='Email' 
                  className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                </div>
              <div className=" items-center text-center text-xs mt-3">
              <label htmlFor="default-checkbox" className="text-center "> Mot de passe oublié ?</label>
              </div>
                 <div className='mt-4'>
              <button type="button" className="text-white bg-green-500  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Connexion</button>
              </div>
              </div>
              </div>
            <div className='md:w-2/5 min-w-65 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-[129px] px-5  '>
              <h2 className='text-1xl font-bold mb-2'>Bonjour, tout le monde</h2>
              <div className='border-2 w-10 border-white inline-block mb-2'></div>
              <p className='mb-2'>Remplissez vos informations personnelles et connecter sur votre appli</p>
              <button type="button" className="text-black bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 outline-none border-none">Sign Up</button>

            </div>
          </div>
          </main>    
    </div> 

    

  )
}

export default AdminConnexion

// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

//  const userSchema = mongoose.Schema({
//      nom: {type: String, required: true,},
//      prenom: {type: String, required: true, },
//      telephone: {type: Number, required: true, },
//      email: {type: String, required: true, unique: true},
//      password: {type: String, required: true},
//      image: {type: Buffer, contentType: String, required: true}

//  });

// userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model('User', userSchema);


//Creer un api pour authentification! 
// app.post('/api/user', (req, res, next) => {
//   delete req.body._id;
//   const user = new User({
//     ...req.body,
//   });
//   user
//     .save()
//     .then(() => res.status(201).json({ message: 'Utilisateur cree !' }))
//     .catch((error) => res.status(400).json({ error }));
// });









