import { Route, Routes } from 'react-router-dom';
import AdminConnexion from './pages/admin/connexion/AdminConnexion';
import IsLogin from './pages/admin/IsLogin';
import GlobalContextProvider from './utils/contexte/GlobalContext';
import Accueil from './pages/utilisateurs/Accueil';

function App() {
  return (
    <div className="App min-h-screen">
      <GlobalContextProvider>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path="/admin" element={<AdminConnexion />} />
          <Route path="/admin/*" element={<IsLogin />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
