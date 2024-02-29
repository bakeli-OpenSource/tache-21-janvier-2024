import React from "react";
import useGlobal from "../../../utils/hooks/useGlobal";
import { HiShoppingCart } from "react-icons/hi2";
import Choix from "../../compteComponent/Choix";
import { Link } from "react-router-dom";
import Loader from "../../../components/loader/loader";

const CommandeComponent = () => {
  const { commandes, client } = useGlobal();

  const clientCommande = commandes.filter(
    (commande) => commande.email === client?.email
  );

  const commande = clientCommande.map((com) => com?.email);

  return (
    <div>
      {commandes.length > 0 ? (
        client?.email === commande[0] ? (
          clientCommande?.map((item) => (
            <div
              className="flex shadow-lg rounded-md bg-white justify-between border p-4 py-6 mt-5 gap-"
              key={item?._id}
            >
              <div className="flex items-center gap-7">
                <div>
                  <p> Vous avez commandes {item?.produit.length > 1 ? `${item?.produit.length}  produits` : `${item?.produit.length}  produit`} </p>
                  <p className="my-2 bg">Prix total:  {item?.prixTotal} FCFA</p>

                  <p className="font-medium">Le {item?.date}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify- items-between">
              <Link
                to={`/compte/commandes/DetailsCommande/${item._id}`}
                className="px-2 my- py-1 rounded text-white text-center bg-slate-800 "
              >
                Détails
              </Link>
              <button className="px-2 my- py-1 rounded border border-slate-800 text-slate-800 hover:text-white hover:bg-slate-800">
                {item?.etat}
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
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CommandeComponent;

// import React from 'react';

// const CommandeDetails = ({ data }) => {
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
