import React from "react";
import { usePanier } from "../../../utils/contexte/PanierContext";
import useGlobal from "../../../utils/hooks/useGlobal";
import { HiShoppingCart } from "react-icons/hi2";
import Choix from "../../compteComponent/Choix";
import { Link } from "react-router-dom";
import image from "../../../assets/images/image6.jpg";
import Loader from "../../../components/loader/loader";
import { commandes } from "../../../pages/utilisateurs/NavbarUtilisateut/Navbar/MyLinks";

const CommandeComponent = () => {
  // const { commandes, client } = useGlobal();
  // const commandeEffectuer = commandes.find(
  //   (commande) => client.email === commande.email
  // );

  return (
    <div>
      {commandes.length > 0 ? (
        // client.email === commandes.email ? (
          commandes?.map((item, index) => (
            <div
              className="flex justify-between border p-4 mt-5 gap-"
              key={index}
            >
              <div className="flex items-center gap-7">
                <div className="">
                  <img
                    src={image}
                    alt={item?.produit}
                    className="w-32 h-auto"
                  />
                </div>
                <div>
                  <p>{item?.produit}</p>
                  <p className="mt-3 bg">Commande {item?.idProduit}</p>
                  <button className="px-2 my-3 py-1 rounded text-white bg-slate-800">
                    {item?.etat}
                  </button>
                  {/* <p className="font-medium">{item?.date}</p> */}
                </div>
              </div>
              <Link
                to={`/compte/commandes/DetailsCommande/${item.id}`}
                className="text-slate-800"
              >
                Détails
              </Link>
            </div>
          ))
        // ) : (
        //   <Choix
        //     icon={
        //       <HiShoppingCart
        //         size={50}
        //         className="mx-auto text-white  bg-inherit"
        //       />
        //     }
        //     titre="Vous n'avez placé aucune commande !"
        //     texte="Toutes vos commandes seront sauvegardées ici pour que vous"
        //     texte1="puissiez consulter leur statut à tout moment."
        //     textButton="Continuer vos achats"
        //     S
        //   />
        // )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CommandeComponent;
