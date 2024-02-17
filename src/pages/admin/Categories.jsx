import React, { useContext, useEffect, useState } from "react";
import useSidebare from "../../utils/hooks/useSidebare";
import Formulaire from "../../components/formulaire/Formulaire";
import axios from "axios";
import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import useGlobal from "../../utils/hooks/useGlobal";
import { CategorieContext } from "../../utils/contexte/CategorieContext";

export let newCategorie;

const Categories = () => {
  const { table, categories, setCategories } = useContext(CategorieContext);

  const [nom, setNom] = useState("");
  const [quantite, setQuantite] = useState("");
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

    {
      label: "Nombre produit",
      type: "number",
      value: quantite,
      name: "produitNomber",
      setValue: setQuantite,
    },
  ];

  const actions = [
    {
      icon: <TbEyeShare />,
      color: "bg-green-500",
      handleClick: () => {
        navigate("/admin/categories/DetailsCategorie");
      },
    },
    {
      icon: <MdEdit />,
      color: "bg-orange-500",
      handleClick: (category) => {
        setIsEditing(true);
        setShowModal(true);
        setEditingCategoryId(category._id); // Stockez l'ID de la catégorie
        handleEditData(category);
      },
    },
    {
      icon: <MdOutlineDelete />,
      color: "bg-red-600",
      handleClick: (categoryId) => {
        handleDelete(categoryId);
      },
    },
  ];

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
          "https://kay-solu-api.onrender.com/api/categorie",
          formData
        );
        console.log("Catégorie ajoutée avec succès:", response.data);
        setShowModal(false);
        setNom("");
        setQuantite("");

        // Actualisez la liste des catégories après l'ajout
        fetchCategories();
      } catch (error) {
        console.error("Erreur lors de l'ajout de la catégorie:", error);
      }
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`https://kay-solu-api.onrender.com/api/categorie/${categoryId}`);
      const updatedCategories = categories.filter(
        (category) => category._id !== categoryId
      );
      setCategories(updatedCategories);
      console.log("Catégorie supprimée avec succès");

      // Actualisez la liste des catégories après la suppression
      fetchCategories();
    } catch (error) {
      console.error("Erreur lors de la suppression de la catégorie:", error);
    }
  };

  const handleEditData = (category) => {
    setNom(category.nom);
    setQuantite(category.quantite);
  };

  const handleEdit = async (categoryId, newData) => {
    try {
      const response = await axios.put(
        `https://kay-solu-api.onrender.com/api/categorie/${categoryId}`,
        newData
      );
      console.log("Catégorie modifiée avec succès:", response.data);
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie:", error);
    }
  };

  const handleEditCategory = (categoryId, newData) => {
    setEditData(newData);
    handleEdit(categoryId, newData);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://kay-solu-api.onrender.com/api/categories");
      setCategories(response.data);
      console.log("Catégories récupérées avec succès");
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
          />
        }
      />
      <Table thead={table} tbody={categories} actions={actions} />
    </div>
  );
};

export default Categories;
