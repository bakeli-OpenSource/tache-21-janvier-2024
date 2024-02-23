import React, { useState, useEffect } from "react";
import { PieChart, Legend, Pie, Cell } from "recharts";


const Graphique2 = () => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth > 1225 ? 500 : 230);
  const [chartPosition, setChartPosition] = useState("center");

  const data = [
    { name: "Value1", users: 2000000000 },
    { name: "Value2", users: 1500000000 },
    { name: "Value3", users: 1000000000 },
    { name: "Value4", users: 200000000 },
  ];

  const COLORS = ["rgb(30 58 138)", "rgb(161 98 7)", "rgb(101 163 13)", "rgb(14 165 233)"];

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth > 1225 ? 500 : 230); // Mise à jour de la largeur du graphique en fonction de la taille de l'écran
      setChartPosition(window.innerWidth > 1225 ? "center" : "center");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Exécuté uniquement lors du montage et du démontage du composant

  return (
    <div className='md:w-[15rem] lg:w-[23rem] xl:w-[38rem] border bg-white shadow-md cursor-pointer rounded-[4px] mr-[20px]'>

      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
          <h2 className='text-white text-[16px] leading-[19px] font-bold'>Produit</h2>
      </div>
      <div className="text-[16px]">
        <PieChart width={chartWidth} height={450}>
        <Legend
          verticalAlign="top" 
        />
          <Pie
            nameKey="name"
            dataKey="users"
            isAnimationActive={true}
            data={data}
            cx={chartPosition}
            cy={200}
            outerRadius={100}
            fill="#8884d"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Graphique2;




