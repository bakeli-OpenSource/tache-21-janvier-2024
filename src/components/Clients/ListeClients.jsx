import React, { useEffect, useState } from 'react'
import useSidebare from '../../utils/hooks/useSidebare'
import HeaderTable from '../headerTable/HeaderTable'
import Table from '../table/Table'
import axiosInstance from '../../utils/axiosInstance'
// import Toast from '../toast/Toast'

const ListeClients = () => {
    const {open, closedrop} = useSidebare()
    const [client, setClient] = useState([])

    const table = [
        'Nom', 'Adresse', 'Email', 'Téléphone'
      ]

      useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axiosInstance.get("/client");
                const modifiedData = response.data.map(obj => {
                    return {
                      nomCli: obj.nom,
                      prenomCli: obj.prenom,
                      emailCli: obj.email,
                      adresseCli: obj.adresse,
                      telCli: obj.telephone,
                    };
                });
                setClient(modifiedData);
            } catch (error) {
                console.error("Erreur lors de la récupération des clients:", error);
            }
        };
        fetchClients();
    }, [client]);

  

      // console.log(client);
  return (
    <div onClick={closedrop} className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <div className='my-7 mb-9'>
        <HeaderTable />
      </div>
      <Table thead={table} tbody={client} /> 
      {/* <Toast message="Test" /> */}
    </div>
  )
}

export default ListeClients
