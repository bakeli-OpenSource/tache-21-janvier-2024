// import React  from 'react'
// import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
// import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import React, { useState, useEffect } from 'react';
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
  <div className="flex justify-between border p-4 mt-5 gap-">
    {commandeCli.map(item => (
      <div key={item.id} className="flex items-center gap-7">
        <div className="">
          {/* <img
            src={item.image}
            alt={item.produit}
            className="w-32 h-auto"
          /> */}
        </div>
        <div>
          <p>{item.produit}</p>
          <p className="mt-3 bg">{item.idProduit}</p>
          <button className="px-2 my-3 py-1 rounded text-white bg-slate-800">
            {item.etat}
          </button>
          <p className="font-medium">{item.date}</p>
        </div>
      </div>
    ))}
  </div>
) : <div>Loader...</div>}

    </div>
  )
}

export default DetailsCommande;
