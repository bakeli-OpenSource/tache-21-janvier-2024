
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
import { useNavigate, Route, Routes } from "react-router";
import useGlobal from "../../utils/hooks/useGlobal";
// import Navigate from "navigate";


function IsLogin() {

  const { isLoggedIn } = useGlobal()

  const navigate = useNavigate()

  return (
    <div className="App min-h-screen">
      <SidebareContextProvider>
        { isLoggedIn() ? <Header /> : (navigate("/admin")) }
        <div className="App pt-[56px] h-screen  gap-6 bg-gray-100">
          { isLoggedIn() ? <Sidebare /> : (navigate("/admin")) }
          <Routes>
            {isLoggedIn() ? ( <Route path="/dashboard" element={<Dashboard />} /> ) : (navigate("/admin"))}
            {isLoggedIn() ? ( <Route path="/profil" element={<Profil />} /> ) : (navigate("/admin"))}
            {isLoggedIn() ? ( <Route path="/categories" element={<CategoriesAdmin />} /> ) : (navigate("/admin"))}
            {isLoggedIn() ? ( <Route path="/categories/DetailsCategorie" element={<DetailsCategorieUseProvider />} /> ) : (navigate("/admin"))}
            {isLoggedIn() ? ( <Route path="/produits/*" element={<Produits />} /> ) : (navigate("/admin"))}
            {isLoggedIn() ? ( <Route path='/produits/DetailsProd/:id' element={<DetailsProduits />} /> ) : (navigate("/admin"))}
            {isLoggedIn() ? ( <Route path="/commandes" element={<Commandes />} /> ) : (navigate("/admin"))}
            {isLoggedIn() ? ( <Route path="/commandes/DetailsCommande" element={ < DetailsCommandeProvide />} /> ) : (navigate("/admin"))}
          </Routes>
        </div>
      </SidebareContextProvider>
    </div>
  );
}

export default IsLogin;
