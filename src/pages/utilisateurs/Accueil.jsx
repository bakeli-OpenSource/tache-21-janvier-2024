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
      <div className="mt-[50px] md:mt-0" onClick={() => setDropdown(false)}>
        <Header />
        <div className="flex flex-col px-[35px] md:px-[10px] sm:px-0">
          {categories.map((categorie) => (
            <section key={categorie} className="py-10">
              <h2 className="text-2xl font-bold mb-4">{categorie}</h2>
              <div className="container mx-auto" data-aos="zoom-in">
                {produits.length > 0 ? (
                  <div className="grid px-0 md:ps-9 md:pe-9  grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
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

          <div>
            <ScrollingText />
          </div>
          <div>
            <Locale />
          </div>
        </div>
      </div>
    </div>
  );
}