import React, { useEffect, useState } from "react";
import { usePanier } from "../../../utils/contexte/PanierContext";
import useGlobal from "../../../utils/hooks/useGlobal";
import axios from "axios";
import useCommandes from "../../../utils/hooks/useCommandes";
import { HiShoppingCart } from "react-icons/hi2";
import Choix from "../../compteComponent/Choix";
import { Link } from "react-router-dom";

const CommandeComponent = () => {
  const { storedItems } = usePanier();
  const { client2, commandes, client } = useGlobal();
  // const [client, setClient] = useState([]);

 

  const items = JSON.parse(localStorage.getItem("cartItems"));
  const tokenClient = localStorage.getItem("tokenclient");



  const commandeEffectuer = commandes.find(
    (commande) => client.email === commande.email
  );
  console.log(commandeEffectuer);

  return (
    <div>
      {commandes > 0 ? (
        client.email === commandes.email ? (
          commandes?.map((item, index) => (
            <div
              className="flex justify-between border p-4 mt-5 gap-3"
              key={index}
            >
              <div className="flex gap-5">
                <div className="">
                  <img
                    src={item?.produit}
                    alt={item?.produit}
                    className="w-16 h-auto"
                  />
                </div>
                <div>
                  <p>{item?.produit}</p>
                  <p className="mt-3">Commande {item?.idProduit}</p>
                  <button className="px-2 my-3 py-1 rounded text-white bg-slate-800">
                    {item?.etat}
                  </button>
                  <p className="font-medium">{item?.date}</p>
                </div>
              </div>
              <Link to={"/commandes/DetailsCommande"}>Details</Link>
            </div>
          ))
        ) : (
          ""
        )
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

export default CommandeComponent;
