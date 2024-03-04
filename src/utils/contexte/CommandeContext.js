import React, { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import useGlobal from "../../utils/hooks/useGlobal";
import axiosInstance from "../axiosInstance";
import { useLocation } from "react-router-dom";


export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const commandeId = pathnames.pop();

  const table = [
    "Nom",
    "Produit",
    "Quantite",
    "Telephone",
    "Etat de la commande",
    "Actions",
  ];

  const [idProduit, setIdProduit] = useState('');
  const [email, setEmail] = useState('');
  const [quantite, setQuantite] = useState(0);
  const [produit, setProduit] = useState('');
  const [date, setDate] = useState('');
  const [etat, setEtat] = useState('');
  const [prixTotal, setPrixTotal] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [prixLivraison, setPrixLivraison] = useState('');
  const [prixProduit, setPrixProduit] = useState('');
  const [modif, setModifModal] = useState('');
  const [commandes, setCommandes] = useState([]);

  const { setShowModal } = useGlobal();

  const [editingCommandeId, setEditingCommandeId] = useState(null);

  const [selectsValue, setSelectsValue] = useState('');

 
  const [data, setData] = useState([]);
  useEffect(() => {

  const fetchCommande = async (commandeId) => {
      try {
          const response = await axiosInstance.get(
              '/commandes/' + commandeId,
          );
          setData(response.data);
      } catch (error) {
          console.error('Erreur lors de la récupération des commandes:', error);
      }
  };
  fetchCommande(commandeId);
}, [data]);

  const handleDetail = (commandeId) => {
    const commandeIdCli = localStorage.getItem('commandeIdCli');
  };

  const handleEditCommande = async (id, newData) => {
    try {

      const response = await axiosInstance.put(
        "/commande/" + id,
        newData
        );
        
        if (response.status === 200) {
          console.log("Statut modifié avec succès:", response.data);
          toast.success('Statut modifié avec succès!');
          fetchCommandes();
          setModifModal(false)

      } else {
        throw new Error('Erreur lors de la modification');
      }
    } catch (error) {

      console.error("Erreur lors de la modification:", error);
      toast.success('Erreur lors de la modification!');
    }
  };

  const [setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationCommande = {
      etat: selectsValue,
    };
    handleEditCommande(editingCommandeId, validationCommande);
  };

  const handleDelete = async (commandeId) => {
    try {
      console.log('Avant la requête DELETE');
      // Effectuez une requête DELETE vers votre API avec axios
      await axiosInstance.delete(`/commande/${commandeId}`);
      console.log('Aprés la requête DELETE');

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedCommande = commandes.filter(
        (commande) => commande._id !== commandeId
      );
      setCommandes(updatedCommande);

      console.log('Commande supprimée avec succès');
      fetchCommandes();
    } catch (error) {
      console.error('Erreur lors de la suppression de la commande:', error);
    }
  };

  const fetchCommandes = async () => {
    try {
      const response = await axiosInstance.get('/commandes');
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
    commandeId,
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
    setCommandes,
    data, 
    setData
  };

  return (
    <CommandeContext.Provider value={value}>
      {children}
    </CommandeContext.Provider>
  );
};

export default CommandeContextProvider;
