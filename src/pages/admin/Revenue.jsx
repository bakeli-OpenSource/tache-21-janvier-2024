import React, { useState, useEffect } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';
import axiosInstance from "../../utils/axiosInstance";

const datas = [
  {
    categorie: 'Vetements',
    vente: 1000,
  },
  {
    categorie: 'Accessoires',
    vente: 3000,
  },
  {
    categorie: 'Chaussures',
    vente: 1500,
  }
];

function Revenue() {
 
  const [categories, setCategories] = useState([])
  const [categoriesNames, setCategoriesNames] = useState([])

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data);
      console.log("Catégories récupérées avec succès");
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  useEffect(()=>{
    fetchCategories()
    setCategoriesNames(categories.map((categorie) => categorie.nom));

  }, [])

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
          <XAxis dataKey="categorie" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="vente" stroke="black" fill="#8884d8" activeDot={{ r: 8 }} />
        </AreaChart>
      </div>
  );
}

export default Revenue;
