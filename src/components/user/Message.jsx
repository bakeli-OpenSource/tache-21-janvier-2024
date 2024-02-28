import React, { useState } from 'react'
import { FaRegCircleXmark, FaSquareEnvelope } from "react-icons/fa6";
import useSidebare from '../../utils/hooks/useSidebare';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Message = ({nouveauMessage}) => {
    const {message, handleMessage} = useSidebare()
    const [border, setBorder] = useState("border-s-4 border-blue-900")
    const navigate = useNavigate()

    const messageLu = async (id) => {
      try {
        const response = await axios.put('https://kay-solu-api.onrender.com/api/messages/' + id, { lu: true });
        
        if (response.status === 200) { 
          console.log('Message supprimé:', response.data);
          toast.success('Message supprimé!');
        } else {
          throw new Error('Erreur lors de la suppression du message');
        }
      } catch (error) {
        console.error('Erreur lors de la suppresion du message:', error);
        toast.error('Erreur lors de la suppresion du message!');
      }
    }
  
    return (
      <div className="relative">
        <FaSquareEnvelope className="cursor-pointer" size={20} onClick={handleMessage} />

  
        {message && (
          <div className="absolute right-0 mt-5 w-[350px] bg-white border border-gray-200 rounded-md shadow-lg py-1">
            <div className='flex justify-end px-4 py-2'>

            <FaRegCircleXmark className='cursor-pointer' onClick={handleMessage} />
            </div>
            <div className='px-4 py-3 text-sm flex flex-col overflow-auto max-h-[250px]'>
                {nouveauMessage.length ?
                  nouveauMessage.map((message, index) => (
                    <button onClick={() => navigate("messages/" + message._id) }  key={index} className={`mb-2 bg-white  text-black py-2 rounded-lg col-span-3 shadow-xl ${border}`}>
                      <div className="flex justify-between px-3">
                          <div className=''>
                            <p className="text-lg text-start font-semibold pb-1">Nouveau Message</p>
                            <p className='text-start text-slate-600'>Vous avez recu un message de <span className='font-semibold'>{message.prenomNom}</span></p>
                          </div>
                          <MdDelete className='cursor-pointer text-lg text-red-700 shadow-sm' onClick={() => messageLu(message._id)} />
                      </div>
                    </button>
                  )) : <div className='px-4 py-3 text-sm flex flex-col text-black'>
                        <p>Aucun Notification</p>
                      </div>
                }
              </div>
          </div>
        )}
        <ToastContainer />
      </div>
    );
}

export default Message
