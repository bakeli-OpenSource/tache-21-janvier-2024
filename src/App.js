
import { Route, Routes } from "react-router-dom";
import AdminConnexion from "./pages/admin/connexion/AdminConnexion";
import IsLogin from "./pages/admin/IsLogin";

function App() {
  return (

    <div className="App min-h-screen">
      <Routes>
        <Route path="/admin" element={<AdminConnexion />} />
        <Route path="/admin/*" element={<IsLogin />} />
      </Routes>
    </div>
  );
}

export default App;
