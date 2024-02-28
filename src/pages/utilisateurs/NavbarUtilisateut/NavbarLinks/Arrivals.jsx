import React, { useContext, useEffect, useState } from "react";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import axios from "axios";
import { BsPlus } from "react-icons/bs";
import { Rating } from 'react-simple-star-rating'

  
const Arrivals = () => {
  const { rating, setRating } = useState(0);
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
            <div className="mb-1 text-gray-500 capitalize text-md">
                    {produit.nom}
                  </div>
            <div className="font-semi-bold">{produit.prix} FCFA</div>
          </div>
        ))}
      </div>
    </div>
  );

   
};

export default Arrivals;
