

import React from "react";
import Cards from "../../components/cards-et-filtre/Cards";
import Filtre from "../../components/cards-et-filtre/Filtre";
import Revenue from "./Revenue";
import useSidebare from "../../utils/hooks/useSidebare";
import Graphique2 from './graphique2/Graph'
import ListeProduit from "./ListeProduit";


const Dashboard = () => {
  const { open } = useSidebare();

  return (
    <div
      className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}
    >
      <div className="container text-xl font-bold ">
        <div className="flex justify-end">
          <Filtre />

        </div>
        <div>
          <Cards />
        </div>
      </div>


      <div className='flex w-full flex-wrap'>
        <div className='w-[1/2]'>
          <Revenue />
        </div>
        <div className='w-[1/2]'>
          <Graphique2 />
        </div>
      </div>

      <div>
        {/* <ListeProduit /> */}
        {/* <ListeProd /> */}
      </div>
    
    </div>
  )
}

export default Dashboard;
