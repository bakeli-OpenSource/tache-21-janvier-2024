import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';
import ComponentButton from '../button/ComponentButton';
import { usePanier } from '../../utils/contexte/PanierContext';

const Cart = () => {
	const { items, totalItems, removeItem, updateQuantity } = usePanier();

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
									<tr key={item.id}>
										<td className="flex items-center justify-center py-2 mb-5 text-sm">
											<img
												src={item.image}
												alt={item.name}
												className="w-16 h-auto"
											/>
											<div className="flex flex-col content-between gap-2 ml-3 text-sm">
												<h5>{item.name}</h5>
												<h5 className="text-blue-300">{item.categorie}</h5>
												<h4
													className="flex items-center text-red-500 cursor-pointer"
													onClick={() => removeItem(item.id)}
												>
													<span className="">Supprimer</span>
													<MdDelete className="mt-1 text-sm font-bold text-red-500" />
												</h4>
											</div>
										</td>
										<td className="py-2">
											<div className="flex items-center justify-center mb-4 text-center">
												<ComponentButton
													className="px-2 py-1 bg-gray-200"
													texte="-"
													onClick={() =>
														updateQuantity(item.id, item.quantity - 1)
													}
												/>
												<input
													min={1}
													defaultValue={1}
													value={item.quantity}
													className="w-8 h-8 text-center border border-gray-300"
													onChange={(e) =>
														updateQuantity(item.id, parseInt(e.target.value))
													}
												/>
												<ComponentButton
													className="px-2 py-1 bg-gray-200"
													texte="+"
													onClick={() =>
														updateQuantity(item.id, item.quantity + 1)
													}
												/>
											</div>
										</td>
										<td className="py-2 text-sm text-center">
											<div className="mb-4">{item.price.toFixed(2)} FCFA</div>
										</td>
										<td className="hidden py-2 text-center md:table-cell">
											<div className="mb-7">
												{(item.price * item.quantity).toFixed(2)} FCFA
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<div className="p-4 text-center text-gray-500">
							<h1 className="font-bold text-[20px]">
								Aucun produit dans votre Panier
							</h1>
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
