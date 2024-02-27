
import React from "react";
import SidebareContextProvider from "../../../utils/contexte/SidebareContext";
import { Route, Routes, useLocation } from "react-router-dom";
import Accueil from "../Accueil";
import Profil from "../../admin/Profil";
import Panier from "../panier/Panier";
import Navbar from "../NavbarUtilisateut/Navbar/Navbar";
import { PanierProvider } from "../../../utils/contexte/PanierContext";
import Shop from "../NavbarUtilisateut/NavbarLinks/Shop";
import Arrivals from "../NavbarUtilisateut/NavbarLinks/Arrivals";
import Inscription from "../../../usersComponents/incription/Inscription";
import UserConnexion from "../../../usersComponents/userConnexion/UserConnexion";
import DetailsCard from "../../../usersComponents/cards/DetailsCard";
import ComptePage from "../comptePage/ComptePage";
import Footer from "../../../usersComponents/footer/Footer";
import ContactsPage from "../contactsPage/ContactsPage";
import Aprops from "../apropos/Aprops";
import DetailShopCards from "../NavbarUtilisateut/DetailShop/DetailShopCards"
import ProduitProvider from "../../../usersComponents/cards/ProduitContext";


const UserIsLogin = () => {
  const location = useLocation();
  const urlPageActuel = location.pathname;

  return ( 
    <SidebareContextProvider>
      <ProduitProvider>
        <PanierProvider>
          <Navbar
            className={`bg-white z-50 fixed top-0 w-full ${urlPageActuel === "/boutique" ? "border-b-2 border-gray-400" : ""
              }`}
          />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/Arrivals" element={<Arrivals />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/apropos" element={<Aprops />} />
            <Route path="/Panier" element={<Panier />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<UserConnexion />} />
            <Route path="/compte/*" element={<ComptePage />} />
            <Route path="/details/:_id" element={<DetailsCard />} />
            <Route path="/detailShop/:id" element={<DetailShopCards />} />
          </Routes>
          <Footer />
        </PanierProvider>
      </ProduitProvider>
    </SidebareContextProvider>
  );
};

export default UserIsLogin;
