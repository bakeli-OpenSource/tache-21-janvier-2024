import React from "react";
import { PieChart, Legend, Pie, Cell } from "recharts";


const Graphique2 = () => {


  const data = [
    { name: "Value1", users: 2000000000 },
    { name: "Value2", users: 1500000000 },
    { name: "Value3", users: 1000000000 },
    { name: "Value4", users: 200000000 },
  ];

  const COLORS = ["rgb(30 58 138)", "rgb(161 98 7)", "rgb(101 163 13)", "rgb(14 165 233)"];

  return (
    <div className='basis-[50%] w-[31.2rem]  border bg-white shadow-md cursor-pointer rounded-[4px] mr-[20px]'>
      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
          <h2 className='text-white text-[16px] leading-[19px] font-bold'>Revenue</h2>
      </div>
      <div className="text-lg">
        <PieChart width={500} height={450}>
        <Legend
          className=""
          verticalAlign="top" 
          width={500}
        />
          <Pie
            nameKey="name"
            dataKey="users"
            isAnimationActive={true}
            data={data}
            cx={250}
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



