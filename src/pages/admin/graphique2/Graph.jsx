import React, { useState, useEffect } from 'react';
import { PieChart, Legend, Pie, Cell } from "recharts";
import axiosInstance from '../../../utils/axiosInstance';

const Graphique2 = () => {
  const [produitPlusVnedu, setProduitPlusVnedu] = useState([]);
  const [chartPosition, setChartPosition] = useState("center");
  useEffect(() => {
    const fetchProduitPlusVnedu = async () => {
      try {
        const response = await axiosInstance.get('/produits');
        const trierProduits = response.data.sort((a, b) => b.vente - a.vente); 
        const top5Produits = trierProduits.slice(0, 5); 
        setProduitPlusVnedu(top5Produits);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };

    fetchProduitPlusVnedu();
  }, []);

  useEffect(() => {
    const handleResize = () => {

      // Déterminez la position en fonction de la largeur de la fenêtre
      setChartPosition(window.innerWidth > 768 ? "center" : "right");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  const COLORS = ["rgb(30 58 138)", "rgb(161 98 7)", "rgb(101 163 13)", "rgb(14 165 233)", "rgb(188 38 66)"];

  return (
      <div className="border bg-white shadow-md cursor-pointer rounded-[4px] mr-[20px] w-[100%]">
      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
        <h2 className='text-white text-[16px] leading-[19px] font-bold'>5 produits les plus vendus</h2>
      </div>
      <PieChart width={400} height={450}>
        <Legend verticalAlign="top" />
        <Pie
          data={produitPlusVnedu}
          dataKey="vente"
          nameKey="nom"
          cx={chartPosition}
          cy={200}
          outerRadius={100}
          fill="#8884d"
          label
          
        >
          {produitPlusVnedu.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Graphique2;
