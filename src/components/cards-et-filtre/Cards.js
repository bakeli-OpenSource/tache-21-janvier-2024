import React from "react";
import UniteCard from "./UniteCard";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const Cards = () => {
  return (
    <div className=" py-16 grid lg:grid-cols-12 md:grid-cols-6   gap-6 ">
      <UniteCard bgColor="border-s-4 border-sky-500 shadow-2xl ">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>101.5 k</h5>
            </div>
            <div className="bg-sky-500 rounded-full h-8 w-8 flex flex place-items-center justify-center">
              <MdOutlineKeyboardCommandKey className="text-2xl text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Nombre de commandes</p>
          </div>
        </div>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-lime-600 shadow-2xl">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>101.5 k</h5>
            </div>
            <div className="bg-lime-600 rounded-full h-8 w-8 flex flex place-items-center justify-center">
              <AiOutlineLoading3Quarters className="text-2xl text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Commandes en cours</p>
          </div>
        </div>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-yellow-700 shadow-2xl">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>101.5 k</h5>
            </div>
            <div className="bg-yellow-700 rounded-full h-8 w-8 flex flex place-items-center justify-center">
              <MdDeliveryDining className="text-2xl text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Commandes en livraison</p>
          </div>
        </div>
      </UniteCard>
      <UniteCard bgColor="border-s-4 border-blue-900 shadow-2xl">
        <div>
          <div className="flex justify-between px-3">
            <div>
              <h5>101.5 k</h5>
            </div>
            <div className="bg-blue-900 rounded-full h-8 w-8 flex flex place-items-center justify-center">
              <AiOutlineDeliveredProcedure className="text-xl text-white " />
            </div>
          </div>
          <div>
            <p className="text-sm m-3">Commande livrées</p>
          </div>
        </div>
      </UniteCard>
    </div>
  );
};

export default Cards;
