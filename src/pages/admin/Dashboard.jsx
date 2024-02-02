import React from 'react'
import Cards from '../../components/cards-et-filtre/Cards'
import Filtre from '../../components/cards-et-filtre/Filtre'
import Revenue from './Revenue'
// import Graphique2 from './graphique2/Graphique2'

const Dashboard = () => {
  
  return (

    <div className='my-3'>
      <div className=' text-xl font-bold underline'>Dashboard</div>
      <div className='m-3 text-xl container font-bold '>
        <div className='flex justify-between'>
          <Filtre/>
        </div>
        <div>
          <Cards/>
        </div> 
      </div>
    <div className='flex justify-between'>
      <div>
        <Revenue />
      </div>
      <div>
        {/* <Graphique2 /> */}
      </div>
    </div>
    
    </div>
  )
}

export default Dashboard

