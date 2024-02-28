import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Table from '../table/Table'
import useSidebare from '../../utils/hooks/useSidebare'
import HeaderTable from '../headerTable/HeaderTable'
import { useNavigate } from 'react-router-dom'
import { TbEyeShare } from 'react-icons/tb'
import { MdOutlineDelete } from 'react-icons/md'

const Message = () => {
    const navigate = useNavigate()
    const {open} = useSidebare()
    const [message, setMessage] = useState([])

    const table = [
        'Nom', 'Email', 'Téléphone', 'Actions'
      ]

      const actions = [
        {
          // Voire Détails
          icon: <TbEyeShare/>,
          color: 'bg-green-500',
          handleClick: (id) => {
            navigate(id);
            console.log(id);
          }
        },
        {
          // Suppression
          icon: <MdOutlineDelete />,
          color: 'bg-red-600',
          handleClick: (id) => {
            console.log(id);
          }
        }
      ]

      useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get("https://kay-solu-api.onrender.com/api/messages");
                const modifiedData = response.data.map(obj => {
                    return {
                      _id: obj._id,
                      nomCli: obj.prenomNom,
                      emailCli: obj.email,
                      telCli: obj.telephone,
                    };
                });
                setMessage(modifiedData);
                
            } catch (error) {
                console.error("Erreur lors de la récupération des clients:", error);
            }
        };
        fetchClients();
    }, [message]);

  

      // console.log(client);
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <div className='my-7 mb-9'>
        <HeaderTable />
      </div>
      <Table thead={table} tbody={message} actions={actions} /> 
    </div>
  )
}

export default Message
