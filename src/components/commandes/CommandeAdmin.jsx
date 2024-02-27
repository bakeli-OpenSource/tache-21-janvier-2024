import React, { useEffect, useState } from 'react';
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '../formulaire/Formulaire';
import useGlobal from '../../utils/hooks/useGlobal';
import { Form, useNavigate } from "react-router-dom";
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
    // prixTotal,
    produit,
    // setProduit,
    idProduit,
    setIdProduit,
    setPrixTotal,
    setEmail,
    date,
    etat,
    setEtat,
    setDate,
    setQuantite,
    setCommandes,
    telephone,
    setTelephone,
    adresse,
    setAdresse,
    prixLivraison,
    setPrixLivraison,
    prixProduit,
    setPrixProduit,
  } = useCommandes();

  const { open } = useSidebare();

  const { setShowModal } = useGlobal();
  
  const [editingCommandeId, setEditingCommandeId] = useState(null);


  const [selectsValue, setSelectsValue] = useState('');

  
  // const handleSelectChange = (e) => {  
  //   setSelectsValue(e.target.value)
  //   console.log(selectsValue);
  //  };

  // const selects = [
  //   {
  //     label: 'Etat de la commande',
  //     value: selectsValue,   
  //     options: ["en cours", "en attente", "en livraison", "livrée"],
  //     setValue: handleSelectChange
  //   }
  // ]


  const navigate = useNavigate();

  const actions = [
    {
      icon: <TbEyeShare />,
      color: 'bg-green-500',
      handleClick: (commandeId) => {
        navigate("/admin/commandes/DetailsCommande")
      }
    },
    {
      icon: <MdEdit />,
      color: 'bg-orange-500',
      handleClick: (commandeId) => {
        commandes.map((commande) => {
          if (commande._id === commandeId) {
            setEtat(commande.etat);        
          }
        })
        setIsEditing(true);
        setShowModal(true);
        setEditingCommandeId(commandeId);
      }
    },
    {
      icon: <MdOutlineDelete />,                       
      color: 'bg-red-600',
      handleClick: (commandeId) => {
        handleDelete(commandeId);
      }
    },
  ];


  const handleEditCommande = async (id, newData) => {
    try {
      const response = await axios.put('https://kay-solu-api.onrender.com/api/commande/' + id, newData);
      
      if (response.status === 200) { 
        console.log('Statut modifié avec succès:', response.data);
        alert('Statut modifié avec succès');
      } else {
        throw new Error('Erreur lors de la modification');
      }
    } catch (error) {
      console.error('Erreur lors de la modification:', error);
    }
  }

  
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationCommande = {
      etat: selectsValue
    };
      handleEditCommande(editingCommandeId, validationCommande)
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
        // nomAjout="Ajouter des Commandes"
        body={
          <form onSubmit={handleSubmit} >
            <select onChange={(e) => setSelectsValue(e.target.value)}>
              <option value="en attente">En attente</option>
              <option value="en cours">En cours</option>
              <option value="en livraison">En livraison</option>
              <option value="livrée">Livrée</option>
            </select>
            <button type="submit">Valider</button>
          </form>
        }
        // {
          
        // <Formulaire 
        // inputs={[]} 
        // selects={selects}
        // onSubmit={handleSubmit} 
        // handleSelectChange = {handleSelectChange}  
        // // selectsValue={selectsValue} 
        // />}
       
      />
      <Table thead={table} tbody={commandes} actions={actions} />
    </div>
  );
};

export default CommandeAdmin;