import React from "react";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { DiGhostSmall } from "react-icons/di";
import useGlobal from "../../../utils/hooks/useGlobal";
import CompteComponent from "../../../usersComponents/compteComponent/CompteComponent";

const ComptePage = () => {
  const { client, handleLogoutUser } = useGlobal();

  const tokenClient = localStorage.getItem("tokenclient");

  const deconnexion = () => {
    if (tokenClient === null) {
      Navigate("/connexion");
    } else {
      handleLogoutUser();
    }
  };

  return (
    <div className="container px-9 mx-auto mt-[90px]">
      <h3 className="mb-4">
        Bienvenue sur votre compte{" "}
        {client.prenom === undefined ? "" : client.prenom} !
      </h3>
      <div className="flex gap-9">
        <div
          className={`  w-1/4      bg- px-  border border-gray-200 rounded-md  py-4`}
        >
          <div className="">
            <Link
              to="/compte"
              className=" px-4 my-0 mb-2  py-2 flex items-center gap-3   text-upercase text-sm hover:bg-gray-200 "
            >
              <FaRegUser size={16} />
              Votre compte
            </Link>
            <Link
              to="/"
              className="flex gap-4 items-center px-4 my-0 mb-2 mt- py-2   text-upercase text-sm hover:bg-gray-200"
            >
              <DiGhostSmall size={20} />
              Vos commandes
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 px-4 my-0  mt- py-2 mb-6   text-upercase text-sm hover:bg-gray-200"
            >
              <FaRegHeart size={16} />
              Votre Liste d'envies
            </Link>
          </div>
          <button
            onClick={deconnexion}
            className={`mx-5  w-3/4  px-4 mb-1  py-2  text-center text-upercase text-sm bg-gray-800 text-white rounded hover:bg-gray-900`}
          >
            Déconnexion
          </button>
        </div>
        <div className="border  p-9 w-3/4">
          <CompteComponent />
        </div>
      </div>
    </div>
  );
};

export default ComptePage;
