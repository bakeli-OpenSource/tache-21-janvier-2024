import React, { useContext, useEffect } from "react";
import UniteCard from "./UniteCard";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

import axios from "axios";
import { useState } from "react";

const Cards = () => {
  const [maCommande, setMaCommande] = useState([]);

  useEffect(() => {
    const afficheCommande = async () => {
      try {
        const response = await axios.get(
          "https://kay-solu-api.onrender.com/api/commandes"
        );
        setMaCommande(response.data);
      } catch (error) {
        console.error("Erreur de fetching des produits:", error);
      }
    };
    afficheCommande();
  }, []);

  const filterEtat = maCommande.filter((item) => {
    return item.etat === "En cours";
  });

  const filterEtat1 = maCommande.filter((item1) => {
    return item1.etat === "traité";
  });
  const filterEtat2 = maCommande.filter((item2) => {
    return item2.etat === "non traité";
  });

  console.log(filterEtat1);

  return (
    <div className=" py-16 grid lg:grid-cols-12 md:grid-cols-6 gap-6 ">
      <UniteCard bgColor="border-s-4 border-sky-500  ">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>{maCommande.length}</h5>
            </div>
            <div className="bg-sky-500 rounded-full h-8 w-8 flex  place-items-center justify-center">
              <MdOutlineKeyboardCommandKey className="text-2xl text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Nombre de commandes</p>
          </div>
        </div>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-lime-600">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>{filterEtat.length}</h5>
            </div>
            <div className="bg-lime-600 rounded-full h-8 w-8 flex  place-items-center justify-center">
              <AiOutlineLoading3Quarters className="text-2xl text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Commandes en cours</p>
          </div>
        </div>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-yellow-700">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>{filterEtat1.length}</h5>
            </div>
            <div className="bg-yellow-700 rounded-full h-8 w-8 flex  place-items-center justify-center">
              <MdDeliveryDining className="text-2xl text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Commandes traitées</p>
          </div>
        </div>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-blue-900">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>{filterEtat2.length}</h5>
            </div>
            <div className="bg-blue-900 rounded-full h-8 w-8 flex place-items-center justify-center">
              <AiOutlineDeliveredProcedure className="text-xl text-white " />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Commande non traitées</p>
          </div>
        </div>
      </UniteCard>
    </div>
  );
};

export default Cards;
