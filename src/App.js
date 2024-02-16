import AdminConnexion from "./pages/admin/connexion/AdminConnexion";
import IsLogin from "./pages/admin/IsLogin";
import GlobalContextProvider from "./utils/contexte/GlobalContext";
import { Route, Routes } from "react-router";
import UserIsLogin from "./pages/utilisateurs/userIsLogin/UserIsLogin";

function App() {
  return (
    <div className="min-h-screen App">
        <GlobalContextProvider>
          <Routes>
            <Route path="/*" element={<UserIsLogin />} />
            <Route path="/admin" element={<AdminConnexion />} />
            <Route path="/admin/*" element={<IsLogin />} />
          </Routes>
        </GlobalContextProvider>
    </div>
  );
}

export default App;
