import React, { useState } from 'react'
import { FaRegCircleXmark, FaSquareEnvelope } from "react-icons/fa6";
import useSidebare from '../../utils/hooks/useSidebare';


const Message = () => {
    const {message, handleMessage} = useSidebare()
  
    return (
      <div className="relative">
        <FaSquareEnvelope className="cursor-pointer" size={20} onClick={handleMessage} />

  
        {message && (
          <div className="absolute right-0 mt-5 w-52 bg-white border border-gray-200 rounded-md shadow-lg py-1">
            <div className='flex justify-end px-4 py-2'>

            <FaRegCircleXmark className='cursor-pointer' onClick={handleMessage} />
            </div>
           <div className='px-4 py-3 text-sm flex flex-col'>
            <p>Aucun Message pour le moment</p>
           </div>
          </div>
        )}
      </div>
    );
}

export default Message
