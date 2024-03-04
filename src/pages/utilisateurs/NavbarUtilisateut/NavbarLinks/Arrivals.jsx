import React, { useContext, useEffect, useState } from "react";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import useGlobal from "../../../../utils/hooks/useGlobal";
import Loader from "../../../../components/loader/loader";
import { usePanier } from "../../../../utils/contexte/PanierContext";
import CardProduit from "../../../../usersComponents/cards/CardProduit";
import axiosInstance from "../../../../utils/axiosInstance";
import LoaderCard from "../../../../usersComponents/loaderCard/LoaderCard";


const Arrivals = () => {
  const { produits } = useContext(ProduitsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = usePanier();
  const [produitAimer, setProduitAimer] = useState(() => {
    const listesEnvies = localStorage.getItem("produitAimer");
    return listesEnvies ? JSON.parse(listesEnvies) : [];
  });
  const { setDropdown } = useGlobal();
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axiosInstance.get(
          "/produits"
        );
        setFilteredProducts(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des nouveaux arrivages:",
          error
        );
      }
    };

    fetchNewArrivals();
  }, []);

  const sortProductsByDate = () => {
    const sortedProducts = produits.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    const latestProducts = sortedProducts.slice(0, 10).reverse(); 
    setFilteredProducts(latestProducts);
  };

  useEffect(() => {
    
      
    
    console.log(sortProductsByDate);
  }, [sortProductsByDate]);

  

  useEffect(() => {
    localStorage.setItem("produitAimer", JSON.stringify(produitAimer));
  }, [produitAimer]);

  return (
    <div
    data-aos="zoom-in"
      onClick={() => setDropdown(false)}
      className="px-9  mt-[50px] mx-auto z-0 flex flex-col  "
    >

      <div className="mt-[30px] ">
        {produits.length > 0 ? (
          <>
            <h1 className="mb-5">New Arrivals</h1>

            <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((produit) => (
                <CardProduit produit={produit} key={produit._id} />
              ))}
            </div>
          </>
        ) : (
          <LoaderCard />
        )}
      </div>
    </div>
  );
};
export default Arrivals;


