
import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { useContext, useEffect } from "react";
import { CategorieContext } from "../../utils/contexte/CategorieContext";
import useSidebare from "../../utils/hooks/useSidebare";
import Formulaire from "../../components/formulaire/Formulaire";
import axios from "axios";
import useGlobal from "../../utils/hooks/useGlobal";
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const Categories = () => {
  
    const { 
            table,
            categories,
            nom, 
            quantite,
            statut,
            statutVisible,
            statutInvisible,
            imageUrl,
            setCategories,
            setNom,
            setQuantite,
            setStatutVisible,
            setStatutInvisible,
            setImageUrl
          } = useContext(CategorieContext);

    const { open } = useSidebare();

    const inputs = [
      {
        label: "Nom catégorie",
        type: "text",
        value: nom,
        name:'catégorie',
        setValue: setNom
      },
      {
        label: "Image catégorie",
        type: 'file',
        value: imageUrl,
        name:'image',
        setValue: setImageUrl
      },

      {
        label: "Nombre produit",
        type: 'number',
        value: quantite,
        name:'produitNomber',
        setValue: setQuantite
      },
      {
        label: "Visible",
        type: 'radio',
        value: statutVisible,
        name:'statut',
        setValue: setStatutVisible
      },
      {
        label: "Invisible",
        type: 'radio',
        value: statutInvisible,
        name:'statut',
        setValue: setStatutInvisible
      }
    ]

    const navigate = useNavigate();

    const actions = [
      {
        icon: <TbEyeShare />,
        color: 'bg-green-500',
        hanldleClick: () => {
          console.log('Ca marche 1');
          navigate('/admin/categories/DetailsCategorie');
        },
      },
      {
        icon: <MdEdit />,
        color: 'bg-orange-500',
        hanldleClick: () => {
          console.log('Ca marche 2');
        },
      },
      {
        icon: <MdOutlineDelete />,
        color: 'bg-red-600',
        hanldleClick: (categoryId) => {
          handleDelete(categoryId);
        },
      },
    ];

    const {setShowModal} = useGlobal()

    const hanldleSubmit = async (e) => {
      e.preventDefault();
      console.log(nom, quantite, statut, imageUrl);
      
      const formData = {
        nom: nom,
        quantite: quantite,
        statut: statut,
        imageUrl: imageUrl
      };

      try {
        // Effectuez une requête POST vers votre API avec axios
        const response = await axios.post('http://localhost:4000/api/categorie', formData);
        console.log('Catégorie ajoutée avec succès:', response.data);
        setShowModal(false)
      } catch (error) {
        
        console.error('Erreur lors de l\'ajout de la catégorie:', error);
      }
    };

    const handleDelete = async (categoryId) => {
      try {
        // Effectuez une requête DELETE vers votre API avec axios
        await axios.delete(`http://localhost:4000/api/categorie/${categoryId}`);

        // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
        const updatedCategories = categories.filter(
          (category) => category._id !== categoryId
        );
        setCategories(updatedCategories);

        console.log("Catégorie supprimée avec succès");
      } catch (error) {
        console.error("Erreur lors de la suppression de la catégorie:", error);
      }
    };

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get("http://localhost:4000/api/categories");
          setCategories(response.data);
          console.log("Catégories récupérées avec succès");
        } catch (error) {
          console.error("Erreur lors de la récupération des catégories:", error);
        }
      };

      fetchCategories();
    }, []);


  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable
        title="Liste categories"
        nomAjout="Ajouter un nouveau categorie"
        body={<Formulaire inputs={inputs} onSubmit={hanldleSubmit} />}
      />
      <Table thead={table} tbody={categories} actions={actions} />
    </div>
  );
};

export default Categories;


