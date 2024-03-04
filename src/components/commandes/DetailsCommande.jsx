import HeaderTable from '../headerTable/HeaderTable';
import useSidebare from '../../utils/hooks/useSidebare';
import useCommandes from '../../utils/hooks/useCommandes';
import React from 'react';


  const DetailsCommande = () => {

    const {
      data
    } = useCommandes();


  const { open, closedrop } = useSidebare();


  return (
    <div
      onClick={closedrop}
      className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}
    >
      <HeaderTable title="Détails Commandes" />
      <div className="flex shadow-lg rounded-md bg-white justify-between border p-4 py-6 mt-5 gap-">
        <div className="mt-5">
          <p className="font-medium">
            Nom & Prénom : {data.nom}
            {data.prenom}
          </p>
          <p className="font-medium">Adresse : {data.adresse}</p>
          <p className="font-medium">Telephone : {data.telephone}</p>
          <p className="font-medium">
            Nom & Prénom : {data.nom}
            {data.prenom}
          </p>
          <p className="font-medium">Date : {data.date}</p>
          <p className="font-medium">
            Prix livraison : {data.prixLivraison}cfa
          </p>
          <p className="font-medium">Prix total : {data.prixTotal}cfa</p>
        </div>
      </div>

      {data?.produit?.map((produit, index) => (
        <div className="flex flex-col sm:row shadow-lg rounded-md bg-white justify-between border p-4 py-6 mt-5 gap-">
          <div key={index} className="card flex items-center gap-7">
            <div className="">
              <img
                className="max-w-full h-auto"
                src={data.imageUrl[index]}
                alt={`Product ${index + 1}`}
              />
            </div>
            <div>
              <h1 className="text-4xl">{data.produit}</h1>
              <hr className="min-w-0.5 bg-black mt-4" />
              <div className="mt-5">

                <p className="font-medium">Quantité : {data.quantite[index]}</p>
                <p className="font-medium">Telephoe : {data.telephone}</p>
                <p className="font-medium">
                  Prix Produit : {data.prixProduit[index]}
                </p>
                <p className="font-medium">
                  Prix total produit : {data.prixProduit[index]}cfa
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify- datas-between">
            <div className="flex gap-4">
              <span
                className={`h-4 w-4 rounded-full mt-5  ${
                  data.etat === "en cours"
                    ? "bg-orange-500"
                    : data.etat === "en livraison"
                    ? "bg-yellow-500"
                    : data.etat === "livrée"
                    ? "bg-green-500"
                    : data.etat === "en attente"
                    ? "bg-red-800"
                    : ""
                }`}
              ></span>
              <button
                className={`px-2 my-3 py-1 rounded text-white ${
                  data.etat === "en cours"
                    ? "bg-orange-500"
                    : data.etat === "en livraison"
                    ? "bg-yellow-500"
                    : data.etat === "livrée"
                    ? "bg-green-500"
                    : data.etat === "en attente"
                    ? "bg-red-800"
                    : ""
                }`}
              >
                {data.etat}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsCommande;
