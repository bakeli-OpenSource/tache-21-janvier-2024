import React from "react";
import CommandeAdmin from "../../components/commandes/CommandeAdmin";
import CommandeContextProvider from "../../utils/contexte/CommandeContext";

const Commandes = () => {
  return (
    <CommandeContextProvider>
      <CommandeAdmin />
    </CommandeContextProvider>
  );
};

export default Commandes;
