import React, { useEffect, useState } from 'react'
import useSidebare from '../../utils/hooks/useSidebare'
import HeaderTable from '../headerTable/HeaderTable'
import axios from 'axios'
import Table from '../table/Table'
// import Toast from '../toast/Toast'

const ListeClients = () => {
    const {open} = useSidebare()
    const [client, setClient] = useState([])

    const table = [
        'Prénom', 'Nom', 'Email',  'Adresse', 'Téléphone'
      ]

      useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get("https://kay-solu-api.onrender.com/api/client");
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
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <div className='my-7 mb-9'>
        <HeaderTable />
      </div>
      <Table thead={table} tbody={client} /> 
      {/* <Toast message="Test" /> */}
    </div>
  )
}

export default ListeClients
