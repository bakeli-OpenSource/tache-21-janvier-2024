import { Route, Routes } from 'react-router-dom';
import AdminConnexion from './pages/admin/connexion/AdminConnexion';
import IsLogin from './pages/admin/IsLogin';
import GlobalContextProvider from './utils/contexte/GlobalContext';

function App() {
  return (
    <div className="App min-h-screen">
      <GlobalContextProvider>
        <Routes>
          <Route path="/admin" element={<AdminConnexion />} />
          <Route path="/admin/*" element={<IsLogin />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
