// import React, { PureComponent } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { curveCardinal } from 'd3-shape';

// const data = [
//   {
//     name: 'Lun',
//     uv: 2700,
//   },
//   {
//     name: 'Mar',
//     uv: 3000,
//   },
//   {
//     name: 'Mer',
//     uv: 2000,
//   },
//   {
//     name: 'Jeu',
//     uv: 2780,
//   },
//   {
//     name: 'Ven',
//     uv: 1890,
//   },
//   {
//     name: 'Sam',
//     uv: 2390,
//   },
//   {
//     name: 'Dim',
//     uv: 3490,
//   },
// ];

// const cardinal = curveCardinal.tension(0.2);

// function Revenue() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
// }

// export default Revenue;








import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';

const datas = [
  {
    mois: 'Jan',
    total: 4000,
  },
  {
    mois: 'Fev',
    total: 3000,
  },
  {
    mois: 'Mars',
    total: 2000,
  },
  {
    mois: 'Avr',
    total: 2780,
  },
  {
    mois: 'Mai',
    total: 1890,
  },
  {
    mois: 'Juin',
    total: 2390,
  },
  {
    mois: 'Juil',
    total: 3490,
  },
  {
    mois: 'Août',
    total: 5000,
  },
  {
    mois: 'Sept',
    total: 3000,
  },
  {
    mois: 'Oct',
    total: 1900,
  },
  {
    mois: 'Nov',
    total: 2750,
  },
  {
    mois: 'Dec',
    total: 7000,

  },
];

function Revenue() {
  // Position par défaut

  return (
    <div className="border bg-white shadow-md cursor-pointer rounded-[4px] mr-[20px] w-[100%]">
      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
        <h2 className='text-white text-[16px] leading-[19px] font-bold'>Revenue</h2>
      </div>

        <AreaChart

          width={500}
          height={450}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mois" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="total" stroke="black" fill="#8884d8" activeDot={{ r: 8 }} />
        </AreaChart>


      </div>
  );
}

export default Revenue;
