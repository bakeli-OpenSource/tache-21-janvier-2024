import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSidebare from "../../utils/hooks/useSidebare";
import useGlobal from "../../utils/hooks/useGlobal";

const UserDropdown = () => {

  const {dropdown, handleToggle} = useSidebare()
  const { handleLogout } = useGlobal()

  const deconnexion = () => {
    handleLogout()

  }
 
  return (
    <div className="relative">
      <FaUser className="cursor-pointer" size={17} onClick={handleToggle} />

      {dropdown && (
        <div className="absolute right-0 mt-5 bg-white border border-gray-200 rounded-md shadow-lg py-1">
          <Link
            to="/admin/profil"
            onClick={handleToggle}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </Link>
          <button onClick={deconnexion} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
