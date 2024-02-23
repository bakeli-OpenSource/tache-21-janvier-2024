

import React from "react";
import Filtre from "../../components/cards-et-filtre/Filtre";
import Revenue from "./Revenue";
import useSidebare from "../../utils/hooks/useSidebare";
// import ListeProd from './ListeProd'
import ListeProduit from './ListeProduit'
import Graphique2 from "./graphique2/Graph";
import Cards from "../../components/cards-et-filtre/Cards";


const Dashboard = () => {
  const { open } = useSidebare();

  return (
    <div className={`${open ? "md:ml-[230px] " : "md:ml-[85px] m-3 mb-0"} m-5 mb-0`}>
      <div className="container text-xl font-bold ">
        <div className="flex justify-end">
          <Filtre />

        </div>
        <div>
          <Cards />
        </div>
      </div>


      <div className="md:flex md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="line-chart-container md:w-full lg:w-[25rem] xl:w-auto overflow-auto">
          <Revenue />
        </div>
        <div className="pie-chart-container md:w-full lg:w-auto">
          <Graphique2 />
        </div>
      </div>

      <div>
        <ListeProduit />
        {/* <ListeProd /> */}
      </div>

    </div>
  )
}

export default Dashboard;
