import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";


const Graphique2 = () => {

  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 200000000 },
  ];

  const COLORS = ['rgb(7, 15, 246)', '#00C49F', '#FFBB28', '#FF8042'];
  return (

      <div class="">
      <div className="App text-center bg-white rounded mt-5">
        <PieChart width={400} height={400}>
          <Pie
             nameKey="name" 
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d"
            // label 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
      {/* <p class="border-left-4">Graphique</p> */}
    </div>
  )
}

export default Graphique2;

