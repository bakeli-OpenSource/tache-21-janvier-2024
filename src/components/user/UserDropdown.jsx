import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="relative">
      <FaUser className="cursor-pointer" size={16} onClick={handleToggle} />

      {dropdown && (
        <div className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-md shadow-lg py-1">
          <Link
            to="/admin/profil"
            onClick={handleToggle}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </Link>
          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Déconnexion
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
