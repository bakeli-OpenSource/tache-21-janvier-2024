import AdminConnexion from "./pages/admin/connexion/AdminConnexion";
import IsLogin from "./pages/admin/IsLogin";
import GlobalContextProvider from "./utils/contexte/GlobalContext";
import Accueil from "./pages/utilisateurs/Accueil";
import Panier from "./pages/utilisateurs/panier/Panier";
import { Route, Routes } from "react-router";
import DetailsCard from "./usersComponents/cards/DetailsCard";

function App() {
  return (
    <div className="min-h-screen App">
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/admin" element={<AdminConnexion />} />
          <Route path="/admin/*" element={<IsLogin />} />
          <Route path="/Details" element={<DetailsCard />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
