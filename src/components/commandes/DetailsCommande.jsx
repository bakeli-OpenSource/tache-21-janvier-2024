import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';


const DetailsCommande = () => {
 
  const {open} = useSidebare()


  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore incidunt modi non velit assumenda laudantium est delectus explicabo qui, ut adipisci eveniet reprehenderit dolorum, impedit unde, nemo molestiae debitis?
      </p>
    </div>
  )
}

export default DetailsCommande;
