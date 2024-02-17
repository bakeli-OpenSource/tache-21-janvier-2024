

import React from "react";
import Cards from "../../components/cards-et-filtre/Cards";
import Filtre from "../../components/cards-et-filtre/Filtre";
import Revenue from "./Revenue";
import useSidebare from "../../utils/hooks/useSidebare";
import Graphique2 from './graphique2/Graph'
// import ListeProd from './ListeProd'
import ListeProduit from './ListeProduit'


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


      <div className='flex container justify-between flex-wrap'>
        <div>
          <Revenue />
        </div>
        <div >
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
