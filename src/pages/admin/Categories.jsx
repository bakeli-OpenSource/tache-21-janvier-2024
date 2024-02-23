import React, { useContext, useEffect, useState } from "react";
import useSidebare from "../../utils/hooks/useSidebare";
import Formulaire from "../../components/formulaire/Formulaire";
import axios from "axios";
import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import useGlobal from "../../utils/hooks/useGlobal";
import { CategorieContext } from "../../utils/contexte/CategorieContext";
import useProduits from "../../utils/hooks/useProduits";

export let newCategorie;
export let categorieIdCli;

const Categories = () => {
  const { table, categories, setCategories, nom, quantite, setNom, setQuantite, } = useContext(CategorieContext);
  const { produits } = useProduits();
  

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();
  const { open } = useSidebare();
  const { setShowModal } = useGlobal();

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

  const handleDetail = (categoryId) => {
    // Récupérer l'ID de la catégorie depuis le stockage local
    categorieIdCli = localStorage.getItem("categorieIdCli");
  };

  const [editingCategoryId, setEditingCategoryId] = useState(null);

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
          "http://localhost:4000/api/categorie",
          formData
        );
        console.log("Catégorie ajoutée avec succès:", response.data);
        setShowModal(false);
        setNom("");

        // Actualisez la liste des catégories après l'ajout
        fetchCategories();
      } catch (error) {
        console.error("Erreur lors de l'ajout de la catégorie:", error);
      }
    }
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
  };

  // const handleEditQuantiteCategory = (categoryId, totalProducts) => {
  //   // Mettre à jour la quantité en fonction du nombre total de produits
  //   setQuantite(totalProducts.toString());
  //   // Mettre à jour la catégorie avec la nouvelle quantité
  //   const updatedCategories = categories.map((category) => {
  //     if (category._id === categoryId) {
  //       return { ...category, quantite: totalProducts };
  //     }
  //     return category;
  //   });
  //   setCategories(updatedCategories);
  // };
  
  const updateCategoryQuantities = async () => {
  try {
    const updatedCategories = await Promise.all(categories.map(async (category) => {
      const filteredProduits = produits.filter((produit) => produit.categorieId === category._id);
      const quantite = filteredProduits.length;
      setQuantite(quantite)
      console.log({quantite});
      return { ...category, quantite };
    }));

    console.log(updatedCategories);

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
  

  // Fonction pour calculer le nombre total de produits pour une catégorie donnée
  // const calculateTotalProducts = (categoryId) => {
  //   const filteredProduits = produits.filter(
  //     (produit) => produit.categorieId === categoryId
  //   );
  //   return filteredProduits.reduce((acc, cur) => acc + cur.quantite, 0);
  // };
useEffect(() => {
  const fetchData = async () => {
    await fetchCategories();
    await updateCategoryQuantities();
  };

  fetchData();

}, []);


  const handleSelectChange = (e) => {};

  newCategorie = categories;

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable
        title="Liste categories"
        nomAjout="Ajouter un nouveau categorie"
        body={
          <Formulaire
            inputs={inputs}
            onSubmit={handleSubmit}
            handleSelectChange={handleSelectChange}
          />
        }
      />
      <Table thead={table} tbody={categories} actions={actions} />
    </div>
  );
};

export default Categories;
