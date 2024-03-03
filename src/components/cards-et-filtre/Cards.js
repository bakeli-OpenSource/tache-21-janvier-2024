import React, { useContext, useEffect } from "react";
import UniteCard from "./UniteCard";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Cards = ({ commandes }) => {
  const [maCommande, setMaCommande] = useState([]);

  const [selectedState, setSelectedState] = useState("");

  // Fonction de filtrage des commandes par état
  const filterByState = (commandes) => {
    if (!selectedState) {
      return commandes; // Si aucun état sélectionné, retourner toutes les commandes
    }
    return commandes.filter((commande) => commande.etat === selectedState);
  };

  // Appelé lorsque l'utilisateur change l'état sélectionné dans le formulaire de filtrage
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  // Filtrer les commandes en fonction de l'état sélectionné
  const filteredCommandes = filterByState(commandes);
  // console.log(commandes);

  useEffect(() => {
    const afficheCommande = async () => {
      try {
        const response = await axiosInstance.get(
          "/commandes"
        );
        setMaCommande(response.data);
      } catch (error) {
        console.error("Erreur de fetching des produits:", error);
      }
    };
    afficheCommande();
  }, []);

  const filterEtat = maCommande.filter((item) => {
    return item.etat === "en attente";
  });

  const filterEtat1 = maCommande.filter((item1) => {
    return item1.etat === "en cours";
  });
  const filterEtat2 = maCommande.filter((item2) => {
    return item2.etat === "en livraison";
  });

  const filterEtat3 = maCommande.filter((item3) => {
    return item3.etat === "livrée";
  });

  return (
    <div className=" py-16 grid lg:grid-cols-12 md:grid-cols-6 gap-6 ">
      <UniteCard bgColor="border-s-4 border-lime-600">
        <Link to="/admin/dashboard/EnAttente">
          <div>
            <div className="flex justify-between px-3">
              <div>
                <h5>{filterEtat.length}</h5>
              </div>
              <div className="bg-lime-600 rounded-full h-8 w-8 flex  place-items-center justify-center">
                <AiOutlineLoading3Quarters className="text-2xl text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <p className="text-sm m-3">Commandes en attente</p>
            </div>
          </div>
        </Link>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-yellow-700">
        <Link to="/admin/dashboard/EnCours">
          <div>
            <div className="flex justify-between px-3">
              <div>
                <h5>{filterEtat1.length}</h5>
              </div>
              <div className="bg-yellow-700 rounded-full h-8 w-8 flex  place-items-center justify-center">
                <MdDeliveryDining className="text-2xl text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <p className="text-sm m-3">Commandes en cours</p>
            </div>
          </div>
        </Link>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-blue-900">
        <Link to="/admin/dashboard/EnLivraison">
          <div>
            <div className="flex justify-between px-3">
              <div>
                <h5>{filterEtat2.length}</h5>
              </div>
              <div className="bg-blue-900 rounded-full h-8 w-8 flex place-items-center justify-center">
                <Link to="/filtrageCommande">
                  <AiOutlineDeliveredProcedure className="text-xl text-white cursor-pointer" />
                </Link>
              </div>
            </div>
            <div>
              <p className="text-sm m-3">Commande en livraison</p>
            </div>
          </div>
        </Link>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-blue-900">
        <Link to="/admin/dashboard/Traite">
          <div>
            <div className="flex justify-between px-3">
              <div>
                <h5>{filterEtat3.length}</h5>
              </div>
              <div className="bg-sky-500 rounded-full h-8 w-8 flex place-items-center justify-center">
                <TbTruckDelivery className="text-xl text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <p className="text-sm m-3">Commandes livrées</p>
            </div>
          </div>
        </Link>
      </UniteCard>
    </div>
  );
};

export default Cards;
