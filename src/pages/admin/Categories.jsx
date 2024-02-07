import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { useContext, useEffect } from "react";
import { CategorieContext } from "../../utils/contexte/CategorieContext";
import useSidebare from "../../utils/hooks/useSidebare";
import Formulaire from "../../components/formulaire/Formulaire";

const Categories = () => {
  const { 
          table,
          categories,
          actions, 
          nomCategories, 
          nombre, 
          statutVisible,
          statutInvisible,
          image,
          setNomCategories,
          setNombre,
          setStatutVisible,
          setStatutInvisible,
          setImage,
          hanldleSubmit
         } = useContext(CategorieContext);

  const { open } = useSidebare();

  const inputs = [
    {
      label: "Nom catégorie",
      type: "text",
      value: nomCategories,
      name:'catégorie',
      setValue: setNomCategories
    },
    {
      label: "Image catégorie",
      type: 'file',
      value: image,
      name:'image',
      setValue: setImage
    },

    {
      label: "Nombre produit",
      type: 'number',
      value: nombre,
      name:'produitNomber',
      setValue: setNombre
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
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

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
