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
import ProduitProvider from "../../../usersComponents/cards/ProduitContext";
import Inscription from "../../../usersComponents/incription/Inscription";
import UserConnexion from "../../../usersComponents/userConnexion/UserConnexion";
import DetailsCard from "../../../usersComponents/cards/DetailsCard";

const UserIsLogin = () => {
  return (
    <SidebareContextProvider>

      <ProduitProvider>
        <PanierProvider>
          <Navbar className="bg-white z-50 fixed top-0 w-full" />
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
            <Route path="/details/:_id" element={<DetailsCard />} />
          </Routes>
        </PanierProvider>
      </ProduitProvider>
    </SidebareContextProvider>
  );
};

export default UserIsLogin;
