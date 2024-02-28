import React from "react";
import AdminConnexion from './pages/admin/connexion/AdminConnexion';
import IsLogin from './pages/admin/IsLogin';
import GlobalContextProvider from './utils/contexte/GlobalContext';
import Accueil from './pages/utilisateurs/Accueil';
import Panier from './pages/utilisateurs/panier/Panier';
import Shop from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Shop';
import Arrivals from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Arrivals';
import Sales from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Sales';
import Jornals from './pages/utilisateurs/NavbarUtilisateut/NavbarLinks/Journal';
import { Route, Routes } from 'react-router';
import UserIsLogin from './pages/utilisateurs/userIsLogin/UserIsLogin';
import { PanierProvider } from './utils/contexte/PanierContext';
import AOS from "aos";
import "aos/dist/aos.css";
import '@fontsource/montserrat';
import ErreurPage from "./pages/utilisateurs/erreurPage/ErreurPage";

function App() {

	React.useEffect(() => {
		AOS.init({
		  offset: 100,
		  duration: 800,
		  easing: "ease-in-sine",
		  delay: 100,
		});
		AOS.refresh();
	  }, []);

	return (
		<div className="min-h-screen App font-montserrat">
			<GlobalContextProvider>
				<PanierProvider>
					<Routes>
						<Route path="/*" element={<UserIsLogin />} />
						<Route path="/admin" element={<AdminConnexion />} />
						<Route path="/admin/*" element={<IsLogin />} />
						<Route path="/error" element={<ErreurPage />} />
						<Route path="*" element={<ErreurPage />} />
					</Routes>
				</PanierProvider>
			</GlobalContextProvider>
		</div>
	);
}

export default App;


