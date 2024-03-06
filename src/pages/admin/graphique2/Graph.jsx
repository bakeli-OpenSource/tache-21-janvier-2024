import React, { useState, useEffect } from "react";
import { PieChart, Legend, Pie, Cell } from "recharts";


const Graphique2 = () => {
  // const [chartWidth, setChartWidth] = useState(window.innerWidth > 768 ? 500 : 500);
  const [chartPosition, setChartPosition] = useState("center"); // Position par défaut

  const data = [
    { name: "Value1", users: 2000000000 },
    { name: "Value2", users: 1500000000 },
    { name: "Value3", users: 1000000000 },
    { name: "Value4", users: 200000000 },
  ];

  const COLORS = ["rgb(30 58 138)", "rgb(161 98 7)", "rgb(101 163 13)", "rgb(14 165 233)"];

  useEffect(() => {
    const handleResize = () => {
      // setChartWidth(window.innerWidth > 768 ? 500 : 300);

      // Déterminez la position en fonction de la largeur de la fenêtre
      setChartPosition(window.innerWidth > 768 ? "center" : "right");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="text-[16px] bg-white border  shadow-md cursor-pointer rounded-[4px] mr-[20px] w-[100%]">
      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
        <h2 className='text-white text-[16px] leading-[19px] font-bold'>Produit</h2>
      </div>
      <PieChart width={350} height={450}>
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

  );
};

export default Graphique2;




