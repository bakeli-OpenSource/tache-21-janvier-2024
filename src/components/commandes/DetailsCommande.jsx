import HeaderTable from "../headerTable/HeaderTable";
import useSidebare from "../../utils/hooks/useSidebare";
import useCommandes from "../../utils/hooks/useCommandes";
import React from "react";

const DetailsCommande = () => {
  const { data } = useCommandes();

  const { open, closedrop } = useSidebare();

  return (
    <div
      onClick={closedrop}
      className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}
    >
      <HeaderTable title="Détails Commandes" />
      <div className="shadow-lg rounded-md  bg-white px-5 my-5 pb-4">
        <div className="flex  items-start  justify-between border border-t-0 border-e-0 border-s-0  py-4 my-0 gap-">
          <div className="">
            <p className="font-medium">
              Email : <span className="font-normal">{data.email}</span>
            </p>
            <p className="font-medium">
              Nom :{" "}
              <span className="font-normal">
                {data.nom} {data.prenom}
              </span>
            </p>
            <p className="font-medium">
              Telephone : <span className="font-normal">{data.telephone}</span>
            </p>

            <p className="font-medium">
              Date : <span className="font-normal">{data.date}</span>
            </p>
          </div>
          <div>
            <button
              className={`px-2  py-1 rounded text-white ${
                data.etat === "en cours"
                  ? "bg-orange-500"
                  : data.etat === "en livraison"
                  ? "bg-yellow-500"
                  : data.etat === "livrée"
                  ? "bg-green-500"
                  : data.etat === "en attente"
                  ? "bg-red-600"
                  : ""
              }`}
            >
              {data.etat}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5  ">
          {data?.produit?.map((produit, index) => (
            <div className=" w-full     mt-6">
              <div
                key={index}
                className={`card min-w-full flex items-center justify-between  px-5 py-2 mb-4 border-s-4 ${
                  data.etat === "en cours"
                    ? "border-orange-500"
                    : data.etat === "en livraison"
                    ? "border-yellow-500"
                    : data.etat === "livrée"
                    ? "border-green-500"
                    : data.etat === "en attente"
                    ? "border-red-600"
                    : ""
                }  bg-[#f8f9fa] rounded-md shadow-md gap-5`}
              >
                <div className="w-16">
                  <img
                    className="min-w-full h-auto"
                    src={data.imageUrl[index]}
                    alt={`Product ${index + 1}`}
                  />
                </div>
                <div className="w-2/3">
                  <p className="text">{data.produit[index]}</p>
                  <hr className="min-w-0.5 border bg-black mt-4" />
                  <div className="mt-5">
                    <p>Quantité : {data.quantite[index]}</p>
                    <p>Prix : {data.prixProduit[index]}</p>
                    {/* <p>Couleur : {data.couleur}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-end p-3">
          <p className="font-medium">
            Livraison :{" "}
            <span className="font-normal">{data.prixLivraison} FCFA</span>
          </p>
          <p className="font-medium">
            Prix total :{" "}
            <span className="font-normal">{data.prixTotal} FCFA</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCommande;