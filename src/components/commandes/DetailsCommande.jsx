// import React  from 'react'
// import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
// import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import axios from 'axios';



const DetailsCommande = () => {
 

  // const { commandes } = useCommandes([]);
  const { commandeId } = useParams();
	const [data, setData] = useState([]);
	const fetchCommande = async (commandeId) => {
		try {
			const response = await axios.get(
				'https://kay-solu-api.onrender.com/api/commandes/',
			);
			setData(response.data);
		} catch (error) {
			console.error('Erreur lors de la récupération des produits:', error);
		}
	};
	fetchCommande(commandeId);

  const { open } = useSidebare();


  useEffect(() => {
    const commandeIdCli = localStorage.getItem("commandeIdCli");
    console.log(localStorage.getItem("commandeIdCli"));
  }, []);

  const commandeCli = data.filter(
    (commande) => commande._id === localStorage.getItem("commandeIdCli")
  )


  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
    
      <HeaderTable title="Détails Commandes"  />

      {data !== null ? (
  <div className="flex shadow-lg rounded-md bg-white border p-4 py-6 mt-5 gap-7">
    {commandeCli.map(item => (
      <div key={item.id} className="flex items-center gap-7">
        <div className="">
          <img
            src={item.image}
            alt={item.produit}
            className="w-32 h-auto"
          />
        </div>
        <div className="flex items-center gap-7">
        <div>
          <p>{item.produit}</p>
          <p className="font-medium">Date : {item.date}</p>
          <p className="font-medium">Telephoe : {item.telephone}</p>
          <p className="font-medium">Prix total : {item.prixTotal}cfa</p>
          <p className="font-medium">Prix livraison : {item.prixLivraison}cfa</p>
          <p className="font-medium">Adress :{item.adress}</p>
        </div>
        </div>

          {/* <p className="mt-3 bg">{item.idProduit}</p> */}
          <div className="flex flex-col gap-4 justify- items-between">
          <Link
                // to={`/compte/commandes/DetailsCommande/${item._id}`}
                className="px-2 my- py-1 rounded text-white text-center bg-slate-800 "
              >
                Détails
              </Link>
              <div className="flex gap-4">
                   <span
                    className={`h-4 w-4 rounded-full mt-5  ${
                      item.etat === "en cours" ? "bg-orange-500" :
                      item.etat === "en livraison" ? "bg-yellow-500" :
                      item.etat === "livrée" ? "bg-green-500" :
                      item.etat === "en attente" ? "bg-red-800" : ""
                    }`}
                  ></span>
                  <button
                    className={`px-2 my-3 py-1 rounded text-white ${
                      item.etat === "en cours" ? "bg-orange-500" :
                      item.etat === "en livraison" ? "bg-yellow-500" :
                      item.etat === "livrée" ? "bg-green-500" :
                      item.etat === "en attente" ? "bg-red-800" : ""
                    }`}
                  >
                    {item.etat}
                  </button>
              </div>    
                </div>
          
      </div>
    ))}
  </div>
) : <div>Loader...</div>}

    </div>
  )
}

export default DetailsCommande;
