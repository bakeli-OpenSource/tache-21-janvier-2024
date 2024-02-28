import React from 'react';
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
import '@fontsource/montserrat';

function App() {
	return (
		<div className="min-h-screen App font-montserrat">
			<GlobalContextProvider>
				<PanierProvider>
					<Routes>
						<Route path="/*" element={<UserIsLogin />} />
						<Route path="/admin" element={<AdminConnexion />} />
						<Route path="/admin/*" element={<IsLogin />} />
					</Routes>
				</PanierProvider>
			</GlobalContextProvider>
		</div>
	);
}

export default App;
