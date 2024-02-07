import React from "react";
import DetailsCommande from "../../components/commandes/DetailsCommande";
import CommandeContextProvider from "../../utils/contexte/CommandeContext";

const DetailsCommandeProvide = () => {
  return (
    <CommandeContextProvider>
      <DetailsCommande />
    </CommandeContextProvider>
  );
};

export default DetailsCommandeProvide;
