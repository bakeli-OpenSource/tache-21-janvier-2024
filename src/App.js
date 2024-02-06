import { Route, Routes } from 'react-router-dom';
import AdminConnexion from './pages/admin/connexion/AdminConnexion';
import IsLogin from './pages/admin/IsLogin';
import GlobalContextProvider from './utils/contexte/GlobalContext';
import Accueil from './pages/utilisateurs/Accueil';
import Panier from './pages/utilisateurs/panier/Panier';
import { PanierProvider } from './utils/contexte/PanierContext';

function App() {
  return (
    <div className="App min-h-screen">
      <GlobalContextProvider>
      <PanierProvider>
      <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/Panier' element={<Panier />}/>
      <Route path="/admin" element={<AdminConnexion />} />
      <Route path="/admin/*" element={<IsLogin />} />
    </Routes>
      </PanierProvider>
        
      </GlobalContextProvider>
    </div>
  );
}

export default App;
