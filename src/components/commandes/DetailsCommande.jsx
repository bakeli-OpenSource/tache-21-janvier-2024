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
      <div className=" shadow-lg rounded-md bg-white justify-between border p-4 py-6 mt-5 gap-">
        <div className="mt-5">
          <p className="font-medium">
              Nom Complete : <span className="font-normal mx-auto">{data.nom}  {data.prenom}</span>
          </p>
          <p className="font-medium">Email : <span className="font-normal mx-auto">{data.email}</span></p>
          <p className="font-medium">Telephone : <span className="font-normal mx-auto">{data.telephone}</span></p>
          <p className="font-medium">Date : <span className="font-normal mx-auto">{data.date}</span></p>
          <p className="font-medium">
            Prix livraison : <span className="font-normal mx-auto">{data.prixLivraison}</span>cfa
          </p>
          <p className="font-medium">Prix total : <span className="font-normal mx-auto">{data.prixTotal}cfa</span></p>
          <div>
          <button
              className={`px-2 my-3 py-1 rounded text-white ${
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
      

      <div className='flex'>
      {data?.produit?.map((produit, index) => (
        // <div className="flex shadow-lg rounded-md bg-white justify-between    gap-">
          <div className="flex-shrink-0 mx-auto md:w-[25rem] lg:w-1/3 xl:w-96 mb-5 mt-5">
          <div key={index} className="card min-w-full flex items-center p-5 mb-4 bg-gray-100 rounded-lg shadow-lg border-s-4 border-gray-800 gap-5">
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
                <p>
                  Prix Produit : {data.prixProduit[index]}
                </p>
                <p>
                  Prix total produit : {data.prixProduit[index]}cfa
                </p>
                
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default DetailsCommande;