import React from "react";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/loader";

export default function ListeProdDashboard({ produits }) {
  const table = ["Article", "Quantité", "Prix"];

  if (!produits || produits.length === 0) {
    return (
      <p className="text-center text-gray-600">
        Aucun produit avec des ventes disponibles.
      </p>
    );
  }

  // Filtrer les produits qui ont des ventes
  const produitsAvecVentes =
    produits && produits.filter((product) => product.vente > 0);

  return (
    <div className="w-full my-3 mr-5">
      <div className="bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
        <h2 className="text-white text-[16px] leading-[19px] font-bold">
          Produits Vendus
        </h2>
      </div>
      {produitsAvecVentes.length !== 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {produitsAvecVentes.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
