import React from "react";
import Select from "./Select";

const Filtre = () => {
  const semaine = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const categorie = ["option1", "option1", "option1"];

  return (
    <div className="flex flex-col sm:flex-row gap-3 font-normal">
      <Select contenus={semaine} Title="Semaine" />
      <Select contenus={categorie} Title="Catégorie" />
    </div>
  );
};

export default Filtre;
