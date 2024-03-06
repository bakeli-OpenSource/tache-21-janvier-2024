import React, { useEffect, useState } from 'react';
import useCommandes from '../../../utils/hooks/useCommandes';
import HeaderTable from '../../headerTable/HeaderTable';
import Table from '../../table/Table';
import useSidebare from '../../../utils/hooks/useSidebare';
import { useNavigate } from 'react-router-dom';
import { TbEyeShare } from 'react-icons/tb';
import { MdEdit } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';


const FilterCommendeEnLivraison = () => {
  const {
    table,
    commandes,
    handleSubmit,
    setSelectsValue,
    handleDelete,
    setEtat,
    setShowModal,
    setEditingCommandeId
  } = useCommandes();

  const { open, closedrop } = useSidebare();

  const navigate = useNavigate();

  const [setIsEditing] = useState(false);

  // Filtrer les commandes en attente
  const commandesEnAttente = commandes.filter(commande => commande.etat === 'en livraison');

  const actions = [
    {
      icon: <TbEyeShare />,
      color: 'bg-green-500',
      handleClick: (id) => {
        localStorage.setItem("commandeIdCli", id)
        navigate('/admin/commandes/' + id);
      },
    },
    {
      icon: <MdEdit />,
      color: 'bg-orange-500',
      handleClick: (commandeId) => {
        commandesEnAttente.map((commande) => {
          if (commande._id === commandeId) {
            setEtat(commande.etat);
          }
        });
        setShowModal(true);
        setEditingCommandeId(commandeId);
      },
    },
    {
      icon: <MdOutlineDelete />,
      color: 'bg-red-600',
      handleClick: (commandeId) => {
        handleDelete(commandeId);
      },
    },
  ];

  return (
    <div onClick={closedrop} className={`${open ? 'md:ml-[225px]' : 'md:ml-[85px]'} m-4 `}>
      <HeaderTable
        title="Commandes"
        nomAjout="Modification Etat commande"
        body={
          <form onSubmit={handleSubmit} className="w-50 md:w-1/2 px-3 my-6 md:mb-0" >
            <select className="mt-1 p-2 bg-gray-200 border focus:border text-gray-700 focus:border-double focus:border-sky-600 outline-none rounded-md w-75" onChange={(e) => setSelectsValue(e.target.value)}>
              <option value="" disabled>Sélectionnez un état</option>
              <option value="en attente">En attente</option>
              <option value="en cours">En cours</option>
              <option value="en livraison">En livraison</option>
              <option value="livrée">Livrée</option>
            </select>
            <div className=' w-full mt-6'>
              <button className='mx-3 text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-gray-850 shadow-lg shadow-gray-500/50 dark:shadow-sm font-medium rounded-lg text-sm px-5 py-3 text-center  me-2 mb-2'>
                Enregistrer
              </button>
            </div>
          </form>
        }

      />
      <Table thead={table} tbody={commandesEnAttente} actions={actions} />
    </div>
  );

};

export default FilterCommendeEnLivraison
