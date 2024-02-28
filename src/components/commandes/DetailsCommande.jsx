// import React  from 'react'
// import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
// import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const DetailsCommande = () => {
  const commandeId = localStorage.getItem("commandeIdCli")
  // const {commandeId} = useParams()
	const [data, setData] = useState([]);
	useEffect(() => {

    const fetchCommande = async (commandeId) => {
        try {
            const response = await axios.get(
                'https://kay-solu-api.onrender.com/api/commandes/' + commandeId,
            );
            setData(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des commandes:', error);
        }
    };
    fetchCommande(commandeId);
  }, [data]);

  const {open} = useSidebare()
  // const commandeCli = data.filter(
  //   (commande) => commande._id === localStorage.getItem("commandeIdCli")
  // )


  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
    
      <HeaderTable title="Détails Commandes"  />

     {data !== null ? (
  <div className="flex justify-between border p-4 mt-5 gap-">
      <div key={data.id} className="flex items-center gap-7">
        <div className="">
          <img
            src={data.image}
            alt={data.produit}
            className="w-32 h-auto"
          />
        </div>
        <div>
          <p>{data.produit}</p>
          <p className="mt-3 bg">{data.idProduit}</p>
          <div className="flex items-center gap-2">
                  <span
                    className={`h-4 w-4 rounded-full ${
                      data.etat === "en cours" ? "bg-blue-500" : "bg-yellow-500"
                    }`}
                  ></span>
                  <button
                    className={`px-2 my-3 py-1 rounded text-white ${
                      data.etat === "en cours" ? "bg-blue-500" : "bg-yellow-500"
                    }`}
                  >
                    {data.etat}
                  </button>
                </div>
          <p className="font-medium">Date : {data.date}</p>
          <p className="font-medium">Telephoe : {data.telephone}</p>
          <p className="font-medium">Prix total : {data.prixTotal}cfa</p>
          <p className="font-medium">Prix livraison : {data.prixLivraison}cfa</p>
          <p className="font-medium">Adress :{data.adress}</p>
        </div>
      </div>
  </div> ) : <div>Loader...</div>}

    </div>
  )
}

export default DetailsCommande;