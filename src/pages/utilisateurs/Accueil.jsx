import React, { useContext } from "react";
import Navbar from "./NavbarUtilisateut/Navbar/Navbar";
import Header from "../../usersComponents/headerUserComponent/Header";
import ScrollingText from "../../usersComponents/cards/ScrollingText";
import useGlobal from "../../utils/hooks/useGlobal";
import Locale from "../../usersComponents/cards/Locale";
import { ProduitsContext } from "../../utils/contexte/ProduitsContext";
import CardProduit from "../../usersComponents/cards/CardProduit";
import Loader from "../../components/loader/loader";

export default function Accueil() {
  const { produits } = useContext(ProduitsContext);
  const { setDropdown } = useGlobal();
  const categories = ["Chaussures", "Accessoires", "Vetements"];

  return (
    <div>
      <Navbar className="fixed top-0 z-50 w-full bg-white" />
      <div className="mt-[50px] md:mt-0" onClick={() => setDropdown(false)}>
        <Header />
        <div className="flex flex-col  px- pt-5 md:px-[10px] sm:px-0">
          {categories.map((categorie) => (
            <section key={categorie} className="">
              <h2 className="text-2xl font-bold px-4 md:px-9">{categorie}</h2>
              <div className=" " data-aos="zoom-in">
                {produits.length > 0 ? (
                  <div className="grid w-full px-4 md:ps-9 md:pe-9 mb-8 grid-cols-1 mt-5   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
                    {produits
                      .filter((produit) => produit.categorie === categorie)
                      .slice(0, 5)
                      .map((produit) => (
                        <CardProduit produit={produit} key={produit._id} />
                      ))}
                  </div>
                ) : (
                  <Loader />
                )}
              </div>
            </section>
          ))}

          <div className="px:4 md:px-9">
            <ScrollingText />
          </div>
          <div className="px:4 md:px-9">
            <Locale />
          </div>
        </div>
      </div>
    </div>
  );
}
