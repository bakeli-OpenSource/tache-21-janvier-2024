
import CategoriesAdmin from "../../components/categories/CategoriesAdmin";
import Header from "../../components/header";
import Sidebare from "../../components/sidebare/Sidebare";
import SidebareContextProvider from "../../utils/contexte/SidebareContext";
import Commandes from "./Commandes";
import Dashboard from "./Dashboard";
import Produits from "./Produits";
import DetailsCategorieUseProvider from "../../components/categories/DetailsCategorieUseProvider";
import DetailsProduits from "../../components/produits/DetailsProduits";
import DetailsCommandeProvide from "./DetailsCommandeProvide";
import Profil from "./Profil";
import { Route, Routes } from "react-router";


function IsLogin() {
  return (
    <div className="App min-h-screen">
      <SidebareContextProvider>
        <Header />
        <div className="App pt-[56px] h-screen bg-dark gap-6 bg-gray-100">
          <Sidebare />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/categories" element={<CategoriesAdmin />} />
            <Route path="/categories/DetailsCategorie" element={<DetailsCategorieUseProvider />} />
            <Route path="/produits/*" element={<Produits />} />
            <Route path='/produits/DetailsProd/:id' element={<DetailsProduits />} />
            <Route path="/commandes" element={<Commandes />} />
            <Route path="/commandes/DetailsCommande" element={ < DetailsCommandeProvide />} />
          </Routes>
        </div>
      </SidebareContextProvider>
    </div>
  );
}

export default IsLogin;
