import React, { createContext, useEffect, useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import { TbEyeShare } from "react-icons/tb";
// import { MdEdit } from "react-icons/md";
// import { MdOutlineDelete } from "react-icons/md";
import axios from 'axios';
// import Formulaire from '../formulaire/Formulaire';
import useGlobal from '../../utils/hooks/useGlobal';


export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {
  // const navigate = useNavigate()
  
  
      const table = [
        'Nom','E-mail', 'Produit', ' Quantite', 'Etat de la commande', 'Prix Produit', 'Prix total', 'Actions'
    ]
    
    const [idProduit, setIdProduit] = useState("")
    const [email, setEmail] = useState("")
    const [quantite, setQuantite] = useState(0)
    const [produit, setProduit] = useState("")
    const [date, setDate] = useState('')
    const [etat, setEtat] = useState('')
    const [prixTotal, setPrixTotal] = useState("")
    const [telephone, setTelephone] = useState("")
    const [adresse, setAdresse] = useState("")
    const [prixLivraison, setPrixLivraison] = useState("")
    const [prixProduit, setPrixProduit] = useState("")
    const [modif, setModifModal]= useState("")
    const [commandes, setCommandes] = useState([])

    // const actions = [
    //   {
    //     icon: <TbEyeShare />,
    //     color: 'bg-green-500',
    //     handleClick: (commandeId) => {
    //       localStorage.setItem("commandeIdCli", commandeId)
    //       navigate('/admin/commandes/DetailsCommande');
    //       handleDetail(commandeId)
    //     },
    //   },
    //   {
    //     icon: <MdEdit />,
    //     color: 'bg-orange-500',
    //     handleClick: (commandeId) => {
    //       commandes.map((commande) => {
    //         if (commande._id === commandeId) {
    //           setEtat(commande.etat);
    //         }
    //       });
    //       setIsEditing(true);
    //       setShowModal(true);
    //       setEditingCommandeId(commandeId);
    //     },
    //   },
    //   {
    //     icon: <MdOutlineDelete />,
    //     color: 'bg-red-600',
    //     handleClick: (commandeId) => {
    //       handleDelete(commandeId);
    //     },
    //   },
    // ];



    const { setShowModal } = useGlobal();
    
    const [editingCommandeId, setEditingCommandeId] = useState(null);

  const [selectsValue, setSelectsValue] = useState('');


  	const handleDetail = (commandeId) => {
      const commandeIdCli = localStorage.getItem("commandeIdCli")
    }

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

    const [ setIsEditing] = useState(false);


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

    
  const value = {
    setShowModal,
    setEditingCommandeId,
    handleEditCommande,
    handleSubmit,
    handleDetail,
    handleDelete,
    setSelectsValue,
    setIsEditing,
    table, 
    commandes,
    // actions,
    produit, 
    setProduit, 
    idProduit, 
    setIdProduit,
    telephone,
    setTelephone,
    adresse,
    setAdresse,
    prixLivraison,
    setPrixLivraison,
    prixProduit,
    setPrixProduit, 
    email,
    quantite,
    prixTotal,
    setPrixTotal,
    setEmail,
    date,
    etat,
    setEtat,
    setDate,
    setQuantite,
    modif, 
    setModifModal,
    setCommandes
  };

  return <CommandeContext.Provider value={value}>{children}</CommandeContext.Provider>;
};

export default CommandeContextProvider;
