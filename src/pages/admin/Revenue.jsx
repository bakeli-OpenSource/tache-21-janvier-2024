
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
    <div className="border bg-white shadow-md rounded-[4px] mr-[20px] w-full">
      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
        <h2 className='text-white text-[16px] leading-[19px] font-bold'>Revenue</h2>
      </div>

        <AreaChart

          width={350}
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
