import React, { useState, useEffect } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';

const datas = [
  {
    jour: 'Lun',
    total: 4000,
  },
  {
    jour: 'Mar',
    total: 3000,
  },
  {
    jour: 'Mer',
    total: 2000,
  },
  {
    jour: 'Jeu',
    total: 2780,
  },
  {
    jour: 'Ven',
    total: 1890,
  },
  {
    jour: 'Sam',
    total: 2390,
  },
  {
    jour: 'Dim',
    total: 3490,
  }
];

function Revenue() {
 
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
          <XAxis dataKey="jour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="total" stroke="black" fill="#8884d8" activeDot={{ r: 8 }} />
        </AreaChart>
      </div>
  );
}

export default Revenue;
