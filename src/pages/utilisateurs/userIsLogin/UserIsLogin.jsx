import React from "react";
import SidebareContextProvider from "../../../utils/contexte/SidebareContext";
import { Route, Routes } from "react-router-dom";
import Accueil from "../Accueil";
import Profil from "../../admin/Profil";
import Panier from "../panier/Panier";
import AdminConnexion from "../../admin/connexion/AdminConnexion";
import Navbar from "../NavbarUtilisateut/Navbar/Navbar";
import { PanierProvider } from "../../../utils/contexte/PanierContext";

const UserIsLogin = () => {
  return (
      <SidebareContextProvider>
        <PanierProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/profil" element={<Profil />} />
            {/* <Route path="/Shop" element={<Shop />} /> */}
           {/*  <Route path="/Arrivals" element={<Arrivals />} />
            <Route path="/Sales" element={<Sales />} />
            <Route path="/Journals" element={<Jornals />} /> */}
            <Route path="/Panier" element={<Panier />} />
            <Route path="/admin" element={<AdminConnexion />} />
          </Routes>
        </PanierProvider>
      </SidebareContextProvider>
    // <div>

    // </div>
  );
};

export default UserIsLogin;
