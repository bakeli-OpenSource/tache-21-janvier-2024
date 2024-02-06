import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { useContext } from "react";
import { CategorieContext } from "../../utils/contexte/CategorieContext";
import useSidebare from "../../utils/hooks/useSidebare";
import Formulaire from "../../components/formulaire/Formulaire";

const Categories = () => {
  const { table, table2, actions } = useContext(CategorieContext);
  const { open } = useSidebare();

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable
        title="Liste categories"
        nomAjout="Ajouter un nouveau categorie"
        body={<Formulaire />}
      />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  );
};

export default Categories;
