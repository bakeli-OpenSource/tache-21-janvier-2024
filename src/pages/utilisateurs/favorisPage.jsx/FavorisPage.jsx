import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import Choix from "../../../usersComponents/compteComponent/Choix";
import FavorisComponent from "../../../usersComponents/favorisComponent/FavorisComponent";
import useGlobal from "../../../utils/hooks/useGlobal";

const FavorisPage = () => {
  const [listesEnvies, setListesEnvies] = useState(
    JSON.parse(localStorage.getItem("produitAimer")) || []
  );

  const { closeDropdown } = useGlobal();

  const list = listesEnvies?.map((item) => item);

  return (
    <div onClick={closeDropdown}>
      <h1 className="pb-2 font-medium border border-t-0 border-s-0 border-e-0 ">
        Votre liste d'envies ({listesEnvies.length})
      </h1>
      {listesEnvies.length > 0 ? (
        listesEnvies?.map((item) => (
          <FavorisComponent
            item={item}
            listesEnvies={listesEnvies}
            setListesEnvies={setListesEnvies}
            key={item._id}
          />
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
