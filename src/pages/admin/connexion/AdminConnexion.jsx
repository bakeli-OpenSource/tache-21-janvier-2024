
import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import useGlobal from "../../../utils/hooks/useGlobal";


                                        

const AdminConnexion = () => {
  const {email, setEmail, password, setPassword, handleLogin } = useGlobal()

  const handleSubmit = (e) => {
    e.preventDefault();
     handleLogin()
  };

  return (

     <div className='flex flex-col items-center  justify-center min-h-screen py-2 bg-gray-100'>  
        <form 
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center flex-row-reverse w-full  px-20 text-center'>
        <div className='min-w-96 bg-white rounded-2xl shadow-2xl flex flex-col-reverse md:flex-row w-2/3 max-w-4xl'>
            <div className='md:w-3/5 py-5'>
              
              <div className='py-10'>
                <h2 className='text-2xl font-bold text-black md:text-center'>Connectez-vous au compte</h2>
              <div className='border-2 w-10 border-black inline-block mb-2'></div>
              <div className='flex flex-col items-center mt-4'>
                <div className='bg-gray-100 w-64 p-1 flex items-center justify-center md:text-center sm:text-center'>
                <FaEnvelope className='text-gray-400  m-2 '/>
                  <input type='text' 
                     value={email}
                     onChange={e => setEmail(e.target.value)} 
                  name='email' placeholder='Email' 
                  className='bg-gray-100 outline-none text-sm flex-1' 
                  required='@' />
                </div>
                </div>
                <div className='flex flex-col items-center mt-5'>
                <div className='bg-gray-100 w-64 p-1 flex items-center '>
                <FaLock className='text-gray-400 m-2'/>
                  <input type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}  
                  name='email'
                  placeholder='Password' 
                  className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                </div>
              <div className=" items-center text-center text-xs mt-3">
              <label htmlFor="default-checkbox" className="text-center "> Mot de passe oublié ?</label>
              </div>
                 <div className='mt-4'>
              <button type="submit" className="text-white bg-black  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Connexion</button>
              </div>
              </div>
              </div>
            <div className='md:w-2/5 min-w-65 min-h-80 min-w-[220px] bg-black text-white rounded-tr-2xl rounded-br-2xl py-[129px] px-5  '>
              <h2 className='text-3xl font-bold mb-2'>Bienvenue</h2>
              <div className='border-2 w-10 border-white inline-block mb-2'></div>
              <p className='mb-2'>Remplissez vos informations personnelles et connecter sur votre appli</p>

            </div>
          </div>
          </form>   
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









//   const {email, setEmail, password, setPassword, handleLogin } = useGlobal()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin()
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center ">
//       <form
//         className="max-w-md mx-auto bg-gray-800 w-full px-8 pt-6 pb-8 mb-4 shadow-md rounded-md"
//         onSubmit={handleSubmit}
//       >
//         <Title
//           className="text-white text-center mb-5"
//           children="Page connexion"
//         />
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="email"
//             className="block py-2.5 px-0 w-full text-sm text-white bg-transparent mb-4 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={email}
//             onChange={e => setEmail(e.target.value)} 
//           />
//           <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//             Email address
//           </label>
//         </div>

//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="password"
//             name="floating_password"
//             className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={password}
//             onChange={e => setPassword(e.target.value)} 
//           />
//           <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//             Password
//           </label>
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="border-orange w-56 p-1 rounded-full   text-black text-center mt-4 text-xs  ring-inset  bg-white"
//           >
//             Connexion
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };


