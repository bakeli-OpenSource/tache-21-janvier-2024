import React from 'react';
import Footer from '../../../usersComponents/footer/Footer';
import Navbar from '../NavbarUtilisateut/Navbar/Navbar';
import Commande from '../../../usersComponents/PanierComponents/Commande';
import Cart from '../../../usersComponents/PanierComponents/Cart';

const Panier = () => {
	
	return (
		<div>
			<Navbar className="bg-white z-50 fixed top-0 w-full"/>
			<section className="container mx-auto my-20 bg-white-700">
				<div className="container flex flex-col md:flex-row justify-center">
					<div className="md:w-1/2 lg:w-1/2 xl:w-1/2 md:mb-0 shadow-lg overflow-hidden bg-white rounded-lg">
						<Cart />
					</div>

					<div className="md:w-full lg:w-1/4 xl:w-1/4 bg-gray-200 shadow-md">
						<Commande />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Panier;