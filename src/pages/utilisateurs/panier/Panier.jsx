import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';
import Footer from '../../../usersComponents/footer/Footer';
import Navbar from '../NavbarUtilisateut/Navbar/Navbar';

const Panier = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			name: 'Cotton T-shirt',
			categorie: 'T-shirt',
			price: 5000,
			quantity: 1,
			image:
				'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
		},
		{
			id: 2,
			name: 'Cotton T-shirt',
			categorie: 'T-shirt',
			price: 10000,
			quantity: 1,
			image:
				'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp',
		},
		{
			id: 3,
			name: 'Cotton T-shirt',
			categorie: 'T-shirt',
			price: 15000,
			quantity: 1,
			image:
				'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp',
		},
	]);

	const [deliveryOption, setDeliveryOption] = useState('1');
	const deliveryCosts = {
		1: 1000,
		2: 1500,
		3: 2000,
		4: 2500,
		5: 4000,
	};

	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [promoCode, setPromoCode] = useState('');

	const promoCodes = {
		PROMO01: 0.9,
		PROMO02: 0.8,
		PROMO03: 0.3,
	};

	const removeItem = (id) => {
		const updatedItems = items.filter((item) => item.id !== id);
		setItems(updatedItems);
	};

	const updateQuantity = (id, newQuantity) => {
		const updatedQuantity = Math.max(newQuantity, 1);

		const updatedItems = items.map((item) =>
			item.id === id ? { ...item, quantity: updatedQuantity } : item,
		);

		setItems(updatedItems);
	};

	const applyPromoCode = (total, promoCode) => {
		const uppercasePromoCode = promoCode.toUpperCase();

		if (promoCodes.hasOwnProperty(uppercasePromoCode)) {
			return total * promoCodes[uppercasePromoCode];
		};
		if(promoCode === ''){
			alert("Entrez le Code Promo");
		}
		else{
			alert("Invalid Promo Code");
		}

		return total;
	};

	useEffect(() => {
		const newTotalItems = items.reduce(
			(total, item) => total + item.quantity,
			0,
		);
		setTotalItems(newTotalItems);

		const newTotalPrice = items.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
		setTotalPrice(newTotalPrice);
	}, [items]);


	return (
		<div>
			<Navbar className="bg-white z-50 fixed top-0 w-full"/>
			<section className="container w-auto h-auto mx-auto my-20 bg-white-700">
				<div className="container flex justify-center w-auto">
					<div className="w-1/2 shadow-lg">
						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<div className="p-5">
								<div className="flex items-center justify-between mb-5">
									<h1 className="text-3xl font-bold text-black">
										Votre Panier
									</h1>
									<span className="text-sm text-muted text-[20px]">
										{totalItems} Produits
									</span>
								</div>

								<hr className="my-4" />

								<div className="overflow-x-auto">
									<table className="min-w-full">
										<thead>
											<tr>
												<th className="py-2">Produits</th>
												<th className="py-2">Quantité</th>
												<th className="py-2">Prix unitaire</th>
												<th className="py-2">Total</th>
											</tr>
										</thead>
										<tbody>
											{items.map((item) => (
												<tr key={item.id}>
													<td className="flex items-center justify-center py-2 mb-5">
														<img
															src={item.image}
															alt={item.name}
															className="w-16 h-auto"
														/>
														<div className="flex flex-col content-between gap-2 ml-5">
															<h5>{item.name}</h5>
															<h5 className="text-blue-300">
																{item.categorie}
															</h5>
															<h4
																className="flex items-center text-red-500 cursor-pointer"
																onClick={() => removeItem(item.id)}
															>
																<span className="">Supprimer</span>
																<MdDelete className="mt-1 font-bold text-red-500" />
															</h4>
														</div>
													</td>
													<td className="py-2">
														<div className="flex items-center justify-center text-center">
															<button
																className="px-2 py-1 bg-gray-200"
																onClick={() =>
																	updateQuantity(item.id, item.quantity - 1)
																}
															>
																-
															</button>
															<input
																min={1}
																defaultValue={1}
																value={item.quantity}
																className="w-8 h-8 text-center border border-gray-300"
																onChange={(e) =>
																	updateQuantity(
																		item.id,
																		parseInt(e.target.value),
																	)
																}
															/>
															<button
																className="px-2 py-1 bg-gray-200"
																onClick={() =>
																	updateQuantity(item.id, item.quantity + 1)
																}
															>
																+
															</button>
														</div>
													</td>
													<td className="py-2 text-center">
														{item.price.toFixed(2)} FCFA
													</td>
													<td className="py-2 text-center">
														{(item.price * item.quantity).toFixed(2)} FCFA
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>

								<hr className="my-4" />

								<div className="pt-5">
									<h6 className="mb-0">
										<Link to="/">
											<div className="flex items-center justify-center w-40 h-12 font-bold text-[13px] text-purple-500">
												<span>
													<BsArrowLeft />
												</span>
												<span className="ml-2">Retour à la boutique</span>
											</div>
										</Link>
									</h6>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full mt-4 bg-gray-200 shadow-md md:w-1/2 lg:w-1/2 xl:w-1/4 md:mt-0">
						<div className="p-5 mx-5">
							<h3 className="text-2xl font-bold">Commandes</h3>

							<hr className="my-4 bg-black" />

							<div className="flex justify-between mb-4">
								<h5 className="text-uppercase text-[20px] font-bold">
									Produits {totalItems}
								</h5>
								<h5 className="text-[20px] font-bold">
									{totalPrice.toFixed(2)} FCFA
								</h5>
							</div>

							<h5 className="mb-3 text-uppercase">Livraison</h5>

							<div className="pb-2 mb-4">
								<select
									className="w-full p-2 bg-white rounded"
									value={deliveryOption}
									onChange={(e) => setDeliveryOption(e.target.value)}
								>
									<option value="1">Livraison-Dakar-1000 FCFA</option>
									<option value="2">Dakar-Banlieu-1500 FCFA</option>
									<option value="3">Dakar-Rufisque-2000 FCFA</option>
									<option value="3">Dakar-Thies-2500 FCFA</option>
									<option value="4">Dakar-Regions-4000 FCFA</option>
								</select>
							</div>

							<h5 className="mb-3 text-uppercase">Code Promo</h5>

							<div className="mb-5">
								<input
									type="text"
									className="w-full p-2 border rounded"
									placeholder="Enter your code"
									value={promoCode}
									onChange={(e) => setPromoCode(e.target.value)}
								/>
								<button
									className="w-20 h-10 my-5 text-white bg-purple-500"
									onClick={() =>
										setTotalPrice(applyPromoCode(totalPrice, promoCode))
									}
								>
									Appliquez
								</button>
							</div>

							<hr className="my-4 text-black-300" />

							<div className="flex justify-between mb-5">
								<h5 className="text-uppercase mt-2 text-[20px]">Prix Total</h5>
								<h5 className="text-[30px] font-bold">
									{(totalPrice + deliveryCosts[deliveryOption]).toFixed(2)}
									FCFA
								</h5>
							</div>

							<button className="w-full px-4 py-2 rounded-lg text-[20px] text-white bg-black">
								Valider la commande
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Panier;
