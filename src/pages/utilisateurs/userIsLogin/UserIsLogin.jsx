import React from "react";
import SidebareContextProvider from "../../../utils/contexte/SidebareContext";
import { Route, Routes } from "react-router-dom";
import Accueil from "../Accueil";
import Profil from "../../admin/Profil";
import Panier from "../panier/Panier";
import AdminConnexion from "../../admin/connexion/AdminConnexion";
import Navbar from "../NavbarUtilisateut/Navbar/Navbar";

const UserIsLogin = () => {
  return (
    <SidebareContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/admin" element={<AdminConnexion />} />
      </Routes>
    </SidebareContextProvider>
    // <div>

    // </div>
  );
};

export default UserIsLogin;
