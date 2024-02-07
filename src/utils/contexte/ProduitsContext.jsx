import React, { createContext, useEffect, useState } from "react";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [produits, setProduits] = useState([])
  const [url, setUrl] = useState("http://localhost:4000/api/produits")

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
    if (newProd.name && newProd.imageUrl && newProd.titre && newProd.description && newProd.quantite && newProd.categorie && newProd.carracteristique && newProd.prix && newProd.couleur && newProd.taille && newProd.fournisseur) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: newProd.name, 
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
          setProduits([...produits, data])
          alert('Produit ajouté avec succès')
        })
    }
  }

    const table = [
        'id', 'Article', 'Quantité','Prix' , 'Actions'
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
    actions
  };

  return <ProduitsContext.Provider value={value}>{children}</ProduitsContext.Provider>;
};

export default ProduitContextProvider;
