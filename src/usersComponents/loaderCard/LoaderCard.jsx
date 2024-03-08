import React from "react";
import { FaStar } from "react-icons/fa";

const LoaderCard = () => {
  const contenue = ["1", "2", "3", "4", "5", "6", "3", "4", "5", "6"];
  return (
    <div className="animate-pulse">
      <h1 className="mb-5 h-6 rounded  bg-slate-200 w-24 "></h1>
      <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
        {contenue.map((contenu, index) => (
          <div key={index} className={`  ${contenu} rounded `}>
            <div className=" bg-slate-200 h-[300px] sm:h-[170px] relative overflow-hidden  transition"></div>
            <div className="p-2 flex flex-col justify-between">
              <div className="h-2 bg-slate-200 rounded mt-2 w-24 "></div>
              <div className="p- mt-2 text-">
                <div className="w-full text-slate-200 flex items-center justify- gap-1">
                  <FaStar className="cursor-pointer " size={16} />
                  <FaStar className="cursor-pointer " size={16} />
                  <FaStar className="cursor-pointer " size={16} />
                  <FaStar className="cursor-pointer " size={16} />
                  <FaStar className="cursor-pointer " size={16} />
                </div>
                <div className="flex gap-4 md:gap-2 mt-4 mb- md:mb-0 justify-">
                  <div className="rounded-md bg-slate-200 h-6 w-6"></div>
                  <div className="rounded-md bg-slate-200 h-6 w-6"></div>
                  <div className="rounded-md bg-slate-200 h-6 w-6"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoaderCard;
