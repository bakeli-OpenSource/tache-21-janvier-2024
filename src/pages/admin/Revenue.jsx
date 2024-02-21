import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const datas = [
  {
    mois: 'Jan',
    uv: 4000,
    pv: 2400,
  },
  {
    mois: 'Fev',
    uv: 3000,
    pv: 1398,
  },
  {
    mois: 'Mars',
    uv: 2000,
    pv: 9800,
  },
  {
    mois: 'Avr',
    uv: 2780,
    pv: 3908,
  },
  {
    mois: 'Mai',
    uv: 1890,
    pv: 4800,
  },
  {
    mois: 'Juin',
    uv: 2390,
    pv: 3800,
  },
  {
    mois: 'Juil',
    uv: 3490,
    pv: 4300,
  },
  {
    mois: 'Août',
    uv: 5000,
    pv: 6000,
  },
  {
    mois: 'Sept',
    uv: 3000,
    pv: 2200,
  },
  {
    mois: 'Oct',
    uv: 1900,
    pv: 3000,
  },
  {
    mois: 'Nov',
    uv: 2750,
    pv: 6000,
  },
  {
    mois: 'Dec',
    uv: 7000,
    pv: 9000,
  },
];

function Revenue() {

  const [chartWidth, setChartWidth] = useState(window.innerWidth > 1225 ? 600 : 300);
  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth > 1225 ? 400 : 300); // Mise à jour de la largeur du graphique en fonction de la taille de l'écran
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (


    <div className='md:w-[15rem] lg:w-[23rem]  xl:w-[38rem] border bg-white shadow-md cursor-pointer rounded-[4px] mr-[20px]'>

      <div className='bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
        <h2 className='text-white text-[16px] leading-[19px] font-bold'>Revenue</h2>
      </div>

      <div className="w-full">
        <LineChart
          width={chartWidth}
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

      </div>
    </div>
  );
}

export default Revenue;
