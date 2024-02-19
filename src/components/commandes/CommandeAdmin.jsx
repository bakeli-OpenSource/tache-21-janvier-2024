import React, { useEffect } from 'react';
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '../formulaire/Formulaire';
import useGlobal from '../../utils/hooks/useGlobal';
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import axios from 'axios';

const CommandeAdmin = () => {
  const {
    table,
    commandes,
    email,
    quantite,
    price,
    setPrice,
    setEmail,
    date,
    etat,
    setEtat,
    setDate,
    setQuantite,
    setCommandes,
  } = useCommandes();

  const { open } = useSidebare();

  const inputs = [
    {
      label: 'Email',
      type: 'text',
      value: email,
      setValue: setEmail,
    },
    {
      label: 'Nombre',
      type: 'number',
      value: quantite,
      setValue: setQuantite,
    },
    {
      label: 'Date',
      type: 'date',
      value: date,
      setValue: setDate,
    },
    {
      label: 'Etat commande',
      type: 'select',
      value: etat,
      setValue: setEtat,
    },
    {
      label: 'Prix total',
      type: 'number',
      value: price,
      setValue: setPrice,
    },
  ];

  const navigate = useNavigate();

  const actions = [
    {
      icon: <TbEyeShare />,
      color: 'bg-green-500',
      hanldleClick: () => {
        console.log('Ca marche 1');
        navigate("DetailsCommande")
      },
    },
    {
      icon: <MdEdit />,
      color: 'bg-orange-500',
      hanldleClick: () => {
        console.log('Ca marche 2');
      },
    },
    {
      icon: <MdOutlineDelete />,                       
      color: 'bg-red-600',
      hanldleClick: (commandeId) => {
        handleDelete(commandeId);
      },
    },
  ];

  const handleSelectChange = (e) => {  
  };
  

  const { setShowModal } = useGlobal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      quantite: quantite,
      date: date,
      etat: etat,
      prix: price,
    };

    try {
      // Effectuez une requête POST vers votre API avec axios
      const response = await axios.post('http://localhost:4000/api/commande', formData);
      if (response.status === 201) {
        console.log('Commande ajoutée avec succès:', response.data);
        setShowModal(false);
      } else {
        console.error('Erreur lors de l\'ajout de commande:', response.data);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de commande:', error);
    }
  };

  const handleDelete = async (commandeId) => {
    try {
      // Effectuez une requête DELETE vers votre API avec axios
      await axios.delete(`http://localhost:4000/api/commande/${commandeId}`);

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedCommande = commandes.filter(
        (commande) => commande._id !== commandeId
      );
      setCommandes(updatedCommande);

      console.log("Commande supprimée avec succès");
    } catch (error) {
      console.error("Erreur lors de la suppression de la commande:", error);
    }
  };

  // const handleDelete = async (commandeId) => {
  //   try {
  //     // Effectuez une requête DELETE vers votre API avec axios
  //     const response = await axios.delete(`http://localhost:4000/api/commande/${commandeId}`);
  
  //     // Vérifiez si la suppression a réussi côté serveur
  //     if (response.status === 200) {
  //       // Mettez à jour l'état des commandes en filtrant la commande supprimée de la liste
  //       const updatedCommandes = commandes.filter(
  //         (commande) => commande._id !== commandeId
  //       );
  //       setCommandes(updatedCommandes);
  
  //       console.log("Commande supprimée avec succès");
  //     } else {
  //       console.error('Erreur lors de la suppression de la commande:', response.data);
  //     }
  //   } catch (error) {
  //     console.error("Erreur lors de la suppression de la commande:", error.response || error.message || error);
  //   }
  // };

  
  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/commande');
        setCommandes(response.data);
        console.log('Commandes récupérées avec succès');
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes:', error);
      }
    };

    fetchCommandes();
  }, [setCommandes]);

  return (
    <div className={`${open ? 'md:ml-[225px]' : 'md:ml-[85px]'} m-4 `}>
      <HeaderTable
        title="Commandes"
        nomAjout="Ajouter des Commandes"
        body=
        {
        <Formulaire 
        inputs={inputs} 
        onSubmit={handleSubmit} 
        handleSelectChange = {handleSelectChange}
        />}
       
      />
      <Table thead={table} tbody={commandes} actions={actions} />
    </div>
  );
};

export default CommandeAdmin;
