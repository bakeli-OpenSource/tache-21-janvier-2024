import React from "react";
import useGlobal from "../../../utils/hooks/useGlobal";
import { HiShoppingCart } from "react-icons/hi2";
import Choix from "../../compteComponent/Choix";
import { Link } from "react-router-dom";
import Loader from "../../../components/loader/loader";
import useCommandes from "../../../utils/hooks/useCommandes";

const CommandeComponent = () => {
  const { commandes } = useCommandes();

  const { client } = useGlobal();

  const clientCommande = commandes.filter(
    (commande) => commande.email === client?.email
  );

  const commande = clientCommande.map((com) => com?.email);

  return (
    <div>
      {commandes.length > 0 ? (
        client?.email === commande[0] ? (
          clientCommande?.map((item) => (
            <Link
            to={`/compte/commandes/DetailsCommande/${item._id}`}
              className="flex text-sm sm:text-[16px] shadow-lg rounded-md bg-white justify-between border p-4 py-6 mt-5 gap-"
              key={item?._id}
            >
              <div className="flex items-center gap-7">
                <div>
                  <p>
                    {" "}
                    Vous avez commandé{" "}
                    {item?.produit.length > 1
                      ? `${item?.produit.length}  produits`
                      : `${item?.produit.length}  produit`}{" "}
                  </p>
                  <p className="font- my-2">
                    Le {new Date(item?.date).toLocaleDateString("fr")}
                  </p>
                  {/* <p className="my-1  bg">N° de commande: {item?.numeroCommande} </p> */}
                  <button>
                    <span
                      className={` ${
                        item?.etat === "en cours"
                          ? "text-orange-500"
                          : item?.etat === "en livraison"
                          ? "text-yellow-500"
                          : item?.etat === "livrée"
                          ? "text-green-500"
                          : item?.etat === "en attente"
                          ? "text-red-600"
                          : ""
                      }  text-center  `}
                    >
                      {item?.etat}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify- items-between">
                <Link
                  to={`/compte/commandes/DetailsCommande/${item._id}`}
                  className="px-2 my- py-1 rounded text-white text-center bg-slate-800 "
                >
                  Détails
                </Link>
                <p></p>
              </div>
            </Link>
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
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CommandeComponent;

// import React from 'react';

// const CommandeDetails = ({ item? }) => {
//   return (
//     <div className="flex flex-wrap">
//       {data.produit.map((produit, index) => (
//         <div key={index} className="card m-4 p-6 border border-gray-300">
//           <h2 className="text-xl font-bold">Commande #{data.numeroCommande}</h2>
//           <p>Nom: {data.nom} {data.prenom}</p>
//           <p>Email: {data.email}</p>
//           <p>Téléphone: {data.telephone}</p>
//           <p>Produit:</p>
//           <ul>
//             <li>Nom: {produit}</li>
//             <li>Quantité: {data.quantite[index]}</li>
//             <li>Prix unitaire: {data.prixProduit}</li>
//           </ul>
//           <p>Image du produit:</p>
//           <img className="max-w-full h-auto" src={data.imageUrl[index]} alt={`Product ${index + 1}`} />
//           <p>Prix Livraison: {data.prixLivraison}</p>
//           <p>Prix Total: {data.prixTotal}</p>
//           <p>État: {data.etat}</p>
//           <p>Date: {data.date}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CommandeDetails;
