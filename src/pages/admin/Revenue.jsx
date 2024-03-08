import React, { useState, useEffect, useContext } from "react";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
} from "recharts";
import axiosInstance from "../../utils/axiosInstance";
import { ProduitsContext } from "../../utils/contexte/ProduitsContext";

function Revenue() {
  const [categories, setCategories] = useState([]);
  const { produits, fetchProduit } = useContext(ProduitsContext);

  useEffect(() => {
    fetchProduit();
  }, [produits]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        setCategories(response.data);
        console.log("Catégories récupérées avec succès");
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchVentesByCategory = (categoryName) => {
    const prodByCategory = produits.filter(
      (prod) => prod.categorie === categoryName
    );
    return prodByCategory.reduce(
      (totalVentes, prod) => totalVentes + prod.vente,
      0
    );
  };

  const datas = categories.map((category) => ({
    categorie: category.nom,
    ventes: fetchVentesByCategory(category.nom),
  }));

  return (
    <div className="border bg-white shadow-md rounded-[4px] mr-[20px] w-full">
      <div className="bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
        <h2 className="text-white text-[16px] leading-[19px] font-bold">
          Suivie vente / catégorie
        </h2>
      </div>
      <AreaChart
        width={550}
        height={450}
        data={datas}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categorie" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="ventes"
          stroke="blue"
          fill="#8884d8"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </div>
  );
}

export default Revenue;
