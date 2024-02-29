import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Choix from "../../../usersComponents/compteComponent/Choix";
import { MdOutlineDelete } from "react-icons/md";

const FavorisPage = () => {
  const [ listesEnvies, setListesEnvies ] = useState(
    JSON.parse(localStorage.getItem("produitAimer")) || []
  );

  const handleDelete = (id) => {
    const deleteFavoris = listesEnvies.filter(
      (listeEnvie) => listeEnvie._id !== id
    );
    setListesEnvies(deleteFavoris);
    localStorage.setItem("produitAimer", JSON.stringify(deleteFavoris));
  };

  return (
    <div>
      <h1 className="pb-2 font-medium border border-t-0 border-s-0 border-e-0 ">
      Votre liste d'envies ({listesEnvies.length})
			</h1>
      {listesEnvies.length > 0 ? (
        listesEnvies?.map((item) => (
          <div
            className="flex flex-col md:flex-row shadow-lg rounded-md bg-white justify-between border p-4 py- mt-5 gap-"
            key={item?._id}
          >
            
            <div className="flex flex-col sm:flex-row items- gap-4">
              <div className="h-24 w-24">
                <img
                  src={item?.imageUrl}
                  alt={item?.nom}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between  items-stretch h-full">
                <p>{item?.titre} </p>
                <div>
                  <p className="mb-1 bg">{item?.prix} FCFA</p>

                  <p className="text-gray-300">
                    {item?.prix} FCFA{" "}
                    <span className={`font-medium bg-red-200 rounded   ${item?.promo  === 0 ? "hidden" : "inline" } px-1 py- text-red-500`}>
                      -{item?.promo}%
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col  gap-4 justify-between h-24">
              <Link
                to={`/panier`}
                className="px-2 my- uppercase py-2 rounded text-white text-center bg-slate-800 "
              >
                Acheter
              </Link>
              <button
                onClick={() => handleDelete(item?._id)}
                className="px-2 my- flex gap-2 items-center py-1 uppercase rounded   text-red-500 hover:bg-red-100"
              >
                <MdOutlineDelete size={20} /> supprimer
              </button>
            </div>
          </div>
        ))
      ) : (
        <Choix
          icon={
            <HiShoppingCart
              size={50}
              className="mx-auto text-white  bg-inherit"
            />
          }
          titre="Vous n'avez placé aucune commande !"
          texte="Toutes vos commandes seront sauvegardées ici pour que vous"
          texte1="puissiez consulter leur statut à tout moment."
          textButton="Continuer vos achats"
          S
        />
      )}
    </div>
  );
};

export default FavorisPage;
