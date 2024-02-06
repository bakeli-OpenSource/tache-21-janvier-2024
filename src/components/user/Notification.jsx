import React, { useState } from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";


const Notification = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleToggle = () => {
      setDropdown(!dropdown);
    };
  
    return (
      <div className="relative">
        <IoIosNotifications className="cursor-pointer" size={20} onClick={handleToggle} />

  
        {dropdown && (
          <div className="absolute right-0 mt-5 w-52 bg-white border border-gray-200 rounded-md shadow-lg py-1">
            <div className='flex justify-end px-4 py-2'>

            <FaRegCircleXmark className='cursor-pointer' onClick={handleToggle} />
            </div>
           <div className='px-4 py-3 text-sm flex flex-col'>
            <p>Aucun Notification pour le moment</p>
           </div>
          </div>
        )}
      </div>
    );
}

export default Notification
