import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useGlobal from '../../utils/hooks/useGlobal';
import axiosInstance from '../axiosInstance';
import { useLocation } from 'react-router-dom';

export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const commandeId = pathnames.pop();

  const table = ['Nom', 'Telephone', 'Etat de la commande', 'Actions'];

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
        const response = await axiosInstance.get('/commandes/' + commandeId);
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes:', error);
      }
    };
    fetchCommande(commandeId);
  }, [commandeId]);

  const handleDetail = (commandeId) => {
    const commandeIdCli = localStorage.getItem('commandeIdCli');
  };

  const handleEditCommande = async (id, newData) => {
    try {
      const response = await axiosInstance.put('/commande/' + id, newData);

      if (response.status === 200) {
        toast.success('Statut modifié avec succès!');

        fetchCommandes();
        setModifModal(false);
      } else {
        throw new Error('Erreur lors de la modification');
      }
    } catch (error) {
      console.error('Erreur lors de la modification:', error);
      toast.success('Erreur lors de la modification!');
    }
  };

  const [setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validationCommande = {
        etat: selectsValue,
      };

      // Récupérer la commande en cours d'édition
      const commandeResponse = await axiosInstance.get(
        '/commandes/' + editingCommandeId
      );
      const produitVente = commandeResponse.data;

      if (validationCommande.etat === 'livrée') {
        // Récupérer les produits associés à la commande
        const produitsPromises = produitVente.idProduit.map(async (id) => {
          const produitResponse = await axiosInstance.get('/produits/' + id);
          return produitResponse.data;
        });
        const produits = await Promise.all(produitsPromises);

        // Calculer les nouvelles quantités et ventes
        const updatedProduits = produits.map((prod, index) => {
          const nouvelleQuantite = prod.quantite - produitVente.quantite[index];
          const nouvelleVente = prod.vente + produitVente.quantite[index];
          return { ...prod, quantite: nouvelleQuantite, vente: nouvelleVente };
        });

        // Mettre à jour les produits dans la base de données
        const updateProduitsPromises = updatedProduits.map(async (prod) => {
          const updateProduitResponse = await axiosInstance.put(
            '/produits/' + prod._id,
            prod
          );
          return updateProduitResponse.data;
        });
        await Promise.all(updateProduitsPromises);
      }

      // Mettre à jour l'état de la commande
      const updateCommandeResponse = await axiosInstance.put(
        '/commande/' + editingCommandeId,
        validationCommande
      );
      if (updateCommandeResponse.status === 200) {
        console.log('Statut modifié avec succès:', updateCommandeResponse.data);
        toast.success('Statut modifié avec succès!');
        fetchCommandes();
        setModifModal(false);
      } else {
        throw new Error('Erreur lors de la modification');
      }
    } catch (error) {
      console.error('Erreur lors de la modification:', error);
      toast.error('Erreur lors de la modification!');
    }
  };

  const handleDelete = async (commandeId) => {
    try {
      // Effectuez une requête DELETE vers votre API avec axios
      await axiosInstance.delete(`/commande/${commandeId}`);

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedCommande = commandes.filter(
        (commande) => commande._id !== commandeId
      );
      setCommandes(updatedCommande);

      fetchCommandes();
    } catch (error) {
      console.error('Erreur lors de la suppression de la commande:', error);
    }
  };

  const fetchCommandes = async () => {
    try {
      const response = await axiosInstance.get('/commandes');
      const commandeAvecQuantiteProd = response.data.map((commande) => ({
        ...commande,
        quantiteCom: commande.quantite,
        // Supprimer la clé "quantite" de l'objet
        quantite: undefined,
      }));
      setCommandes(commandeAvecQuantiteProd);
      console.log('Commandes récupérées avec succès');
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
    }
  };

  useEffect(() => {
    fetchCommandes();
  }, [commandes]);

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
    setData,
  };

  return (
    <CommandeContext.Provider value={value}>
      {children}
    </CommandeContext.Provider>
  );
};

export default CommandeContextProvider;
