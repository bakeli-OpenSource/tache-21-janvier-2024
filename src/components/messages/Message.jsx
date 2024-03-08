import React, { useEffect, useState } from 'react'

import Table from '../table/Table'
import useSidebare from '../../utils/hooks/useSidebare'
import HeaderTable from '../headerTable/HeaderTable'
import { useNavigate } from 'react-router-dom'
import { TbEyeShare } from 'react-icons/tb'
import { MdOutlineDelete } from 'react-icons/md'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../utils/axiosInstance'

const Message = () => {
    const navigate = useNavigate()
    const {open, closedrop} = useSidebare()
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
            deleteMessage(id)
          }
        }
      ]

      // Suppression Produit
      const deleteMessage = async (id) => {
        try {
          await axiosInstance.delete(`/messages/${id}`);

          const updatedMessgage = message.filter(
            (mes) => mes._id !== id
          );
          setMessage(updatedMessgage);
          toast.error('Message supprimée avec succès!');
        } catch (error) {
          navigate("/error")
          console.error("Erreur lors de la suppression du Message:", error);
          toast.error('Erreur lors de la suppression du message!');
        }
      };


      useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axiosInstance.get("/messages");
                const modifiedData = response.data.map(obj => {
                    return {
                      _id: obj._id,
                      nomMes: obj.prenomNom,
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

  

  return (
    <div onClick={closedrop} className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <div className='my-7 mb-9'>
        <HeaderTable />
      </div>
      <Table thead={table} tbody={message} actions={actions} /> 
    </div>
  )
}

export default Message
