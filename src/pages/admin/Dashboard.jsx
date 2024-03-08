import React, { useContext, useEffect, useState } from "react";
import Filtre from "../../components/cards-et-filtre/Filtre";
import Revenue from "./Revenue";
import useSidebare from "../../utils/hooks/useSidebare";
import ListeProduit from "./ListeProduit";
import Graphique2 from "./graphique2/Graph";
import Cards from "../../components/cards-et-filtre/Cards";
import ProduitContextProvider, {
  ProduitsContext,
} from "../../utils/contexte/ProduitsContext";
import useProduits from "../../utils/hooks/useProduits";

const Dashboard = () => {
  const { open, closedrop } = useSidebare();

  // const { filtreProduits, filtreProdCategorie, produits } = useProduits();
  // const {handleSelectChangeCategorie} = useContext(ProduitsContext)

  const {
    filtreProduits,
    produits,
    filtreProdCategorie,
    fetchProduit,
    setCategoryNames,
    setFiltreProduits,
    categories,
    categoryNames,
    handleSelectChangeCategorie,

    fetchCategories,
  } = useProduits();

  useEffect(() => {
    filtreProdCategorie();
    // fetchProduit();
  }, [produits]);

  

  useEffect(() => {
    setCategoryNames(categories.map((categorie) => categorie.nom));
  }, [categories]);

  useEffect(() => {
    fetchCategories();
  }, []);

  // useEffect(() => {
  // 	filtreProdCategorie();
  //   }, [produits]);

  return (
    <div>
      <div
        onClick={closedrop}
        className={`${
          open ? "md:ml-[230px] " : "md:ml-[85px] m-3 mb-0"
        } m-5 mb-0`}
      >
        <div className="container text-xl font-bold ">
          <div>
            <Cards />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className={`w-full lg:mr-[4rem] lg:w-3/5 `}>
            <Revenue />
          </div>
          <div className="w-full lg:w-2/6 ">
            <Graphique2 />
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <ProduitContextProvider>
            <Filtre
              categoryNames={categoryNames}
              handleSelectChangeCategorie={handleSelectChangeCategorie}
            />
          </ProduitContextProvider>
        </div>

        <div className="mt-5">
          <ListeProduit tbody={filtreProduits} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
