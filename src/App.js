import AdminConnexion from './pages/admin/connexion/AdminConnexion';
import IsLogin from './pages/admin/IsLogin';
import GlobalContextProvider from './utils/contexte/GlobalContext';
import Accueil from './pages/utilisateurs/Accueil';
import Panier from './pages/utilisateurs/panier/Panier';
import ListShop from './pages/utilisateurs/NavbarUtilisateut/Shop';
import Sales from './pages/utilisateurs/NavbarUtilisateut/Sales';
import NewArrivals from './pages/utilisateurs/NavbarUtilisateut/NewArrivals';
import Journal from './pages/utilisateurs/NavbarUtilisateut/Journal';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="min-h-screen App">
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Shop" element={<ListShop/>} />
          <Route path="/NewArrivals" element={<NewArrivals/>} />
          <Route path="/Sales" element={<Sales/>} />
          <Route path="/Journal" element={<Journal/>} />
          <Route path="/admin" element={<AdminConnexion />} />
          <Route path="/admin/*" element={<IsLogin />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}


export default App;
