import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { DiGhostSmall } from "react-icons/di";
import useGlobal from "../../utils/hooks/useGlobal";
import { prenom } from "../../utils/contexte/GlobalContext";

const Dropdown = () => {
  const { handleLogoutUser, profileUser, dropdown, handleToggle } = useGlobal();

  const navigate = useNavigate();
  // const [dropdown, setDropdown] = useState(false);

  // const handleToggle = () => {
  //   setDropdown(!dropdown);
  // };

  useEffect(() => {
    profileUser()
  }, [])

  const deconnexion = () => {
    handleToggle();

    if (tokenClient === null) {
      navigate("/connexion");
    } else {
      handleLogoutUser();
    }
  };

  const tokenClient = localStorage.getItem("tokenclient");

  return (
    <div className="relative">
      <div
        className="font-medium cursor-pointer flex items-center gap-"
        onClick={handleToggle}
      >
        <FaRegUser className="cursor-pointer mr-2" size={20} />
        
        {tokenClient === null ? "Se connecter" : `bonjour ${prenom}` }
        <RiArrowDropDownLine className="p-0 mt-2 mx-0" size={30} />
      </div>

      {dropdown && (
        <div
          className={`absolute  right-0 mt- w-48  flex ${
            tokenClient === null ? " flex-col" : "flex-col-reverse mt-5"
          }    bg-white px-  border border-gray-200 rounded-md shadow-lg py-4`}
        >
          <button
            onClick={deconnexion}
            className={`block ${
              tokenClient === null
                ? " "
                : "border-t-2 uppercase border-slate-700"
            } px-4 mb-4 shadow-md py-2 mx-3 text-center text-upercase text-sm bg-gray-800 text-white rounded hover:bg-gray-900`}
          >
            {tokenClient === null ? "se connecter" : "deconnexion"}
          </button>
          <div
            className={`${
              tokenClient
                ? "border-b-2 border-slate-700 mb-3"
                : "border-t-2 border-slate-700"
            }  flex flex-col`}
          >
            <Link
              to="/"
              onClick={handleToggle}
              className=" px-4 my-0  py-2 flex items-center gap-3   text-upercase text-sm hover:bg-gray-200 "
            >
              <FaRegUser size={16} />
              Votre compte
            </Link>
            <Link
              to="/"
              onClick={handleToggle}
              className="flex gap-4 items-center px-4 my-0 mt- py-2   text-upercase text-sm hover:bg-gray-200"
            >
              <DiGhostSmall size={20} />
              Vos commandes
            </Link>
            <Link
              to="/"
              onClick={handleToggle}
              className="flex items-center gap-3 px-4 my-0 mt- py-2 mb-3   text-upercase text-sm hover:bg-gray-200"
            >
              <FaRegHeart size={16} />
              Votre Liste d'envies
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
