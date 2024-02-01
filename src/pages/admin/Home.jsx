import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebare from "../../components/sidebare/Sidebare";
import Dashboard from "./Dashboard";
import Produits from "./Produits";
import Commandes from "./Commandes";
import CategoriesAdmin from "../../components/categories/CategoriesAdmin";

const Home = () => {
  return (
    <div className="App flex gap-6 bg-gray-100">
      <Sidebare />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<CategoriesAdmin />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/commandes" element={<Commandes />} />
      </Routes>
    </div>
  );
};

export default Home;
