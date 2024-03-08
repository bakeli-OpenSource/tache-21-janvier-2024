import React, { useContext, useEffect, useState } from "react";
import Header from "../../usersComponents/headerUserComponent/Header";
import useGlobal from "../../utils/hooks/useGlobal";
import Locale from "../../usersComponents/cards/Locale";
import { ProduitsContext } from "../../utils/contexte/ProduitsContext";
import CardProduit from "../../usersComponents/cards/CardProduit";
import Loader from "../../components/loader/loader";
import Commentaire from "../../usersComponents/cards/Commentaire";
import LoaderCard from "../../usersComponents/loaderCard/LoaderCard";
import axiosInstance from "../../utils/axiosInstance";

export default function Accueil() {
  const { produits, fetchProduit } = useContext(ProduitsContext);
 

  useEffect(() => {
    fetchProduit();
  }, [produits]);
  const { setDropdown } = useGlobal();
  const categories = ["Chaussures", "Accessoires", "Vetements"];

  return (
    
    <div>
      <div className="mt-[50px] md:mt-0" onClick={() => setDropdown(false)}>
        <Header />
        <div  className="flex flex-col  px- pt-5 md:px-[10px] sm:px-0">
          {categories.map((categorie) => (
            <section  key={categorie} className="">
              <h2 className="text-2xl font-bold px-4 md:px-9">{categorie}</h2>
              <div className=" " >
                {produits.length > 0 ? (
                  <div data-aos="zoom-in" className="grid w-full px-4 md:ps-9 md:pe-9 mb-8 grid-cols-1 mt-5   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
                    {produits
                      .filter((produit) => produit.categorie === categorie)
                      .slice(0, 5)
                      .map((produit) => (
                        <CardProduit produit={produit} key={produit._id} />
                      ))}
                  </div>
                ) : (
                  <LoaderCard />
                )}
              </div>
            </section>
          ))}

          <div className="px-4 md:px-9"> 
            <Locale />
          </div>
          {/* <div>
            <Commentaire />
          </div> */}
        </div>
      </div>
    </div>
  );
}
