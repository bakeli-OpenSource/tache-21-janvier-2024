import React, { useContext } from 'react';
import Footer from '../../usersComponents/footer/Footer';
import Navbar from './NavbarUtilisateut/Navbar/Navbar';
import Header from '../../usersComponents/headerUserComponent/Header';
import ScrollingText from '../../usersComponents/cards/ScrollingText';
import Produit from '../../usersComponents/cards/Produit';
import { ProduitContext } from '../../usersComponents/cards/ProduitContext';
import useGlobal from '../../utils/hooks/useGlobal';

export default function Accueil() {
	const { produits } = useContext(ProduitContext);

	const produitsParCategorie = produits.reduce((acc, produit) => {
		if (!acc[produit.categorie]) {
			acc[produit.categorie] = [];
		}
		acc[produit.categorie].push(produit);
		return acc;
	}, {});
	const { setDropdown } = useGlobal();

	return (
		<div>
			<Navbar className="fixed top-0 z-50 w-full bg-white" />
			<div onClick={() => setDropdown(false)}>
				<Header />
				<div className="flex flex-col px-[35px]">
					{Object.entries(produitsParCategorie).map(([categorie, produits]) => (
						<section key={categorie} className="py-10">
							<h2 className="text-2xl font-bold mb-4">{categorie}</h2>
							<div className="container mx-auto">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
									{produits.map((produit) => (
										<Produit produit={produit} key={produit._id} />
									))}
								</div>
							</div>
						</section>
					))}

					<div>
						<ScrollingText />
					</div>
				</div>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
}
