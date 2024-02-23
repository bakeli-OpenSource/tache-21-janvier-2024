import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import Choix from "../../../usersComponents/compteComponent/Choix";

const CommandePage = () => {
  return (
    <div className="">
      <h1 className="border font-medium border-t-0 border-s-0 border-e-0 pb-2 ">
        Vos commandes
      </h1>

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
      />
    </div>
  );
};

export default CommandePage;
