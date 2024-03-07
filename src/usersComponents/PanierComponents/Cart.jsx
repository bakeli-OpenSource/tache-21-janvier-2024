import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { HiShoppingCart } from 'react-icons/hi2';
import { BsArrowLeft } from 'react-icons/bs';
import ComponentButton from '../button/ComponentButton';
import { usePanier } from '../../utils/contexte/PanierContext';
import Choix from '../compteComponent/Choix';

const Cart = () => {
	const {
		items,
		totalItems,
		removeItem,
		quantity,
		cartQuantities,
		updateQuantity,
	} = usePanier();

	return (
		<div>
			<div className="p-5">
				<div className="flex items-center justify-between mb-5">
					<h1 className="text-3xl font-bold text-black">Votre Panier</h1>
					<span className="text-sm text-muted text-[20px]">
						{totalItems} Produits
					</span>
				</div>

				<hr className="my-4" />

				<div className="overflow-x-auto">
					{items.length > 0 ? (
						<table className="min-w-full">
							<thead>
								<tr>
									<th className="py-2">Produits</th>
									<th className="py-2">Quantité</th>
									<th className="py-2">Prix unitaire</th>
									<th className="hidden py-2 md:table-cell">Total</th>
								</tr>
							</thead>
							<tbody>
								{items.map((item) => (
									<tr key={item._id}>
										<td className="flex items-center justify-center py-2 mb-5 text-sm">
											<img
												src={item.imageUrl}
												alt={item.nom}
												className="w-16 h-auto"
											/>
											<div className="flex flex-col content-between gap-1 ml-3 text-sm">
												<h5>{item.nom}</h5>
												<h5 className="text-blue-300">{item.categorie}</h5>
												<h4
													className="flex items-center text-red-500 cursor-pointer"
													onClick={() => removeItem(item._id)}
												>
													<span className="">Supprimer</span>
													<MdDelete className="mt-1 text-sm font-bold text-red-500" />
												</h4>
											</div>
										</td>
										<td className="py-2">
											<div className="flex items-center justify-center mb-4 text-center mx-7">
												<ComponentButton
													className="px-2 py-1 bg-gray-200"
													texte="-"
													onClick={() => {
														const newQuantity = Math.max(item.quantity - 1, 1);
														updateQuantity(item._id, newQuantity);
													}}
												/>
												<input
													min={1}
													value={cartQuantities[item._id] || 1} // Utilisez cartQuantities pour obtenir la quantité de l'article
													className="w-8 h-8 text-center border border-gray-300"
													onChange={(e) => {
														const newQuantity = parseInt(e.target.value);
														updateQuantity(item._id, newQuantity);
													}}
												/>
												<ComponentButton
													className="px-2 py-1 bg-gray-200"
													texte="+"
													onClick={() => {
														const newQuantity = item.quantity + 1;
														updateQuantity(item._id, newQuantity);
													}}
												/>
											</div>
										</td>
										<td className="py-2 text-sm text-center">
											<div className="mb-4">{item.prix} FCFA</div>
										</td>
										<td className="hidden py-2 text-center md:table-cell">
											<div className="mb-7">
												{item.prix * item.quantity} FCFA
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<div className="p-4 text-center text-gray-500">
							<Choix
								icon={
									<HiShoppingCart
										size={50}
										className="mx-auto text-white bg-inherit"
									/>
								}
								titre="Votre panier est vide!"
								texte1="Parcourez nos produits et découvrez nos meilleures offres!"
								textButton="Commencez vos achats"
							/>
						</div>
					)}
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
	);
};

export default Cart;
