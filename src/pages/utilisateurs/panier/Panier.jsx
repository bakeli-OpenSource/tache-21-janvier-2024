import React from 'react';
import Footer from '../../../usersComponents/footer/Footer';
import Commande from '../../../usersComponents/PanierComponents/Commande';
import Cart from '../../../usersComponents/PanierComponents/Cart';
import useGlobal from '../../../utils/hooks/useGlobal';

const Panier = () => {
	const { setDropdown } = useGlobal();
	return (
		<>
			<section
				onClick={() => setDropdown(false)}
				className="container mx-auto my-20 mt-20 bg-white-700"
			>
				<div className="container flex flex-col justify-center md:flex-row">
					<div className="overflow-hidden bg-white rounded-lg shadow-lg md:w-1/2 lg:w-1/2 xl:w-1/2 md:mb-0">
						<Cart />
					</div>

					<div className="bg-gray-200 shadow-md md:w-full lg:w-1/4 xl:w-1/4">
						<Commande />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Panier;
