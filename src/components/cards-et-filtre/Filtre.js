import React from "react";
import Select from "./Select";

const Filtre = () => {
  const mois = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  const categorie = ["option1", "option1", "option1"];

  return (
    <div className="flex flex-col sm:flex-row gap-3 font-normal">
      <Select contenus={mois} Title="Mois" />
      <Select contenus={categorie} Title="Catégorie" />
    </div>
  );
};

export default Filtre;
