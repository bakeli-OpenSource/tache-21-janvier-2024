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
      handleClick: (commandeId) => {
        console.log('Ca marche 1');
        navigate("/admin/commandes/DetailsCommande")
      },
    },
    {
      icon: <MdEdit />,
      color: 'bg-orange-500',
      handleClick: () => {
        console.log('Ca marche 2');
      },
    },
    {
      icon: <MdOutlineDelete />,                       
      color: 'bg-red-600',
      handleClick: (commandeId) => {
        handleDelete(commandeId);
        console.log('Ca commandeId:', commandeId);
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

    console.log('Form Data:', formData);

    try {
      // Effectuez une requête POST vers votre API avec axios
      const response = await axios.post('https://kay-solu-api.onrender.com/api/commande', formData);
      if (response.status === 201) {
        console.log('Commande ajoutée avec succès:', response.data);
        setShowModal(false);
        setEmail("")
        setQuantite("")
        setDate("")
        setEtat("")
        setPrice("")
      } else {
        console.error('Erreur lors de l\'ajout de commande:', response.data);
      }
      fetchCommandes();
    } catch (error) {
      console.error('Erreur lors de l\'ajout de commande:', error);
    }
  };

  const handleDelete = async (commandeId) => {
    try {
      console.log('Avant la requête DELETE');
      // Effectuez une requête DELETE vers votre API avec axios
      await axios.delete(`https://kay-solu-api.onrender.com/api/commande/${commandeId}`);
      console.log('Aprés la requête DELETE');

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedCommande = commandes.filter(
        (commande) => commande._id !== commandeId
      );
      setCommandes(updatedCommande);

      console.log("Commande supprimée avec succès");
      fetchCommandes();
    } catch (error) {
      console.error("Erreur lors de la suppression de la commande:", error);
    }
  };

  
  const fetchCommandes = async () => {
    try {
      const response = await axios.get('https://kay-solu-api.onrender.com/api/commandes');
      setCommandes(response.data);
      console.log('Commandes récupérées avec succès');
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
    }
  };

  useEffect(() => {
    fetchCommandes();
  }, []);

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
