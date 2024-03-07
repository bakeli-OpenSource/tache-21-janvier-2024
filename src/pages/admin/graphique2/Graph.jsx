import React, { useState, useEffect } from 'react';
import { PieChart, Legend, Pie, Cell } from "recharts";
import axiosInstance from '../../../utils/axiosInstance';

const Graphique2 = () => {

  const [produitPlusVnedu, setProduitPlusVnedu] = useState([]);
  useEffect(() => {
    const fetchProduitPlusVnedu = async () => {
      try {
        const response = await axiosInstance.get('/produits');
        const trierProduits = response.data.sort((a, b) => b.vente - a.vente); 
        const top5Produits = trierProduits.slice(0, 4); 
        setProduitPlusVnedu(top5Produits);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };

    fetchProduitPlusVnedu();
  }, []);


  const colors = ["rgb(30 58 138)", "rgb(161 98 7)", "rgb(101 163 13)", "rgb(14 165 233)", "rgb(188 38 66)"];
  const radian = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * radian);
    const y = cy + radius * Math.sin(-midAngle * radian);
  
    return ( 
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
  return (
      <div className="border bg-white shadow-md cursor-pointer rounded-[4px] mr-[20px] w-[100%]">
      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
        <h2 className='text-white text-[16px] leading-[19px] font-bold'>Les 4 produits les plus vendus</h2>
      </div>

      <PieChart width={350} height={450}>
        <Legend verticalAlign="top" />
        <Pie
          data={produitPlusVnedu}
          dataKey="vente"
          nameKey="nom"
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d"
          label={renderCustomizedLabel}
          
        >
          {produitPlusVnedu.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Graphique2;
