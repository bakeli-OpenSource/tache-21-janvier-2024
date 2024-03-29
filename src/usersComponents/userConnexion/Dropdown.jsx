import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { DiGhostSmall } from "react-icons/di";
import useGlobal from "../../utils/hooks/useGlobal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dropdown = ({ onClick }) => {
  const { handleLogoutUser, profileUser, dropdown, handleToggle, client } =
    useGlobal();
  let connecter;
  let commander;
  let favoris;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    profileUser();
  }, []);

  const tokenClient = localStorage.getItem("tokenclient");
  const deconnexion = () => {
    handleToggle();

    if (tokenClient === null) {
      // navigate("/connexion");
      navigate("/connexion", { state: { from: location.pathname } });
    } else {
      handleLogoutUser();
    }
  };

  const dropdownOuvret = () => {
    if (tokenClient === null) {
      // navigate("/connexion");
      navigate("/connexion", { state: { from: location.pathname } });
    } else {
      handleToggle();
    }
  };

  if (tokenClient === null) {
    connecter = "/connexion";
    commander = "/connexion";
    favoris = "/connexion";
  } else {
    connecter = "/compte";
    commander = "/compte/commandes";
    favoris = "/compte/favoris";
  }

  return (
    <div className="relative" onClick={onClick}>
      <div
        className="font- cursor-pointer flex items-center gap-"
        onClick={dropdownOuvret}
      >
        <FaRegUser className="cursor-pointer mr-2" size={20} />

        <p className="text-sm hidden md:block">
          {tokenClient === null
            ? "Se connecter"
            : `bonjour, ${client.prenom === undefined ? "" : client.prenom}`}
        </p>
        {tokenClient === null ? (
          ""
        ) : dropdown === true ? (
          <RiArrowDropUpLine
            className="p-0 mt-2 mx-0 hidden md:block"
            size={30}
          />
        ) : (
          <RiArrowDropDownLine
            className="p-0 mt-2 mx-0 hidden md:block"
            size={30}
          />
        )}
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
              tokenClient === null ? " " : "uppercase "
            } px-4 mb-4  py-2 mx-3 text-center text-upercase text-sm bg-gray-800 text-white rounded hover:bg-gray-900`}
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
              to={connecter}
              onClick={handleToggle}
              className=" px-4 my-0  py-2 flex items-center gap-3   text-upercase text-sm hover:bg-gray-200 "
            >
              <FaRegUser size={16} />
              Votre compte
            </Link>
            <Link
              to={commander}
              onClick={handleToggle}
              className="flex gap-4 items-center px-4 my-0 mt- py-2   text-upercase text-sm hover:bg-gray-200"
            >
              <DiGhostSmall size={20} />
              Vos commandes
            </Link>
            <Link
              to={favoris}
              onClick={handleToggle}
              className="flex items-center gap-3 px-4 my-0 mt- py-2 mb-3   text-upercase text-sm hover:bg-gray-200"
            >
              <FaRegHeart size={16} />
              Votre Liste d'envies
            </Link>
          </div>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
