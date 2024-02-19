import React, { createContext, useEffect, useState } from "react";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";
import { useNavigate } from "react-router";
import axios from "axios";


export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [produits, setProduits] = useState([])
  // const [url, setUrl] = useState("https://kay-solu-api.onrender.com/api/produits")
  // Création des contexts pour formuulaire
  const [nom, setNom] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [quantite, setQuantite] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categorieId, setCategorieId] = useState('')
  const [carracteristique, setCarracteristique] = useState('')
  const [prix, setPrix] = useState('')
  const [couleur, setCouleur] = useState('')
  const [taille, setTaille] = useState('')
  const [fournisseur, setFournisseur] = useState('')
  const [titreModal, setTitreModal] = useState('')
  const [corpModal, setCorpModal] = useState('')
  // 
  const { setShowModal } = useGlobal()
  
  // __________________________

  // Récupération de tous les produits
  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/produits");
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProduit();
  }, [produits]);

  // Suppression Produit
  const deleteProduit = async (id) => {
    try {
      // Effectuez une requête DELETE vers votre API avec axios
      await axios.delete(`https://kay-solu-api.onrender.com/api/produits/${id}`);

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedProd = produits.filter(
        (prod) => prod._id !== id
      );
      setProduits(updatedProd);

      console.log("Produit supprimée avec succès");
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  // Ajout de Produit
  const addProduit = async (produit) => {
    try {
        const formData = new FormData();
        formData.append('nom', produit.nom);
        formData.append('imageUrl', produit.imageUrl);
        formData.append('titre', produit.titre);
        formData.append('description', produit.description);
        formData.append('quantite', produit.quantite);
        formData.append('categorie', produit.categorie);
        formData.append('categorieId', produit.categorieId);
        formData.append('carracteristique', produit.carracteristique);
        formData.append('prix', produit.prix);
        formData.append('couleur', produit.couleur);
        formData.append('taille', produit.taille);
        formData.append('fournisseur', produit.fournisseur);
        
        const response = await axios.post('http://localhost:4000/api/produits', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });


        if (response.status === 201) {
            console.log('Produit ajouté avec succès:', response.data);
            alert('Produit ajouté avec succès:');
            
            setShowModal(false);
        }
         else {
            throw new Error('Erreur lors de l\'ajout du produit');
        }
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit:', error);
    }
  }

  const hanldleUpdate = async (id) => {
    setShowModal(true)
    setTitreModal('Modification du produit')
    try {
      const response = await axios.get("https://kay-solu-api.onrender.com/api/produits/" + id);
      const datasUpdates = response.data
        setNom(datasUpdates.nom)
        setTitre(datasUpdates.titre)
        setQuantite(datasUpdates.quantite)
        setCarracteristique(datasUpdates.carracteristique)
        setPrix(datasUpdates.prix)
        setCouleur(datasUpdates.couleur)
        setTaille(datasUpdates.taille)
        setFournisseur(datasUpdates.fournisseur)
        setCategorie(datasUpdates.categorie)
        setCategorieId(datasUpdates.categorieId)
        setDescription(datasUpdates.description)
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
  }

    const table = [
      'Article', 'Quantité', 'Prix', 'Actions'
    ]

    
    const actions = [
      {
        // Voire Détails
        icon: <TbEyeShare/>,
        color: 'bg-green-500',
        handleClick: (id) => {
          console.log('Ca marche 1')
          navigate("DetailsProd/" + id);
        }
      },
        {
          // Modification
          icon: <MdEdit />,
          color: 'bg-orange-500',
          handleClick: (id) => {
            hanldleUpdate(id)
          }
        },
        {
          // Suppression
          icon: <MdOutlineDelete />,
          color: 'bg-red-600',
          handleClick: (id) => {
            deleteProduit(id)
          }
        }
      ]

  const value = {
    table, 
    produits,
    addProduit,
    actions,
    titreModal, setTitreModal, corpModal, setCorpModal,
    nom, setNom, imageUrl, setImageUrl, titre, setTitre, description, setDescription, quantite, setQuantite,
    carracteristique, setCarracteristique, categorie, setCategorie,categorieId,setCategorieId ,prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur
  };

  return <ProduitsContext.Provider value={value}>{children}</ProduitsContext.Provider>;
};

export default ProduitContextProvider;
