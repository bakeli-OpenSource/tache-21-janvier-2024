import React, { createContext, useEffect, useState } from "react";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";
import { useNavigate } from "react-router";


export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [produits, setProduits] = useState([])
  const [url, setUrl] = useState("http://localhost:4000/api/produits")
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
    fetch(url)
      .then(response => response.json())
      .then(json => setProduits(json))
  }, [url])

  // Suppression Produit
  const deleteProduit = (id) => {
    setUrl(`http://localhost:4000/api/supprimerproduit/${id}`, {
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
  const addProduit = (newProd) => {
    if (newProd.nom && newProd.imageUrl && newProd.titre && newProd.description && newProd.quantite && newProd.categorie && newProd.carracteristique && newProd.prix && newProd.couleur && newProd.taille && newProd.fournisseur) {
      fetch("http://localhost:4000/api/produit", {
        method: "POST",
        body: JSON.stringify({
          nom: newProd.nom,
          imageUrl: newProd.imageUrl,
          titre: newProd.titre,
          description: newProd.description,
          quantite: newProd.quantite,
          categorie: newProd.categorie,
          carracteristique: newProd.carracteristique,
          prix: newProd.prix,
          couleur: newProd.couleur,
          taille: newProd.taille,
          fournisseur: newProd.fournisseur
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => {
          // setProduits([...produits, data]) 
          setShowModal(false)
          alert('Produit ajouté avec succès')
        })
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
