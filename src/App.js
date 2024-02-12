import AdminConnexion from './pages/admin/connexion/AdminConnexion';
import IsLogin from './pages/admin/IsLogin';
import GlobalContextProvider from './utils/contexte/GlobalContext';
import Accueil from './pages/utilisateurs/Accueil';
import Panier from './pages/utilisateurs/panier/Panier';
import Shop from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Shop'
import Arrivals from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Arrivals'
import Sales from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Sales'
import Jornals from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Journal'
 
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="min-h-screen App">
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Shop" element={<Shop />} />        
          <Route path="/Arrivals" element={<Arrivals />} />        
          <Route path="/Sales" element={<Sales />} />        
          <Route path="/Journals" element={<Jornals />} />        
          <Route path="/admin" element={<AdminConnexion />} />
          <Route path="/admin/*" element={<IsLogin />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}


export default App;
