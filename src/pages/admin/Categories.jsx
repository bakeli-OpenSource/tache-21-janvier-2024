import React, { useContext, useEffect, useState } from "react";
import useSidebare from "../../utils/hooks/useSidebare";
import Formulaire from "../../components/formulaire/Formulaire";
import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { CategorieContext } from "../../utils/contexte/CategorieContext";


const Categories = () => {
  const { table, 
          categories, 
          inputs,
          actions,
          handleSubmit,
          // updateCategoryQuantities,
          fetchCategories} = useContext(CategorieContext);
  

  const { open } = useSidebare();

  useEffect(() => {
    const fetchData = async () => {
      await fetchCategories();
      // await updateCategoryQuantities()
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {};


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
