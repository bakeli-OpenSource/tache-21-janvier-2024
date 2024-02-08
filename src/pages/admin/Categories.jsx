
import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { useContext, useEffect } from "react";
import { CategorieContext } from "../../utils/contexte/CategorieContext";
import useSidebare from "../../utils/hooks/useSidebare";
import Formulaire from "../../components/formulaire/Formulaire";
import axios from "axios";
import useGlobal from "../../utils/hooks/useGlobal";

const Categories = () => {
  const { 
          table,
          categories,
          actions, 
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
const {setShowModal} = useGlobal()
  const hanldleSubmit = async (e) => {
    e.preventDefault();
    console.log(nom, quantite, statut, imageUrl);
    // Créez un objet avec les données du formulaire
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/categories');
        setCategories(response.data);
        console.log("afficher");
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
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


