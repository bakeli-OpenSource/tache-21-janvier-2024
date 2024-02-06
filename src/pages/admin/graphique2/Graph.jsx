import React from "react";
import { PieChart, Legend, Pie, Cell } from "recharts";


const Graphique2 = () => {


  const data = [
    { name: "Value1", users: 2000000000 },
    { name: "Value2", users: 1500000000 },
    { name: "Value3", users: 1000000000 },
    { name: "Value4", users: 200000000 },
  ];

  const COLORS = ["rgb(7, 15, 246)", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <div className="pie-chart-container bg-white rounded">
        <PieChart width={400} height={400}>
        <Legend
          verticalAlign="top" 
        />
          <Pie
            nameKey="name"
            dataKey="users"
            isAnimationActive={true}
            data={data}
            cx={200}
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



