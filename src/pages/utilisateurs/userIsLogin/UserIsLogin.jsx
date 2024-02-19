import React from "react";
import SidebareContextProvider from "../../../utils/contexte/SidebareContext";
import { Route, Routes } from "react-router-dom";
import Accueil from "../Accueil";
import Profil from "../../admin/Profil";
import Panier from "../panier/Panier";
import Navbar from "../NavbarUtilisateut/Navbar/Navbar";
import { PanierProvider } from "../../../utils/contexte/PanierContext";
import Shop from "../NavbarUtilisateut/NavbarLinks/Shop";
import Arrivals from "../NavbarUtilisateut/NavbarLinks/Arrivals";
import Sales from "../NavbarUtilisateut/NavbarLinks/Sales";
import Journal from "../NavbarUtilisateut/NavbarLinks/Journal";
import Inscription from "../../../usersComponents/incription/Inscription";
import UserConnexion from "../../../usersComponents/userConnexion/UserConnexion";

const UserIsLogin = () => {
  return (
    <SidebareContextProvider>
      <PanierProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/Arrivals" element={<Arrivals />} />
          <Route path="/vente" element={<Sales />} />
          <Route path="/apropos" element={<Journal />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<UserConnexion />} />
        </Routes>
      </PanierProvider>
    </SidebareContextProvider>
  );
};

export default UserIsLogin;
