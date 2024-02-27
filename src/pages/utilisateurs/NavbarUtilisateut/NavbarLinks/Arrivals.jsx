import React, { useContext, useEffect, useState } from "react";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import axios from "axios";
import { BsPlus } from "react-icons/bs";

const Arrivals = () => {
  const { produits } = useContext(ProduitsContext);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get("https://kay-solu-api.onrender.com/api/produits");
        setNewArrivals(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des nouveaux arrivages:", error);
      }
    };

    fetchNewArrivals();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const filteredArrivals = newArrivals.filter(produit => {
        const produitDate = new Date(produit.dateAjout).getTime();
        return now - produitDate < 24 * 60 * 60 * 1000;
      });
      setNewArrivals(filteredArrivals);
    }, 60000);

    return () => clearInterval(interval);
  }, [newArrivals]);

  return (
    <div>
      <h1>New Arrivals</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px] max-w-sm md:max-w-none md:mx-auto pt-16 mb-7 justify-center content-center">
          {produits.map((produit, index) => (
            <div
              key={index}
              className="items-center justify-center w-full h-full static border"
            >
              <div className="relative">
                <img
                  className="h-[17rem] w-[50rem]"
                  src={produit.imageUrl}
                  alt={produit.nom}
                />
                
                <div className='absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center'>

                  <div className='flex justify-center items-center text-black font-bold w-7 h-7'>
                    <BsPlus className='text-3xl' />
                  </div>
                </div>
                <div className='absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center'>

                  <div className='flex justify-center items-center text-black font-bold w-7 h-7'>
                    <BsPlus className='text-3xl' />
                  </div>

                </div>
              </div>

                <div className="p-3">
                  <div className="mb-1 text-gray-500 capitalize text-md">
                    {produit.categorie}
                  </div>
                  <div className="mb-1 text-gray-500 capitalize text-md">
                    {produit.nom}
                  </div>
                  <div className="font-semi-bold">{produit.prix} FCFA</div>
                </div>

            </div>
          ))}
        </div>
    </div>
  );
};

export default Arrivals;
