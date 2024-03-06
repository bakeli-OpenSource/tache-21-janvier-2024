import React from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { DiGhostSmall } from "react-icons/di";
import useGlobal from "../../../utils/hooks/useGlobal";
import CompteComponent from "../../../usersComponents/compteComponent/CompteComponent";
import CommandePage from "../commandesPage/CommandePage";
import FavorisPage from "../favorisPage.jsx/FavorisPage";
import OrderDetail from "../../../usersComponents/userConnexion/commandeComponent/DetailsCommande";
import ProduitIndisponiblePage from "../produitIndisponiblePage/ProduitIndisponiblePage";

const ComptePage = () => {
  const { client, handleLogoutUser, closeDropdown } = useGlobal();
  const location = useLocation();
  const urlPageActuel = location.pathname.split("/");
  const tokenClient = localStorage.getItem("tokenclient");

  const deconnexion = () => {
    if (tokenClient === null) {
      Navigate("/connexion");
    } else {
      handleLogoutUser();
    }
  };

  return (
    <div onClick={closeDropdown} className="mt-[80px] md:[100px]">
      <div className="w-full px-4 md:px-9 pb-3 mx-auto ">
        <h3
          className={`mb-4 ${
            location.pathname === "/compte" ? "block" : "hidden"
          }`}
        >
          Bienvenue sur votre compte{" "}
          {client.prenom === undefined ? "" : client.prenom} !
        </h3>
        <div className="flex flex-col md:flex-row gap-9">
          <div
            className={` w-full md:w-1/4      bg- px-  border border-gray-200 rounded-md  py-`}
          >
            <div className="">
              <Link
                to="/compte"
                className={`px-4 my-0  mb-3 ${
                  location.pathname === "/compte" ? "bg-gray-200" : ""
                }  py-2 flex items-center gap-3   text-upercase text-sm hover:bg-gray-200 `}
              >
                <FaRegUser size={16} />
                Votre compte
              </Link>
              <Link
                to="/compte/commandes"
                className={`px-4 my-0 mb-2 ${
                  location.pathname === "/compte/commandes" ||
                  urlPageActuel[3] === "DetailsCommande"
                    ? "bg-gray-200"
                    : ""
                }  py-2 flex items-center gap-3   text-upercase text-sm hover:bg-gray-200 `}
              >
                <DiGhostSmall size={20} />
                Vos commandes
              </Link>
              <Link
                to="/compte/favoris"
                className={`px-4 my-0 mb-2 ${
                  location.pathname === "/compte/favoris" ? "bg-gray-200" : ""
                }  py-2 flex items-center gap-3   text-upercase text-sm hover:bg-gray-200 mb-6`}
              >
                <FaRegHeart size={16} />
                Votre Liste d'envies
              </Link>
            </div>
            <button
              onClick={deconnexion}
              className={`mx-5 w-3/4 px-4 mb-1  py-2  text-center text-upercase text-sm bg-gray-800 text-white rounded hover:bg-gray-900`}
            >
              Déconnexion
            </button>
          </div>
          <div className="border px-2 md:px-9  py-5 w-full md:w-3/4">
            <Routes>
              <Route path="/" element={<CompteComponent />}></Route>
              <Route path="/commandes" element={<CommandePage />}></Route>
              <Route path="/favoris" element={<FavorisPage />}></Route>
              <Route path="/produitIndisponible" element={<ProduitIndisponiblePage />} />
              <Route
                path="/commandes/DetailsCommande/:_id"
                element={<OrderDetail />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComptePage;
