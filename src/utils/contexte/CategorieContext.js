import React, { createContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import useGlobal from '../hooks/useGlobal';
import axios from "axios";
import useProduits from '../hooks/useProduits';



const CategorieContext = createContext();

export { CategorieContext };

export default function CategorieContextProvider({children}) {

  const [test, setTest] = useState("Awa");
  const [nom, setNom] = useState("");
  const [quantite, setQuantite] = useState("0");
  const [categories, setCategories] = useState([])
  const [categoriesProd, setCategoriesProd] = useState([])
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();
  const { setShowModal } = useGlobal();  
  const { produits } = useProduits();


  const table = [
      'Categorie', 'Nombre produit', 'Actions'
  ]

  const inputs = [
    {
      label: "Nom catégorie",
      type: "text",
      value: nom,
      name: "catégorie",
      setValue: setNom,
    },
  ];    
    
  const actions = [
    {
      icon: <TbEyeShare />,
      color: "bg-green-500",
      handleClick: (categoryId) => {
        // Stocker l'ID de la catégorie dans le stockage local
        localStorage.setItem("categorieIdCli", categoryId);
        navigate("/admin/categories/DetailsCategorie");
        handleDetail(categoryId);
      },
    },
    {
      icon: <MdEdit />,
      color: "bg-orange-500",
      handleClick: (category) => {
        console.log({category});
        categories.map((categorie) =>{
          if (categorie._id === category) {
            setNom(categorie.nom)            
          }
        })
        setIsEditing(true);
        setShowModal(true);
        setEditingCategoryId(category);
      },
    },
    // {
    //   icon: <MdOutlineDelete />,
    //   color: "bg-red-600",
    //   handleClick: (categoryId) => {
    //     handleDelete(categoryId);
    //   },
    // }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nom: nom,
      quantite: quantite,
    };

    if (isEditing) {
      handleEditCategory(editingCategoryId, formData);
    } else {
      try {
        const response = await axios.post(
          "https://kay-solu-api.onrender.com/api/categorie",
          formData
        );
        console.log("Catégorie ajoutée avec succès:", response.data);
        setShowModal(false);
        setNom("");

        fetchCategories();
      } catch (error) {
        console.error("Erreur lors de l'ajout de la catégorie:", error);
      }
    }
  };

  const handleDetail = (categoryId) => {
    // Récupérer l'ID de la catégorie depuis le stockage local
    const categorieIdCli = localStorage.getItem("categorieIdCli");
  };

  const handleEdit = async (categoryId, newData) => {
    try {
      const response = await axios.put(
        `https://kay-solu-api.onrender.com/api/categorie/${categoryId}`,
        newData
      );
      console.log("Catégorie modifiée avec succès:", response.data);

      // Actualisez la liste des catégories après l'ajout
      fetchCategories();
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie:", error);
    }
  };
  
  const handleEditCategory = (categoryId, newData) => {
    setEditData(newData);
    handleEdit(categoryId, newData);
    setShowModal(false);
  };
  
   // const handleDelete = async (categoryId) => {
  //   try {
  //     await axios.delete(`https://kay-solu-api.onrender.com/api/categorie/${categoryId}`);
  //     const updatedCategories = categories.filter(
  //       (category) => category._id !== categoryId
  //     );
  //     setCategories(updatedCategories);
  //     console.log("Catégorie supprimée avec succès");

  //     // Actualisez la liste des catégories après la suppression
  //     fetchCategories();
  //   } catch (error) {
  //     console.error("Erreur lors de la suppression de la catégorie:", error);
  //   }
  // };

 
  const updateCategoryQuantities = async () => {
    try {
      const updatedCategories = await Promise.all(categories.map(async (category) => {
        const filteredProduits = produits.filter((produit) => produit.categorieId === category._id);
        const quantite = filteredProduits.length;
        return { ...category, quantite };
      }));  
        console.log({updatedCategories});
      
      await Promise.all(updatedCategories.map(async (category) => {
        await axios.put(`https://kay-solu-api.onrender.com/api/categorie/${category._id}`, { quantite: category.quantite });
      }));
  
      console.log("Quantités de produits mises à jour avec succès dans la base de données");
    } catch (error) {
      console.error("Erreur lors de la mise à jour des quantités de produits:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://kay-solu-api.onrender.com/api/categories");
      setCategories(response.data)
      console.log("Catégories récupérées avec succès");
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  const valueContext = {
    test,
        fetchCategories,
        updateCategoryQuantities,
        handleEditCategory,
        handleEdit,
        handleSubmit,
        editData,
        setEditData,
        categoriesProd, 
        setCategoriesProd,
        handleDetail,
        editingCategoryId,
        setEditingCategoryId,
        isEditing,
        setIsEditing,
        table,
        actions,
        inputs,
        categories,
        nom,
        quantite,
        setNom,
        setQuantite,
        setCategories

  }

  return (
    <CategorieContext.Provider value={valueContext}>
      {children}
    </CategorieContext.Provider>
  );
}


