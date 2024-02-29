import React, { useState } from 'react';
import useCommandes from '../../../utils/hooks/useCommandes';
import HeaderTable from '../../headerTable/HeaderTable';
import Table from '../../table/Table';
import useSidebare from '../../../utils/hooks/useSidebare';
import { useNavigate } from 'react-router-dom';
import { TbEyeShare } from 'react-icons/tb';
import { MdEdit } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';

const FiltreCommandeEnAttente = () => {
  const { commandes, setSelectsValue, handleDetail, handleDelete, setEtat, setShowModal, setEditingCommandeId, handleSubmit, table } = useCommandes();
  const { open } = useSidebare();
  const navigate = useNavigate();
  const [setIsEditing] = useState(false);

  // Filtrer les commandes en attente
  const commandesEnAttente = commandes.filter(commande => commande.etat === 'en attente');

  const actions = [
    {
      icon: <TbEyeShare />,
      color: 'bg-green-500',
      handleClick: (commandeId) => {
        localStorage.setItem("commandeIdCli", commandeId)
        navigate('/admin/commandes/DetailsCommande');
        handleDetail(commandeId);
      },
    },
    {
      icon: <MdEdit />,
      color: 'bg-orange-500',
      handleClick: (commandeId) => {
        commandes.map((commande) => {
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
    <div className={`${open ? 'md:ml-[225px]' : 'md:ml-[85px]'} m-4 `}>
      <HeaderTable
        title="Commandes"
        body={
          <form onSubmit={handleSubmit}>
            <select onChange={(e) => setSelectsValue(e.target.value)}>
              <option value="en attente">En attente</option>
              <option value="en cours">En cours</option>
              <option value="en livraison">En livraison</option>
              <option value="livrée">Livrée</option>
            </select>
            <button type="submit">Valider</button>
          </form>
        }
      />
      <Table thead={table} tbody={commandesEnAttente} actions={actions} />
    </div>
  );
};

export default FiltreCommandeEnAttente;
