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
  // const [url, setUrl] = useState("http://localhost:4000/api/produits")
  // Création des contexts pour formuulaire
  const [nom, setNom] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [quantite, setQuantite] = useState('')
  const [categorie, setCategorie] = useState('')
  const [carracteristique, setCarracteristique] = useState('')
  const [prix, setPrix] = useState('')
  const [couleur, setCouleur] = useState('')
  const [taille, setTaille] = useState('')
  const [fournisseur, setFournisseur] = useState('')
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
  const deleteProduit = (id) => {
    fetch(`http://localhost:4000/api/produits/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setProduits(values => {
          return values.filter(item => item.id !== id)
        })
      })
  }

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




    const table = [
      'Article', 'Quantité','Prix' , 'Actions'
    ]

    
    const actions = [
      {
        // Voire Détails
        icon: <TbEyeShare/>,
        color: 'bg-green-500',
        hanldleClick: (id) => {
          console.log('Ca marche 1')
          navigate("DetailsProd/" + id);
        }
      },
        {
          // Modification
          icon: <MdEdit />,
          color: 'bg-orange-500',
          hanldleClick: () => console.log('Modifier')
        },
        {
          // Suppression
          icon: <MdOutlineDelete />,
          color: 'bg-red-600',
          hanldleClick: (id) => {
            deleteProduit(id)
          }
        }
      ]

  const value = {
    table, 
    produits,
    addProduit,
    actions,
    nom, setNom, imageUrl, setImageUrl, titre, setTitre, description, setDescription, quantite, setQuantite,
    carracteristique, setCarracteristique, categorie, setCategorie, prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur
  };

  return <ProduitsContext.Provider value={value}>{children}</ProduitsContext.Provider>;
};

export default ProduitContextProvider;
