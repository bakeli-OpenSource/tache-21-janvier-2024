import useGlobal from "../../../utils/hooks/useGlobal";
import image from "../../../assets/images/image6.jpg";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { ProduitsContext } from "../../../utils/contexte/ProduitsContext";
import { usePanier } from "../../../utils/contexte/PanierContext";
import Loader from "../../../components/loader/loader";

const OrderDetail = () => {
  const { addToCart } = usePanier();
  const { commandes } = useGlobal();
  const { produits } = useContext(ProduitsContext);
  const { _id } = useParams();
  const commande = commandes.find((item) => item._id === _id);

  console.log(commande);

  const handleAddToCart = () => {
    addToCart(produits);
  };

  return (
    <>
      <div className="">
        <h1 className="border flex items-center gap-4 mb-4 text-md font-medium border-t-0 border-s-0 border-e-0 pb-2 ">
        <Link to="/compte/commandes" className="">
            <FaArrowLeft className=" text-black  " />
          </Link> Détails de la commandes
        </h1>
        {commande?.produit?.map((produit, index) => (
        <div key={index} className="card m-4 p-6 border border-gray-300">
          <h2 className="text-xl font-bold">Commande #{commande.numeroCommande}</h2>
          <p>Nom: {commande.nom} {commande.prenom}</p>
          <p>Email: {commande.email}</p>
          <p>Téléphone: {commande.telephone}</p>
          <p>Produit:</p>
          <ul>
            <li>Nom: {produit}</li>
            <li>Quantité: {commande.quantite[index]}</li>
            <li>Prix unitaire: {commande.prixProduit}</li>
          </ul>
          <p>Image du produit:</p>
          <img className="max-w-full h-auto" src={commande.imageUrl[index]} alt={`Product ${index + 1}`} />
          <p>Prix Livraison: {commande.prixLivraison}</p>
          <p>Prix Total: {commande.prixTotal}</p>
          <p>État: {commande.etat}</p>
          <p>Date: {commande.date}</p>
        </div>
      ))}
        {/* {commande ? (
          <div key={commande._id} className=" ">
            <div className="border-2 pb-4 border-t-0 border-s-0 border-e-0">
              <h2 className="text-s, font-meduim  mb-2">
                Commande n°{commande._id}
              </h2>
              <p className="text-gray-500">{commande?.produit.length > 1 ? `${commande?.produit.length} Arcticles` :`${commande?.produit.length} Arcticles `}  </p>
              <p className="text-gray-500">Effectuee le {commande.date}</p>
              <p className="text-gray-500">Total:  {commande.prixTotal} FCFA</p>
            </div>
            <h3 className="text-md uppercase font-meduim mt-4">
              articles dans votre commandes:
            </h3>
            <div className="flex items-center justify-between gap-7  mt-5 p-4 border rounded">
              <img
                src={image}
                alt={commande?.produit}
                className="w-32 h-auto"
              />
              <div className="list-disc pl-6">
                <div>
                  <p className="mt-">{commande.produit.map((prod) => prod )}</p>
                  <p className="mt-">Variation: 1</p>
                  <p className="mt-">Quantité: {commande.quantite}</p>

                  <p className="mt- flex content-start">
                    Total: {"2 990 FCFA"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-2 my-3 uppercase py-1 rounded text-white bg-slate-800"
              >
                commander a nouveau
              </button>
            </div>

            <p className="mt-4">Total: ${".total"}</p>
          </div>
        ) : (
          <Loader />
        )} */}
      </div>
    </>
  );
};

export default OrderDetail;

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

